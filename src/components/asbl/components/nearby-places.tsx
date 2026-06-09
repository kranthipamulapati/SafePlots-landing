/** @format */

import CollapsibleSection from "./collapsible-section";

import type { AsblPoiCategoryId } from "../types";
import { ASBL_POI_CATEGORIES } from "../constants";

type Props = {
    selectedPoiCategory: AsblPoiCategoryId | undefined;
    onPoiCategoryChange: (category: AsblPoiCategoryId | undefined) => void;
};

function NearbyPlaces({ selectedPoiCategory, onPoiCategoryChange }: Props) {
    return (
        <CollapsibleSection title="Nearby places">
            <div className="flex flex-col gap-2">
                {ASBL_POI_CATEGORIES.map((category) => {
                    const isSelected = selectedPoiCategory === category.id;

                    return (
                        <button
                            key={category.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() =>
                                onPoiCategoryChange(
                                    isSelected ? undefined : category.id,
                                )
                            }
                            className={`flex w-full cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-left transition-colors ${
                                isSelected
                                    ? "border-[#a05a1e] bg-[#ffDCA0] text-[#352719]"
                                    : "border-slate-600 bg-slate-800 text-white hover:border-slate-500 hover:bg-slate-700"
                            }`}
                        >
                            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                <span className="font-medium">
                                    {category.label}
                                </span>

                                <span
                                    className={`hidden text-xs sm:block ${isSelected ? "text-[#6b5340]" : "text-slate-400"}`}
                                >
                                    {category.description}
                                </span>
                            </span>

                            <span
                                aria-hidden
                                className={`size-3.5 shrink-0 rounded-full border-2 ${
                                    isSelected
                                        ? "border-[#a05a1e] bg-[#a05a1e]"
                                        : "border-slate-500 bg-transparent"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>
        </CollapsibleSection>
    );
}

export default NearbyPlaces;
