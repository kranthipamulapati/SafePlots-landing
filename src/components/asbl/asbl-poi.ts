/** @format */

import type {
    LatLng,
    AsblPoi,
    ASBLProjectRow,
    AsblPoiCategory,
    AsblPoiCategoryId,
} from "./types.ts";

const ASBL_POI_CATEGORIES: AsblPoiCategory[] = [
    {
        id: "office",
        label: "Offices",
        description: "Offices & IT parks",
    },
    {
        id: "school",
        label: "Schools",
        description: "Schools & Colleges",
    },
    {
        id: "transit",
        label: "Transit",
        description: "Metro, Airport, ORR, Bus & Rail",
    },
    {
        id: "dining",
        label: "Dining",
        description: "Cafes & Restaurants",
    },
    {
        id: "mall",
        label: "Malls",
        description: "Shopping Malls",
    },

    {
        id: "hospital",
        label: "Hospitals",
        description: "Hospitals & Major Clinics",
    },
];

function getProjectCenter(project: ASBLProjectRow): LatLng {
    const { coordinates } = project;

    return {
        lat:
            coordinates.reduce((sum, coordinate) => sum + coordinate.lat, 0) /
            coordinates.length,
        lng:
            coordinates.reduce((sum, coordinate) => sum + coordinate.lng, 0) /
            coordinates.length,
    };
}

function getPoisForCategory(
    project: ASBLProjectRow,
    category: AsblPoiCategoryId,
): AsblPoi[] {
    const records = project.POI?.[category] ?? [];

    return records.map((record) => ({
        ...record,
        category,
    }));
}

export { ASBL_POI_CATEGORIES, getProjectCenter, getPoisForCategory };
