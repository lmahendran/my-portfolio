import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

// Newest first. Add a `link` (e.g. a GitHub repo) to make a card clickable.
const projects: ProjectCardProps[] = [
    {
        name: "Battery Management System PCB",
        organization: "UW Automotive Future Team",
        date: "September–October 2026",
        description:
            "Designed a two-layer PCB to switch car battery flow based on battery health metrics.",
        skills: ["Altium Designer"],
    },
    {
        name: "Design Challenge Project",
        organization: "UW IDEAs Clinic",
        date: "August 2026",
        description:
            "Created a web application paired with a USB-powered node to help a university student score a study environment. The team received runner-up recognition at the UWaterloo IDEAs Clinic.",
        skills: ["SolidWorks", "Arduino", "Node.js"],
    },
    {
        name: "Quadcopter Drone",
        date: "May–June 2026",
        description:
            "Built a custom quadcopter using a Kakute H7 flight controller, with RC flight, GPS flight planning, and safety systems.",
        skills: ["ArduPilot", "Fusion 360"],
    },
    {
        name: "Inventory Web Application for High School Teachers",
        date: "March–June 2026",
        description:
            "Built a full-stack web application to help a teacher track students' equipment borrowing, with an Express.js REST API handling auth and access to a local MySQL database. Collaborated with two other developers using Scrum and wrote documentation for the frontend developers and client.",
        skills: ["Node.js", "Express", "MySQL", "Batch"],
    },
    {
        name: "Birdwatching Camera",
        date: "June–September 2025",
        description:
            "Built a motion-triggered Pi Camera that uploads photos of birds using Python, Boto3, S3, and CloudFront.",
        skills: ["Raspberry Pi", "AWS S3", "AWS CloudFront"],
    },
];

export default function Projects() {
    return (
        <section>
            <SectionHeading>Projects</SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </div>
        </section>
    );
}
