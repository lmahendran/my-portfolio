import SectionHeading from "@/components/SectionHeading";
import LocationTag from "@/components/LocationTag";

export default function About() {
    return (
        <section id="about">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>
                    I&apos;m a Mechatronics Engineering student at the
                    University of Waterloo, interested in building practical
                    projects that integrate both hardware and software.
                </p>
                <p>
                    My software experience is based on games, web applications
                    or embedded systems. The other side of the coin, hardware,
                    comes from circuitry, PCB design, or CAD. Now, I look to
                    extend my skills by integrating AI into my workflow. When it
                    comes to robotics,{" "}
                    <span className="font-semibold text-tron-cyan text-shadow-[0_0_4px_var(--tron-cyan)]">
                        I&apos;m exploring it all.
                    </span>
                </p>
            </div>
            <div className="mt-10 rounded-sm border border-l-2 border-tron-cyan/30 border-l-tron-cyan/60 px-6 py-5 shadow-[-6px_0_8px_-6px_var(--tron-cyan)]">
                <h3 className="text-s mb-3 font-semibold tracking-widest uppercase">
                    Education
                </h3>
                <p className="font-semibold">
                    Mechatronics Engineering, Honours
                </p>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground/80">
                    University of Waterloo
                    <LocationTag>Waterloo, ON</LocationTag>
                </p>
                <p className="mt-2 font-mono text-sm tracking-wider text-foreground/60 uppercase">
                    Expected graduation: June 2031
                </p>
            </div>
        </section>
    );
}
