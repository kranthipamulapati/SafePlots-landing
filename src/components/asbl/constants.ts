/** @format */

import type { AsblPoiCategory } from "./types";

export const icrisatGeoCenter = {
    lat: 17.505673,
    lng: 78.275954,
};

export const ASBL_POI_CATEGORIES: AsblPoiCategory[] = [
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
