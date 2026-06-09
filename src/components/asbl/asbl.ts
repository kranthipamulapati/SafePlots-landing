/** @format */

import type { ASBLProjectRow, ASBLApartmentGrid } from "./types.ts";

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

function getTowerData(project: ASBLProjectRow): TowerData[] {
    return project.towers_config.map((tower, index) => ({
        id: `${project.id}-tower-${index}`,
        projectId: project.id,
        projectName: project.name,
        label: tower.label,
        footprint: tower.footprint.map((c) => [c.lng, c.lat]),
        heightMeters: tower.floor_count * tower.floor_height_meters,
        floorCount: tower.floor_count,
        floorHeightMeters: tower.floor_height_meters,
        apartmentGrid: tower.apartment_grid,
    }));
}

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

function bilinearPoint(
    p00: [number, number],
    p10: [number, number],
    p01: [number, number],
    p11: [number, number],
    u: number,
    v: number,
): [number, number] {
    const uOpposite = 1 - u;
    const vOpposite = 1 - v;

    return [
        uOpposite * vOpposite * p00[0] +
            u * vOpposite * p10[0] +
            uOpposite * v * p01[0] +
            u * v * p11[0],
        uOpposite * vOpposite * p00[1] +
            u * vOpposite * p10[1] +
            uOpposite * v * p01[1] +
            u * v * p11[1],
    ];
}

function subdivideFootprintIntoGrid(
    footprint: [number, number][],
    columns: number,
    rows: number,
): [number, number][][] {
    if (footprint.length < 4 || columns < 1 || rows < 1) {
        return [footprint];
    }

    const [bottomLeft, bottomRight, topRight, topLeft] = footprint;
    const cells: [number, number][][] = [];

    for (let row = 0; row < rows; row++) {
        const v0 = row / rows;
        const v1 = (row + 1) / rows;

        for (let col = 0; col < columns; col++) {
            const u0 = col / columns;
            const u1 = (col + 1) / columns;

            cells.push([
                bilinearPoint(
                    bottomLeft,
                    bottomRight,
                    topLeft,
                    topRight,
                    u0,
                    v0,
                ),
                bilinearPoint(
                    bottomLeft,
                    bottomRight,
                    topLeft,
                    topRight,
                    u1,
                    v0,
                ),
                bilinearPoint(
                    bottomLeft,
                    bottomRight,
                    topLeft,
                    topRight,
                    u1,
                    v1,
                ),
                bilinearPoint(
                    bottomLeft,
                    bottomRight,
                    topLeft,
                    topRight,
                    u0,
                    v1,
                ),
            ]);
        }
    }

    return cells;
}

function getApartmentCellLabel(
    cells: ASBLApartmentGrid["cells"],
    row: number,
    col: number,
): string | undefined {
    const value = cells?.[row]?.[col];
    if (value === undefined || value === null) return undefined;

    const label = String(value).trim();
    return label.length > 0 ? label : undefined;
}

function getTowerFloorSlices(project: ASBLProjectRow): TowerFloorSlice[] {
    const slices: TowerFloorSlice[] = [];

    for (const tower of getTowerData(project)) {
        const grid = tower.apartmentGrid;

        for (let floorIndex = 0; floorIndex < tower.floorCount; floorIndex++) {
            const baseAltitude = floorIndex * tower.floorHeightMeters;

            if (grid && grid.columns > 0 && grid.rows > 0) {
                const cellPolygons = subdivideFootprintIntoGrid(
                    tower.footprint,
                    grid.columns,
                    grid.rows,
                );

                for (let row = 0; row < grid.rows; row++) {
                    for (let col = 0; col < grid.columns; col++) {
                        const cellIndex = row * grid.columns + col;

                        slices.push({
                            id: `${tower.id}-floor-${floorIndex}-r${row}-c${col}`,
                            tower,
                            floorIndex,
                            rowIndex: row,
                            colIndex: col,
                            cellLabel: getApartmentCellLabel(
                                grid.cells,
                                row,
                                col,
                            ),
                            elevationMeters: tower.floorHeightMeters,
                            footprint: cellPolygons[cellIndex].map(
                                ([lng, lat]) => [lng, lat, baseAltitude],
                            ),
                        });
                    }
                }

                continue;
            }

            slices.push({
                id: `${tower.id}-floor-${floorIndex}`,
                tower,
                floorIndex,
                elevationMeters: tower.floorHeightMeters,
                footprint: tower.footprint.map(([lng, lat]) => [
                    lng,
                    lat,
                    baseAltitude,
                ]),
            });
        }
    }

    return slices;
}

type TowerLabelData = {
    id: string;
    label: string;
    isSelectedProject: boolean;
    position: [number, number, number];
};

function getTowerLabelData(
    project: ASBLProjectRow,
    isSelectedProject: boolean,
): TowerLabelData[] {
    return getTowerData(project).map((tower) => {
        const footprint = tower.footprint;
        const lng =
            footprint.reduce((sum, [lng]) => sum + lng, 0) / footprint.length;
        const lat =
            footprint.reduce((sum, [, lat]) => sum + lat, 0) / footprint.length;

        return {
            id: tower.id,
            label: tower.label,
            isSelectedProject,
            position: [lng, lat, tower.heightMeters + 10],
        };
    });
}

function formatPossession(dateString: string) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
    });
}

function getProjectSummary(project: ASBLProjectRow) {
    const towers = project.towers_config;
    const floorCounts = towers.map((t) => t.floor_count);
    const heights = towers.map((t) => t.floor_count * t.floor_height_meters);
    const unitsPerAcre =
        project.area_in_acres > 0
            ? project.total_units / project.area_in_acres
            : undefined;

    return {
        towerCount: towers.length,
        maxFloors: Math.max(...floorCounts),
        minFloors: Math.min(...floorCounts),
        maxHeight: Math.max(...heights),
        possession: formatPossession(project.possession),
        totalUnits: project.total_units,
        areaInAcres: project.area_in_acres,
        unitsPerAcre,
    };
}

export type { TowerFloorSlice };
export { getTowerLabelData, getProjectSummary, getTowerFloorSlices };
