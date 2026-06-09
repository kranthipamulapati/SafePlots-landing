/** @format */

import { MAP_THEMES } from "../constants";

import type { MapThemeId } from "../types";

type Props = {
    autoRotate: boolean;
    mapTheme: MapThemeId;
    onAutoRotateChange: (autoRotate: boolean) => void;
    onMapThemeChange: (theme: MapThemeId) => void;
};

function MapViewControls({
    mapTheme,
    autoRotate,
    onMapThemeChange,
    onAutoRotateChange,
}: Props) {
    return (
        <section className="mt-4 flex flex-col gap-2 border-t border-slate-700 pt-4">
            <h3 className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Map view
            </h3>

            <div className="grid grid-cols-2 gap-2">
                {MAP_THEMES.map((theme) => {
                    const isSelected = mapTheme === theme.id;

                    return (
                        <button
                            key={theme.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => onMapThemeChange(theme.id)}
                            className={`cursor-pointer rounded-md border px-2 py-2 text-xs font-medium transition-colors ${
                                isSelected
                                    ? "border-[#a05a1e] bg-[#ffDCA0] text-[#352719]"
                                    : "border-slate-600 bg-slate-800 text-white hover:border-slate-500 hover:bg-slate-700"
                            }`}
                        >
                            {theme.label}
                        </button>
                    );
                })}
            </div>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-slate-600 bg-slate-800 px-3 py-2">
                <span className="font-medium">Auto-rotate</span>
                <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={(e) => onAutoRotateChange(e.target.checked)}
                    className="size-4 accent-[#a05a1e]"
                />
            </label>

            <p className="text-xs leading-relaxed text-slate-400">
                Hold{" "}
                <kbd className="rounded border border-slate-600 bg-slate-800 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                    Shift
                </kbd>{" "}
                and drag to rotate the map yourself.
            </p>
        </section>
    );
}

export default MapViewControls;
