/** @format */

import { useMemo, useState, useCallback } from "react";
import { Map, ControlPosition, APIProvider } from "@vis.gl/react-google-maps";

import {
    ASBL_PROJECTS,
    googleMapsMapId,
    googleMapsApiKey,
    icrisatGeoCenter,
} from "./data";
import { getPoisForCategory } from "./app";
import type { AsblPoiCategoryId } from "./types";

import NearbyPlaces from "./components/nearby-places";
import DeckGlOverlay from "./components/deck-gl-overlay";
import ProjectOverview from "./components/project-overview";
import MapViewControls from "./components/map-view-controls";
import MapCameraRotation from "./components/map-camera-rotation";

const mapTypeControlOptions = {
    position: ControlPosition.TOP_RIGHT,
    mapTypeIds: ["hybrid", "roadmap", "satellite"],
};

const fullscreenControlOptions = {
    position: ControlPosition.BOTTOM_RIGHT,
};

export default function AsblMap() {
    const [project, setProject] = useState(ASBL_PROJECTS[0]);
    const [poiCategory, setPoiCategory] = useState<AsblPoiCategoryId>();
    const [autoRotate, setAutoRotate] = useState(true);
    const stopAutoRotate = useCallback(() => setAutoRotate(false), []);

    const pois = useMemo(() => {
        if (!poiCategory) return [];
        return getPoisForCategory(project, poiCategory);
    }, [project, poiCategory]);

    return (
        <APIProvider apiKey={googleMapsApiKey} region="IN" version="3.64">
            <div className="relative h-dvh w-full overflow-hidden bg-slate-950">
                <aside className="...">{/* sidebar — same as now */}</aside>

                <Map
                    mapId={googleMapsMapId || undefined}
                    defaultZoom={17}
                    defaultTilt={90}
                    zoomControl={false}
                    cameraControl={false}
                    mapTypeControl={true}
                    fullscreenControl={true}
                    streetViewControl={true}
                    mapTypeId="roadmap"
                    gestureHandling="greedy"
                    defaultCenter={icrisatGeoCenter}
                    mapTypeControlOptions={mapTypeControlOptions}
                    fullscreenControlOptions={fullscreenControlOptions}
                >
                    <DeckGlOverlay
                        pois={pois}
                        project={project}
                        projects={ASBL_PROJECTS}
                        onMapInteract={stopAutoRotate}
                        onProjectSelect={(projectId) =>
                            setProject(
                                ASBL_PROJECTS.find((p) => p.id === projectId)!,
                            )
                        }
                    />
                    <MapCameraRotation
                        autoRotate={autoRotate}
                        onAutoRotateChange={setAutoRotate}
                    />
                </Map>
            </div>
        </APIProvider>
    );
}
