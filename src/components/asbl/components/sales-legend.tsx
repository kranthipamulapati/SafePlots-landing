/** @format */

import { APARTMENT_STATUSES } from "../constants";

import type { ApartmentStatusId } from "../types";

type Props = {
    statusCounts: Record<ApartmentStatusId, number>;
};

export default function SalesLegend({ statusCounts }: Props) {
    return (
        <section className="mt-4 flex flex-col gap-2 border-t border-slate-700 pt-4">
            <h3 className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Unit status
            </h3>

            <ul className="flex flex-col gap-2">
                {APARTMENT_STATUSES.map((status) => (
                    <li
                        key={status.id}
                        className="flex items-center gap-3 rounded-md border border-slate-600 bg-slate-800 px-3 py-2"
                    >
                        <span
                            aria-hidden
                            className="size-3.5 shrink-0 rounded-sm border border-white/20"
                            style={{
                                backgroundColor: `rgba(${status.color.join(", ")})`,
                            }}
                        />

                        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                            <span className="font-medium">{status.label}</span>
                            <span className="text-xs text-slate-400">
                                {status.description}
                            </span>
                        </span>

                        <span className="text-xs font-medium text-slate-300">
                            {statusCounts[status.id]}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
