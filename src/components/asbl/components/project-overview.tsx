/** @format */

import type { ChangeEvent } from "react";

import { getProjectSummary } from "../app";
import type { ASBLProjectRow } from "../types";

type Props = {
    project: ASBLProjectRow;
    projects: ASBLProjectRow[];
    onProjectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function ProjectOverview({ project, projects, onProjectChange }: Props) {
    const summary = getProjectSummary(project);

    return (
        <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-300">
                    ASBL Project
                </span>

                <select
                    value={project.id}
                    onChange={onProjectChange}
                    className="w-full rounded-md border border-slate-600 bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:border-slate-400"
                >
                    {projects.map((p) => (
                        <option key={p.id} value={p.id}>
                            {p.name}
                        </option>
                    ))}
                </select>
            </label>

            <section className="flex flex-col">
                <dl className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    <div>
                        <dt className="text-xs text-slate-400">Towers</dt>
                        <dd className="font-medium">{summary.towerCount}</dd>
                    </div>

                    <div>
                        <dt className="text-xs text-slate-400">Max height</dt>
                        <dd className="font-medium">{summary.maxHeight}m</dd>
                    </div>

                    <div>
                        <dt className="text-xs text-slate-400">Floors</dt>
                        <dd className="font-medium">
                            {summary.minFloors === summary.maxFloors
                                ? `G+${summary.maxFloors}`
                                : `G+${summary.minFloors}–${summary.maxFloors}`}
                        </dd>
                    </div>

                    <div>
                        <dt className="text-xs text-slate-400">Possession</dt>
                        <dd className="font-medium">{summary.possession}</dd>
                    </div>

                    <div>
                        <dt className="text-xs text-slate-400">Total units</dt>
                        <dd className="font-medium">
                            {summary.totalUnits.toLocaleString("en-IN")}
                        </dd>
                    </div>

                    <div>
                        <dt className="text-xs text-slate-400">Area</dt>
                        <dd className="font-medium">
                            {summary.areaInAcres} ac
                        </dd>
                    </div>

                    {summary.unitsPerAcre !== undefined && (
                        <div>
                            <dt className="text-xs text-slate-400">Density</dt>
                            <dd className="font-medium">
                                {Math.round(summary.unitsPerAcre)}/ac
                            </dd>
                        </div>
                    )}
                </dl>
            </section>
        </div>
    );
}

export default ProjectOverview;
