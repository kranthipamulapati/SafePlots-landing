/** @format */

import { ControlPosition } from "@vis.gl/react-google-maps";

const DEGREES_PER_SECOND = 2.5;

const fullscreenControlOptions = {
    position: ControlPosition.BOTTOM_RIGHT,
};

const mapTypeControlOptions = {
    position: ControlPosition.TOP_RIGHT,
    mapTypeIds: ["hybrid", "roadmap", "satellite"],
};

const googleMapsMapId = import.meta.env.PUBLIC_GOOGLE_MAPS_MAP_ID;
const googleMapsApiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

export {
    googleMapsMapId,
    googleMapsApiKey,
    DEGREES_PER_SECOND,
    mapTypeControlOptions,
    fullscreenControlOptions,
};
