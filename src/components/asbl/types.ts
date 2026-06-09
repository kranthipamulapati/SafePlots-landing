/** @format */

export type Coordinate = { lat: number; lng: number };

export type AsblPoiCategoryId =
    | "school"
    | "office"
    | "transit"
    | "hospital"
    | "mall"
    | "dining";

export type AsblPoiRecord = {
    placeId: string;
    name: string;
    location: Coordinate;
};

export type AsblProjectPoi = Record<AsblPoiCategoryId, AsblPoiRecord[]>;

export type ASBLApartmentGrid = {
    rows: number;
    columns: number;
    cells?: Array<Array<string | number>>;
};

export type ASBLTowerConfig = {
    label: string;
    floor_count: number;
    floor_height_meters: number;
    footprint: Coordinate[];
    apartment_grid?: ASBLApartmentGrid;
};

export type ASBLProjectRow = {
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

export type AsblPoiCategory = {
    id: AsblPoiCategoryId;
    label: string;
    description: string;
};

export type AsblPoi = AsblPoiRecord & {
    category: AsblPoiCategoryId;
};

export type TowerData = {
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

export type TowerFloorSlice = {
    id: string;
    tower: TowerData;
    floorIndex: number;
    rowIndex?: number;
    colIndex?: number;
    cellLabel?: string;
    footprint: [number, number, number][];
    elevationMeters: number;
};

export type TowerLabelData = {
    id: string;
    label: string;
    isSelectedProject: boolean;
    position: [number, number, number];
};

export type FloorStripeColors = [Rgba, Rgba];

export type Rgba = [number, number, number, number];
