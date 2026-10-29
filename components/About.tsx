import SectionHeading from "@/components/SectionHeading";

export default function About() {
    return (
        <section id="about">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>
                    I&apos;m a Mechatronics Engineering student at the
                    University of Waterloo, interested in building practical
                    hardware and software projects.
                </p>
                {/* TODO: replace this placeholder with your own second paragraph */}
                <p>
                    Placeholder: a couple of sentences about what draws you to
                    engineering, such as the kinds of problems you like solving,
                    areas you want to grow in, or what you&apos;re hoping to
                    work on next. Aim for about this length so the section stays
                    quick to read.
                </p>
            </div>
            <div className="mt-10 rounded-sm border border-l-2 border-tron-cyan/30 border-l-tron-cyan/60 px-6 py-5 shadow-[-6px_0_8px_-6px_var(--tron-cyan)]">
                <h3 className="mb-3 text-xs font-semibold tracking-widest uppercase">
                    Education
                </h3>
                <p className="font-semibold">
                    Mechatronics Engineering, Honours
                </p>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground/80">
                    University of Waterloo
                    <span className="rounded-sm border border-tron-cyan/40 px-2 py-0.5 font-mono text-xs tracking-wider text-tron-cyan uppercase">
                        Waterloo, ON
                    </span>
                </p>
                <p className="mt-2 font-mono text-sm tracking-wider text-foreground/60 uppercase">
                    Expected graduation: June 2031
                </p>
            </div>
        </section>
    );
}
