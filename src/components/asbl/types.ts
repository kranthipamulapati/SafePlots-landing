/** @format */

type Coordinate = { lat: number; lng: number };

type AsblPoiCategoryId = "school" | "office" | "hospital" | "mall" | "dining";

type AsblPoiRecord = {
    placeId: string;
    name: string;
    location: Coordinate;
};

type AsblProjectPoi = Record<AsblPoiCategoryId, AsblPoiRecord[]>;

type ASBLApartmentGrid = {
    rows: number;
    columns: number;
    cells?: Array<Array<string | number>>;
};

type ASBLTowerConfig = {
    label: string;
    floor_count: number;
    floor_height_meters: number;
    footprint: Coordinate[];
    apartment_grid?: ASBLApartmentGrid;
};

type ASBLProjectRow = {
    id: string;
    name: string;
    possession: string;
    total_units: number;
    area_in_acres: number;
    coordinates: Coordinate[];
    towers_config: ASBLTowerConfig[];
    POI: AsblProjectPoi;
    created: string;
    updated: string;
};

type AsblPoiCategory = {
    id: AsblPoiCategoryId;
    label: string;
    description: string;
};

type AsblPoi = AsblPoiRecord & {
    category: AsblPoiCategoryId;
};

type TowerData = {
    id: string;
    projectId: string;
    projectName: string;
    label: string;
    footprint: [number, number][];
    heightMeters: number;
    floorCount: number;
    floorHeightMeters: number;
    apartmentGrid?: ASBLApartmentGrid;
};

type TowerFloorSlice = {
    id: string;
    tower: TowerData;
    floorIndex: number;
    rowIndex?: number;
    colIndex?: number;
    cellLabel?: string;
    footprint: [number, number, number][];
    elevationMeters: number;
};

type TowerLabelData = {
    id: string;
    label: string;
    isSelectedProject: boolean;
    position: [number, number, number];
};

type FloorStripeColors = [Rgba, Rgba];

type Rgba = [number, number, number, number];

type Perspective = "user" | "sales";

type MapThemeId = "light" | "dark";

type ApartmentStatusId =
    | "available"
    | "booked"
    | "sold"
    | "hold"
    | "not_released";

type ApartmentStatus = {
    id: ApartmentStatusId;
    label: string;
    description: string;
    color: Rgba;
};

export type {
    Rgba,
    AsblPoi,
    TowerData,
    Coordinate,
    MapThemeId,
    Perspective,
    AsblPoiRecord,
    AsblProjectPoi,
    ASBLProjectRow,
    TowerLabelData,
    AsblPoiCategory,
    TowerFloorSlice,
    ASBLTowerConfig,
    ApartmentStatus,
    ASBLApartmentGrid,
    AsblPoiCategoryId,
    FloorStripeColors,
    ApartmentStatusId,
};
