import ExperienceEntry, {
    type ExperienceEntryProps,
} from "@/components/ExperienceEntry";
import SectionHeading from "@/components/SectionHeading";

// Newest first. TODO: replace the placeholder highlights for the design teams.
const roles: ExperienceEntryProps[] = [
    {
        title: "Electrical Team Member",
        organization: "University of Waterloo Automotive Future Team",
        location: "Waterloo, ON",
        type: "Design Team",
        dates: "September 2026–Present",
        highlights: [
            "Gaining PCB Design and component selection experience with Altium Designer.",
            "Pending tasks for electrical systems within the vehicle.",
        ],
    },
    {
        title: "Electrical Team Member",
        organization: "University of Waterloo Formula Electric",
        location: "Waterloo, ON",
        type: "Design Team",
        dates: "September 2026–Present",
        highlights: [
            "Gaining PCB Design and component selection experience with Altium Designer.",
            "Pending tasks for electrical systems within the vehicle.",
        ],
    },
    {
        title: "Research Scientist Co-op Student",
        organization: "TechInsights Inc.",
        location: "Ottawa, ON",
        type: "Co-op",
        dates: "February–June 2025",
        highlights: [
            "Developed a LoRaWAN-based AWS IoT system to track temperature, humidity, and air tank pressure.",
            "Built an AWS REST API with AWS Lambda to manage IoT resources.",
            "Resolved digital logic issues in LoRaWAN communication.",
            "Documented the work in Confluence and presented results to colleagues.",
        ],
    },
];

export default function Experience() {
    return (
        <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-12 border-l border-tron-cyan/40">
                {roles.map((role) => (
                    <ExperienceEntry key={role.organization} {...role} />
                ))}
            </div>
        </section>
    );
}
