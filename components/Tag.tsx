import type { ReactNode } from "react";

export type TagProps = {
    children: ReactNode;
};

export default function Tag({ children }: TagProps) {
    return (
        <span className="inline-flex items-center gap-1 rounded-sm border border-tron-cyan/40 px-2 py-0.5 font-mono text-xs tracking-wider text-tron-cyan uppercase">
            {children}
        </span>
    );
}
