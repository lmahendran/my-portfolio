import SectionHeading from "@/components/SectionHeading";

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
        skills: [
            "AWS IoT",
            "AWS S3",
            "AWS DynamoDB",
            "AWS Timestream",
            "AWS IAM",
            "AWS WAF",
        ],
    },
];

export default function Skills() {
    return (
        <section>
            <SectionHeading>Technical Skills</SectionHeading>
            {skillGroups.map((group) => (
                <div key={group.name}>
                    <h3>{group.name}</h3>
                    <ul>
                        {group.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
