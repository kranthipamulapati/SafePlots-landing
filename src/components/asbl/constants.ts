/** @format */

import type { ApartmentStatus, AsblPoiCategory } from "./types";

export const icrisatGeoCenter = {
    lat: 17.505673,
    lng: 78.275954,
};

export const DEGREES_PER_SECOND = 2.5;

export const APARTMENT_STATUSES: ApartmentStatus[] = [
    {
        id: "available",
        label: "Available",
        description: "Open for sale",
        color: [34, 197, 94, 220],
    },
    {
        id: "booked",
        label: "Booked",
        description: "Token / advance paid",
        color: [251, 191, 36, 220],
    },
    {
        id: "sold",
        label: "Sold",
        description: "Agreement done",
        color: [239, 68, 68, 220],
    },
    {
        id: "hold",
        label: "On hold",
        description: "Blocked by management",
        color: [168, 85, 247, 220],
    },
    {
        id: "not_released",
        label: "Not released",
        description: "Inventory not launched",
        color: [100, 116, 139, 200],
    },
];

/** Demo weights: available 35%, booked 20%, sold 30%, hold 8%, not_released 7% */
export const APARTMENT_STATUS_WEIGHTS: Array<{
    id: ApartmentStatus["id"];
    weight: number;
}> = [
    { id: "available", weight: 35 },
    { id: "booked", weight: 20 },
    { id: "sold", weight: 30 },
    { id: "hold", weight: 8 },
    { id: "not_released", weight: 7 },
];

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
