import LocationTag from "@/components/LocationTag";
import Tag from "@/components/Tag";

export type ExperienceEntryProps = {
    title: string;
    organization: string;
    location: string;
    type: "Co-op" | "Design Team";
    dates: string;
    highlights: string[];
};

export default function ExperienceEntry({
    title,
    organization,
    location,
    type,
    dates,
    highlights,
}: ExperienceEntryProps) {
    return (
        <article className="relative pl-8">
            <span
                aria-hidden="true"
                className="absolute top-[9px] -left-[5.5px] size-2.5 rounded-full bg-tron-orange shadow-[0_0_8px_var(--tron-orange)]"
            />
            <div className="grid gap-y-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-4">
                <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                <p className="font-mono text-sm tracking-wider text-foreground/60 uppercase sm:text-right">
                    {dates}
                </p>
                <p className="mt-1 text-foreground/80">{organization}</p>
                <div className="mt-1 flex flex-wrap gap-2 sm:justify-end">
                    <Tag>{type}</Tag>
                    <LocationTag>{location}</LocationTag>
                </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-foreground/80 marker:text-tron-cyan">
                {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
        </article>
    );
}
