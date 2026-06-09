/** @format */

import type {
    Rgba,
    FloorStripeColors,
    AsblPoiCategoryId,
    ApartmentStatusId,
} from "../types";

import { APARTMENT_STATUSES } from "../constants";

const BUILDING_COLORS = {
    selected: {
        towerLine: [203, 213, 225, 255] as Rgba,
        siteFill: [100, 116, 139, 48] as Rgba,
        siteLine: [148, 163, 184, 190] as Rgba,
        towerFloorStripes: [
            [71, 85, 105, 220],
            [51, 65, 85, 220],
        ] as FloorStripeColors,
    },
    dimmed: {
        towerLine: [100, 116, 139, 128] as Rgba,
        siteFill: [248, 250, 252, 18] as Rgba,
        siteLine: [148, 163, 184, 80] as Rgba,
        towerFloorStripes: [
            [248, 250, 252, 120],
            [220, 225, 230, 100],
        ] as FloorStripeColors,
    },
};

const LABEL_COLORS = {
    selectedProject: [71, 85, 105, 255] as Rgba,
    dimmed: BUILDING_COLORS.dimmed.towerLine,
    outline: [255, 255, 255, 200] as Rgba,
};

const POI_CATEGORY_COLORS: Record<AsblPoiCategoryId, Rgba> = {
    school: [59, 130, 246, 200],
    office: [168, 85, 247, 200],
    hospital: [239, 68, 68, 200],
    mall: [236, 72, 153, 200],
    dining: [249, 115, 22, 200],
};

const POI_CATEGORY_LINE_COLORS: Record<AsblPoiCategoryId, Rgba> = {
    school: [96, 165, 250, 255],
    office: [192, 132, 252, 255],
    hospital: [248, 113, 113, 255],
    mall: [244, 114, 182, 255],
    dining: [251, 146, 60, 255],
};

const APARTMENT_STATUS_COLORS: Record<ApartmentStatusId, Rgba> =
    Object.fromEntries(
        APARTMENT_STATUSES.map((status) => [status.id, status.color]),
    ) as Record<ApartmentStatusId, Rgba>;

const APARTMENT_STATUS_FALLBACK: Rgba = [100, 116, 139, 200];

export {
    LABEL_COLORS,
    BUILDING_COLORS,
    POI_CATEGORY_COLORS,
    POI_CATEGORY_LINE_COLORS,
    APARTMENT_STATUS_COLORS,
    APARTMENT_STATUS_FALLBACK,
};
