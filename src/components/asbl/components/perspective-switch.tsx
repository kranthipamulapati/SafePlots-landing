/** @format */

import type { Perspective } from "../types";

type Props = {
    perspective: Perspective;
    onPerspectiveChange: (perspective: Perspective) => void;
};

export default function PerspectiveSwitch({
    perspective,
    onPerspectiveChange,
}: Props) {
    return (
        <section className="mt-4 flex flex-col gap-2 border-t border-slate-700 pt-4">
            <h3 className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Perspective
            </h3>

            <div className="grid grid-cols-2 gap-2">
                {(
                    [
                        { id: "user", label: "User" },
                        { id: "sales", label: "Sales" },
                    ] as const
                ).map((option) => {
                    const isSelected = perspective === option.id;

                    return (
                        <button
                            key={option.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => onPerspectiveChange(option.id)}
                            className={`cursor-pointer rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                                isSelected
                                    ? "border-[#a05a1e] bg-[#ffDCA0] text-[#352719]"
                                    : "border-slate-600 bg-slate-800 text-white hover:border-slate-500 hover:bg-slate-700"
                            }`}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
