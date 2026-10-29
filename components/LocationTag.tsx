import Tag from "@/components/Tag";

export type LocationTagProps = {
    children: string;
};

export default function LocationTag({ children }: LocationTagProps) {
    return (
        <Tag>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-3 shrink-0"
            >
                <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
            </svg>
            {children}
        </Tag>
    );
}
