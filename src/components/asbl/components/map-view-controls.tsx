/** @format */

import CollapsibleSection from "./collapsible-section";

type Props = {
    autoRotate: boolean;
    onAutoRotateChange: (autoRotate: boolean) => void;
};

function MapViewControls({ autoRotate, onAutoRotateChange }: Props) {
    return (
        <CollapsibleSection title="Map view">
            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-slate-600 bg-slate-800 px-3 py-2">
                <span className="font-medium">Auto-rotate</span>
                <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={(e) => onAutoRotateChange(e.target.checked)}
                    className="size-4 accent-[#a05a1e]"
                />
            </label>

            <p className="hidden text-xs leading-relaxed text-slate-400 md:block">
                Hold{" "}
                <kbd className="rounded border border-slate-600 bg-slate-800 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                    Shift
                </kbd>{" "}
                and drag to rotate the map yourself.
            </p>
        </CollapsibleSection>
    );
}

export default MapViewControls;
