/** @format */

import { ASBL_PROJECTS } from "./data";
import { getProjectSummary } from "./asbl";

export default function AsblMap() {
    const project = ASBL_PROJECTS[0];
    const summary = project ? getProjectSummary(project) : null;

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-2 bg-slate-950 text-white">
            <p className="text-lg font-medium">{project?.name}</p>
            {summary && (
                <p className="text-sm text-slate-400">
                    {summary.towerCount} towers · G+{summary.maxFloors} ·{" "}
                    {summary.totalUnits.toLocaleString("en-IN")} units
                </p>
            )}
        </div>
    );
}
