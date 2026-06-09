/** @format */

import { useRef, useMemo, useState, useEffect } from "react";

import {
    ArcLayer,
    TextLayer,
    PolygonLayer,
    ScatterplotLayer,
} from "@deck.gl/layers";
import { useMap } from "@vis.gl/react-google-maps";
import { GoogleMapsOverlay } from "@deck.gl/google-maps";

import type {
    AsblPoi,
    Coordinate,
    ASBLProjectRow,
    TowerFloorSlice,
} from "../types";

import {
    getProjectCenter,
    getTowerLabelData,
    getTowerFloorSlices,
} from "../app";

import {
    LABEL_COLORS,
    BUILDING_COLORS,
    POI_CATEGORY_COLORS,
    POI_CATEGORY_LINE_COLORS,
} from "./color-palettes";

type Props = {
    pois?: AsblPoi[];
    project: ASBLProjectRow;
    projects: ASBLProjectRow[];
    onProjectSelect: (projectId: string) => void;
    onMapInteract?: () => void;
};

function DeckGlOverlay({
    project,
    projects,
    pois = [],
    onProjectSelect,
    onMapInteract,
}: Props) {
    const map = useMap();
    const onProjectSelectRef = useRef(onProjectSelect);
    onProjectSelectRef.current = onProjectSelect;
    const onMapInteractRef = useRef(onMapInteract);
    onMapInteractRef.current = onMapInteract;

    const [hoveredPoiId, setHoveredPoiId] = useState<string | null>(null);
    const projectCenter = useMemo(() => getProjectCenter(project), [project]);
    const overlay = useMemo(
        () => new GoogleMapsOverlay({ interleaved: true }),
        [],
    );

    useEffect(() => {
        overlay.setMap(map);
        return () => overlay.setMap(null);
    }, [map, overlay]);

    useEffect(() => {
        if (!map || !project) return;

        map.panTo({
            lat: project.coordinates[0].lat,
            lng: project.coordinates[0].lng,
        });
    }, [map, project]);

    useEffect(() => {
        const layers = [];
        const labelData = [];
        const { dimmed, selected } = BUILDING_COLORS;
        const sourcePosition: [number, number] = [
            projectCenter.lng,
            projectCenter.lat,
        ];

        for (const p of projects) {
            const isSelected = p.id === project.id;
            const colors = isSelected ? selected : dimmed;

            layers.push(
                new PolygonLayer({
                    id: `asbl-${p.id}-layout`,
                    data: [p],
                    pickable: true,
                    getPolygon: (d) =>
                        d.coordinates.map((c: Coordinate) => [c.lng, c.lat]),
                    getFillColor: colors.siteFill,
                    getLineColor: colors.siteLine,
                    lineWidthMinPixels: 1,
                }),
                new PolygonLayer({
                    id: `asbl-${p.id}-towers`,
                    data: getTowerFloorSlices(p),
                    extruded: true,
                    pickable: true,
                    getPolygon: (d: TowerFloorSlice) => d.footprint,
                    getElevation: (d: TowerFloorSlice) => d.elevationMeters,
                    getFillColor: (d: TowerFloorSlice) =>
                        colors.towerFloorStripes[d.floorIndex % 2],
                    getLineColor: colors.towerLine,
                    lineWidthMinPixels: 1,
                }),
            );

            labelData.push(...getTowerLabelData(p, isSelected));
        }

        layers.push(
            new TextLayer({
                id: "asbl-tower-labels",
                data: labelData,
                billboard: true,
                pickable: false,
                getPosition: (d) => d.position,
                getText: (d) => d.label,
                getSize: 16,
                getColor: (d) =>
                    d.isSelectedProject
                        ? LABEL_COLORS.selectedProject
                        : LABEL_COLORS.dimmed,
                fontFamily: "Segoe UI, system-ui, sans-serif",
                fontWeight: 600,
                outlineWidth: 2,
                outlineColor: LABEL_COLORS.outline,
                getTextAnchor: "middle",
                getAlignmentBaseline: "bottom",
            }),
        );

        if (pois.length > 0) {
            layers.push(
                new ArcLayer({
                    id: "asbl-poi-arcs",
                    data: pois,
                    pickable: false,
                    greatCircle: false,
                    getSourcePosition: () => sourcePosition,
                    getTargetPosition: (d: AsblPoi) => [
                        d.location.lng,
                        d.location.lat,
                    ],
                    getSourceColor: (d: AsblPoi) =>
                        POI_CATEGORY_COLORS[d.category],
                    getTargetColor: (d: AsblPoi) =>
                        POI_CATEGORY_LINE_COLORS[d.category],
                    getWidth: 2,
                    widthMinPixels: 2,
                }),
            );

            layers.push(
                new ScatterplotLayer({
                    id: "asbl-poi-pin",
                    data: pois,
                    pickable: true,
                    getPosition: (d: AsblPoi) => [
                        d.location.lng,
                        d.location.lat,
                    ],
                    getRadius: (d: AsblPoi) =>
                        d.placeId === hoveredPoiId ? 18 : 14,
                    radiusUnits: "pixels",
                    radiusMinPixels: 12,
                    radiusMaxPixels: 22,
                    getFillColor: (d: AsblPoi) =>
                        POI_CATEGORY_LINE_COLORS[d.category],
                    getLineColor: [255, 255, 255, 220],
                    lineWidthMinPixels: 2,
                }),
            );
        }

        const getTooltip = ({
            object,
        }: {
            object?: ASBLProjectRow | TowerFloorSlice | AsblPoi;
        }) => {
            if (!object) return null;

            if ("category" in object && "placeId" in object) {
                return object.name;
            }

            if ("tower" in object && "floorIndex" in object) {
                const { tower, floorIndex, rowIndex, colIndex } = object;
                const floorLabel =
                    floorIndex === 0 ? "Ground" : `Floor ${floorIndex}`;
                const lines = [
                    `${tower.projectName} · ${tower.label}`,
                    floorLabel,
                ];

                if (rowIndex !== undefined && colIndex !== undefined) {
                    lines.push(`Row ${rowIndex + 1} · Col ${colIndex + 1}`);
                }

                lines.push(`G+${tower.floorCount} · ${tower.heightMeters}m`);

                return lines.join("\n");
            }

            if ("towers_config" in object) {
                const maxFloors = Math.max(
                    ...object.towers_config.map((t) => t.floor_count),
                );
                return `ASBL ${object.name}\n${object.towers_config.length} towers · up to G+${maxFloors}`;
            }

            return null;
        };

        overlay.setProps({
            layers,
            getTooltip,
            onHover: (info) => {
                const object = info.object as AsblPoi | undefined;
                const nextId =
                    object && "placeId" in object ? object.placeId : null;

                setHoveredPoiId((current) =>
                    current === nextId ? current : nextId,
                );
            },
            onClick: (info) => {
                onMapInteractRef.current?.();

                const object = info.object as
                    | ASBLProjectRow
                    | TowerFloorSlice
                    | undefined;

                if (!object) return;

                if ("tower" in object) {
                    onProjectSelectRef.current(object.tower.projectId);
                    return;
                }

                if ("towers_config" in object) {
                    onProjectSelectRef.current(object.id);
                }
            },
        });
    }, [pois, project, projects, overlay, hoveredPoiId, projectCenter]);

    return null;
}

export default DeckGlOverlay;
