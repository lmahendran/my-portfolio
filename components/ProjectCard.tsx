export type ProjectCardProps = {
    name: string;
    context: string;
    date: string;
    description: string;
};

export default function ProjectCard({
    name,
    context,
    date,
    description,
}: ProjectCardProps) {
    return (
        <article>
            <h3>{name}</h3>
            <p>{context}</p>
            <p>{date}</p>
            <p>{description}</p>
        </article>
    );
}
