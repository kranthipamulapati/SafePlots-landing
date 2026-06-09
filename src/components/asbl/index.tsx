/** @format */

import { useMemo, useState } from "react";

import { ASBL_PROJECTS } from "./data";
import { getPoisForCategory } from "./app";
import type { AsblPoiCategoryId } from "./types";

import NearbyPlaces from "./components/nearby-places";
import ProjectOverview from "./components/project-overview";
import MapViewControls from "./components/map-view-controls";

export default function AsblMap() {
    const [project, setProject] = useState(ASBL_PROJECTS[0]);
    const [poiCategory, setPoiCategory] = useState<AsblPoiCategoryId>();
    const [autoRotate, setAutoRotate] = useState(true);

    const pois = useMemo(() => {
        if (!poiCategory) return [];
        return getPoisForCategory(project, poiCategory);
    }, [project, poiCategory]);

    return (
        <div className="relative h-dvh w-full overflow-hidden bg-slate-950">
            <aside className="absolute top-3 left-3 z-10 flex max-h-[calc(100dvh-1.5rem)] w-72 flex-col gap-0 overflow-y-auto rounded-lg border border-white/20 bg-slate-900/90 p-4 text-sm text-white shadow-lg backdrop-blur-sm">
                <ProjectOverview
                    project={project}
                    projects={ASBL_PROJECTS}
                    onProjectChange={(e) =>
                        setProject(
                            ASBL_PROJECTS.find((p) => p.id === e.target.value)!,
                        )
                    }
                />
                <NearbyPlaces
                    selectedPoiCategory={poiCategory}
                    onPoiCategoryChange={setPoiCategory}
                />
                <MapViewControls
                    autoRotate={autoRotate}
                    onAutoRotateChange={setAutoRotate}
                />
            </aside>

            {/* Map placeholder — step 7 */}
            <div className="flex h-full items-center justify-center text-slate-500">
                {poiCategory
                    ? `${pois.length} POIs selected (${poiCategory})`
                    : "Map coming next"}
            </div>
        </div>
    );
}
