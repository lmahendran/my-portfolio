import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
    {
        name: "Battery Management System PCB",
        context: "UW Automotive Future Team · Altium Designer",
        date: "September–October 2026",
        description:
            "Designed a two-layer PCB to switch car battery flow based on battery health metrics.",
    },
    {
        name: "Quadcopter Drone",
        context: "ArduPilot · Fusion 360",
        date: "May–June 2026",
        description:
            "Built a custom quadcopter using a Kakute H7 flight controller, with RC flight, GPS flight planning, and safety systems.",
    },
    {
        name: "Design Challenge Project",
        context: "SolidWorks · Arduino · Node.js",
        date: "August 2026",
        description:
            "Created a web application paired with a USB-powered node to help a university student score a study environment. The team received runner-up recognition at the UWaterloo IDEAs Clinic.",
    },
    {
        name: "Inventory Web Application for High School Teachers",
        context: "Node.js · Express · MySQL · Batch",
        date: "March–June 2026",
        description:
            "Built a full-stack web application to help a teacher track students' equipment borrowing, with an Express.js REST API handling auth and access to a local MySQL database. Collaborated with two other developers using Scrum and wrote documentation for the frontend developers and client.",
    },
    {
        name: "Birdwatching Camera",
        context: "Raspberry Pi · AWS S3 · AWS CloudFront",
        date: "June–September 2025",
        description:
            "Built a motion-triggered Pi Camera that uploads photos of birds using Python, Boto3, S3, and CloudFront.",
    },
];

export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </section>
    );
}
