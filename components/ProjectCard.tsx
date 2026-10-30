import Tag from "@/components/Tag";

export type ProjectCardProps = {
    name: string;
    organization?: string;
    date: string;
    description: string;
    skills: string[];
    link?: string;
};

export default function ProjectCard({
    name,
    organization,
    date,
    description,
    skills,
    link,
}: ProjectCardProps) {
    return (
        <article
            className={`relative flex flex-col rounded-sm border border-tron-cyan/30 p-5 ${
                link
                    ? "transition hover:border-tron-cyan/70 hover:shadow-[0_0_16px_var(--tron-cyan)] hover:shadow-tron-cyan/40"
                    : ""
            }`}
        >
            <h3 className="text-lg font-semibold">
                {link ? (
                    // The ::after overlay stretches this link over the whole card
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-inherit after:absolute after:inset-0"
                    >
                        {name}
                        <span
                            aria-hidden="true"
                            className="ml-2 text-tron-orange"
                        >
                            ↗
                        </span>
                    </a>
                ) : (
                    name
                )}
            </h3>
            {organization && (
                <p className="mt-1 text-sm text-foreground/80">
                    {organization}
                </p>
            )}
            <p className="mt-1 font-mono text-sm tracking-wider text-foreground/60 uppercase">
                {date}
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
                {description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                ))}
            </div>
        </article>
    );
}
