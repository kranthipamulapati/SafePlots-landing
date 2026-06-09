/** @format */

import { useEffect, useState, type ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

function CollapsibleSection({ title, children }: Props) {
    const [isDesktop, setIsDesktop] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia("(min-width: 768px)").matches,
    );

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const sync = () => setIsDesktop(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    return (
        <section className="mt-4 border-t border-slate-700 pt-4">
            <details className="group" open={isDesktop || undefined}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 md:hidden [&::-webkit-details-marker]:hidden">
                    <h3 className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {title}
                    </h3>

                    <svg
                        aria-hidden
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                        />
                    </svg>
                </summary>

                <h3 className="hidden text-xs font-medium uppercase tracking-wide text-slate-400 md:block">
                    {title}
                </h3>

                <div
                    className={`mt-2 flex-col gap-2 ${isDesktop ? "flex" : "hidden group-open:flex"}`}
                >
                    {children}
                </div>
            </details>
        </section>
    );
}

export default CollapsibleSection;
