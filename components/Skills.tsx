import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";

const skillGroups = [
    {
        name: "Languages",
        skills: [
            "Python",
            "JavaScript",
            "Java",
            "C++",
            "Lua",
            "SQL",
            "HTML/CSS",
        ],
    },
    {
        name: "Developer Tools & Frameworks",
        skills: [
            "Node.js",
            "Express.js",
            "Git",
            "VS Code",
            "Postman",
            "MySQL",
            "AWS CodePipeline",
        ],
    },
    {
        name: "Hardware",
        skills: [
            "Arduino",
            "ATTiny",
            "Raspberry Pi",
            "Flight controllers",
            "Soldering",
            "Bluetooth",
            "Serial",
        ],
    },
    {
        name: "CAD & Design Tools",
        skills: [
            "AutoCAD",
            "Fusion 360",
            "SolidWorks",
            "Altium Designer",
            "KiCad",
            "Figma",
        ],
    },
    {
        name: "AWS Services",
        skills: ["IoT", "S3", "DynamoDB", "Timestream", "IAM", "WAF"],
    },
];

export default function Skills() {
    return (
        <section>
            <SectionHeading>Technical Skills</SectionHeading>
            <dl className="divide-y divide-tron-cyan/20 border-y border-tron-cyan/20">
                {skillGroups.map((group) => (
                    <div
                        key={group.name}
                        className="grid gap-3 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                    >
                        <dt className="flex gap-2 font-display text-xs font-semibold tracking-widest text-tron-cyan uppercase sm:pt-0.75">
                            <span
                                aria-hidden="true"
                                className="mt-1.25 size-1.5 shrink-0 bg-tron-orange shadow-[0_0_6px_var(--tron-orange)]"
                            />
                            {group.name}
                        </dt>
                        <dd>
                            <ul className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <li key={skill}>
                                        <Tag>{skill}</Tag>
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
