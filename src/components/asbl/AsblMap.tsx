/** @format */

import { ASBL_PROJECTS } from "./data.ts";

export default function AsblMap() {
    const project = ASBL_PROJECTS[0];

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-2 bg-slate-950 text-white">
            <p>ASBL data loaded</p>
            <p className="text-lg font-medium">
                {project?.name ?? "No projects"}
            </p>
            <p className="text-sm text-slate-400">
                {ASBL_PROJECTS.length} project(s)
            </p>
        </div>
    );
}
