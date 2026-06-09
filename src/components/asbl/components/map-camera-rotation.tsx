/** @format */

import { useRef, useEffect } from "react";

import { useMap } from "@vis.gl/react-google-maps";

import { DEGREES_PER_SECOND } from "../constants";

type Props = {
    autoRotate: boolean;
    onAutoRotateChange: (autoRotate: boolean) => void;
};

function MapCameraRotation({ autoRotate, onAutoRotateChange }: Props) {
    const map = useMap();
    const isAutoRotationUpdateRef = useRef(false);
    const onAutoRotateChangeRef = useRef(onAutoRotateChange);
    onAutoRotateChangeRef.current = onAutoRotateChange;

    useEffect(() => {
        if (!map) return;

        const headingListener = map.addListener("heading_changed", () => {
            if (autoRotate && !isAutoRotationUpdateRef.current) {
                onAutoRotateChangeRef.current(false);
            }
        });

        const mapDiv = map.getDiv();
        const stopAutoRotate = () => {
            if (autoRotate) onAutoRotateChangeRef.current(false);
        };

        const clickListener = map.addListener("click", stopAutoRotate);
        const dragListener = map.addListener("dragstart", stopAutoRotate);
        mapDiv.addEventListener("mousedown", stopAutoRotate, true);
        mapDiv.addEventListener("touchstart", stopAutoRotate, {
            passive: true,
            capture: true,
        });

        return () => {
            dragListener.remove();
            clickListener.remove();
            headingListener.remove();
            mapDiv.removeEventListener("mousedown", stopAutoRotate, true);
            mapDiv.removeEventListener("touchstart", stopAutoRotate, true);
        };
    }, [map, autoRotate]);

    useEffect(() => {
        if (!map || !autoRotate) return;

        let frameId = 0;
        let lastTime = performance.now();

        const tick = (now: number) => {
            const deltaSeconds = (now - lastTime) / 1000;
            lastTime = now;

            isAutoRotationUpdateRef.current = true;
            const heading = map.getHeading() ?? 0;
            map.moveCamera({
                heading: (heading + DEGREES_PER_SECOND * deltaSeconds) % 360,
            });
            requestAnimationFrame(() => {
                isAutoRotationUpdateRef.current = false;
            });

            frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [map, autoRotate]);

    return null;
}

export default MapCameraRotation;
