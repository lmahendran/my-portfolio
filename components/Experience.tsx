const highlights = [
    "Developed a LoRaWAN-based AWS IoT system to track temperature, humidity, and air tank pressure.",
    "Built an AWS REST API with AWS Lambda to manage IoT resources.",
    "Resolved digital logic issues in LoRaWAN communication.",
    "Documented the work in Confluence and presented results to colleagues.",
];

export default function Experience() {
    return (
        <section>
            <h2>Experience</h2>
            <article>
                <h3>Research Scientist Co-op Student</h3>
                <p>TechInsights Inc. — Ottawa, ON</p>
                <p>February–June 2025</p>
                <ul>
                    {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
}
