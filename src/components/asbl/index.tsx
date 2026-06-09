/** @format */

import { useMemo, useState, useEffect, useCallback } from "react";
import { Map, APIProvider } from "@vis.gl/react-google-maps";

import SalesLegend from "./components/sales-legend";
import NearbyPlaces from "./components/nearby-places";
import DeckGlOverlay from "./components/deck-gl-overlay";
import ProjectOverview from "./components/project-overview";
import MapViewControls from "./components/map-view-controls";
import MapCameraRotation from "./components/map-camera-rotation";
import PerspectiveSwitch from "./components/perspective-switch";

import {
    googleMapsMapId,
    googleMapsApiKey,
    mapTypeControlOptions,
    fullscreenControlOptions,
} from "./config";
import {
    getProjectCenter,
    getPoisForCategory,
    getSalesStatusCounts,
    assignRandomApartmentStatuses,
} from "./app";
import { ASBL_PROJECTS } from "./data";
import { icrisatGeoCenter } from "./constants";

import type { Perspective, AsblPoiCategoryId } from "./types";

function AsblShowcase() {
    const [panelOpen, setPanelOpen] = useState(false);
    const [autoRotate, setAutoRotate] = useState(true);
    const [project, setProject] = useState(ASBL_PROJECTS[0]);
    const [perspective, setPerspective] = useState<Perspective>("user");
    const [poiCategory, setPoiCategory] = useState<AsblPoiCategoryId>();

    const closePanel = useCallback(() => setPanelOpen(false), []);
    const stopAutoRotate = useCallback(() => setAutoRotate(false), []);

    const selectProject = useCallback((projectId: string) => {
        const next = ASBL_PROJECTS.find((p) => p.id === projectId);
        if (next) setProject(next);
    }, []);

    const apartmentStatuses = useMemo(() => {
        if (perspective !== "sales") return undefined;
        return assignRandomApartmentStatuses(project);
    }, [perspective, project]);

    const statusCounts = useMemo(
        () =>
            apartmentStatuses ? getSalesStatusCounts(apartmentStatuses) : null,
        [apartmentStatuses],
    );

    const pois = useMemo(() => {
        if (perspective !== "user" || !poiCategory) return [];
        return getPoisForCategory(project, poiCategory);
    }, [perspective, project, poiCategory]);

    const projectCenter = useMemo(() => getProjectCenter(project), [project]);

    useEffect(() => {
        if (perspective === "sales") {
            setPoiCategory(undefined);
        }
    }, [perspective]);

    if (!googleMapsApiKey) {
        return (
            <div className="asbl-safe-root flex items-center justify-center bg-slate-950 p-6 text-center text-white">
                <p className="text-sm text-slate-400">
                    Map unavailable: set{" "}
                    <code className="text-slate-200">
                        PUBLIC_GOOGLE_MAPS_API_KEY
                    </code>{" "}
                    in your environment.
                </p>
            </div>
        );
    }

    const panelContent = (
        <>
            <ProjectOverview
                project={project}
                projects={ASBL_PROJECTS}
                onProjectChange={(e) => selectProject(e.target.value)}
            />

            <PerspectiveSwitch
                perspective={perspective}
                onPerspectiveChange={setPerspective}
            />

            {perspective === "user" ? (
                <NearbyPlaces
                    selectedPoiCategory={poiCategory}
                    onPoiCategoryChange={setPoiCategory}
                />
            ) : statusCounts ? (
                <SalesLegend statusCounts={statusCounts} />
            ) : null}

            <MapViewControls
                autoRotate={autoRotate}
                onAutoRotateChange={setAutoRotate}
            />
        </>
    );

    return (
        <APIProvider apiKey={googleMapsApiKey} region="IN" version="3.64">
            <div className="asbl-safe-root overflow-hidden bg-slate-950">
                <div className="relative h-full w-full">
                    {panelOpen ? (
                        <button
                            type="button"
                            aria-label="Close controls"
                            className="absolute inset-0 z-[9] bg-black/30 md:hidden"
                            onClick={closePanel}
                        />
                    ) : null}

                    {!panelOpen ? (
                        <button
                            type="button"
                            onClick={() => setPanelOpen(true)}
                            className="absolute bottom-3 left-3 z-10 flex max-w-[calc(100%-1.5rem)] touch-manipulation items-center gap-2 rounded-lg border border-white/20 bg-slate-900/90 px-3 py-2.5 text-sm text-white shadow-lg backdrop-blur-sm md:hidden"
                        >
                            <svg
                                aria-hidden
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="size-4 shrink-0 text-slate-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="truncate font-medium">
                                {project.name}
                            </span>
                        </button>
                    ) : null}

                    <aside
                        className={`absolute z-10 flex w-72 max-w-[calc(100%-1.5rem)] flex-col gap-0 overflow-y-auto overscroll-contain rounded-lg border border-white/20 bg-slate-900/90 p-4 text-sm text-white shadow-lg backdrop-blur-sm [-webkit-overflow-scrolling:touch] ${
                            panelOpen
                                ? "max-md:translate-y-0 max-md:scale-100 max-md:opacity-100"
                                : "max-md:pointer-events-none max-md:translate-y-2 max-md:scale-95 max-md:opacity-0"
                        } max-md:bottom-3 max-md:left-3 max-md:max-h-[min(55dvh,520px)] max-md:origin-bottom-left max-md:transition-all max-md:duration-300 max-md:ease-out md:top-3 md:left-3 md:max-h-[calc(100%-1.5rem)]`}
                    >
                        <div className="mb-3 flex items-center justify-between gap-2 md:hidden">
                            <h2 className="truncate text-sm font-semibold">
                                Controls
                            </h2>

                            <button
                                type="button"
                                aria-label="Close controls"
                                onClick={closePanel}
                                className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                            >
                                <svg
                                    aria-hidden
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="size-5"
                                >
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                        </div>

                        {panelContent}
                    </aside>

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
                            perspective={perspective}
                            apartmentStatuses={apartmentStatuses}
                            onMapInteract={stopAutoRotate}
                            onProjectSelect={selectProject}
                        />

                        <MapCameraRotation
                            autoRotate={autoRotate}
                            rotationCenter={projectCenter}
                            onAutoRotateChange={setAutoRotate}
                        />
                    </Map>
                </div>
            </div>
        </APIProvider>
    );
}

export default AsblShowcase;
