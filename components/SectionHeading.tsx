import type { ReactNode } from "react";

export type SectionHeadingProps = {
    children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="mb-8 flex items-center gap-4 text-xl font-semibold tracking-wider uppercase sm:text-3xl">
            {children}
            <span
                aria-hidden="true"
                className="h-px flex-1 bg-tron-cyan/50 shadow-[0_0_8px_var(--tron-cyan)]"
            />
        </h2>
    );
}
