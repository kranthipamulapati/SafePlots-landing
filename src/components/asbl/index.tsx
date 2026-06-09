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
    getPoisForCategory,
    getSalesStatusCounts,
    assignRandomApartmentStatuses,
} from "./app";
import { ASBL_PROJECTS } from "./data";
import { icrisatGeoCenter } from "./constants";

import type { Perspective, AsblPoiCategoryId } from "./types";

function AsblShowcase() {
    const [autoRotate, setAutoRotate] = useState(true);
    const [project, setProject] = useState(ASBL_PROJECTS[0]);
    const [perspective, setPerspective] = useState<Perspective>("user");
    const [poiCategory, setPoiCategory] = useState<AsblPoiCategoryId>();

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
            apartmentStatuses
                ? getSalesStatusCounts(apartmentStatuses)
                : null,
        [apartmentStatuses],
    );

    const pois = useMemo(() => {
        if (perspective !== "user" || !poiCategory) return [];
        return getPoisForCategory(project, poiCategory);
    }, [perspective, project, poiCategory]);

    useEffect(() => {
        if (perspective === "sales") {
            setPoiCategory(undefined);
        }
    }, [perspective]);

    if (!googleMapsApiKey) {
        return (
            <div className="flex min-h-dvh items-center justify-center bg-slate-950 p-6 text-center text-white">
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

    return (
        <APIProvider apiKey={googleMapsApiKey} region="IN" version="3.64">
            <div className="relative h-dvh w-full overflow-hidden bg-slate-950">
                <aside className="absolute top-3 left-3 z-10 flex max-h-[calc(100dvh-1.5rem)] w-72 flex-col gap-0 overflow-y-auto rounded-lg border border-white/20 bg-slate-900/90 p-4 text-sm text-white shadow-lg backdrop-blur-sm">
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
                        onAutoRotateChange={setAutoRotate}
                    />
                </Map>
            </div>
        </APIProvider>
    );
}

export default AsblShowcase;
