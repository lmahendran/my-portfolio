export default function Hero() {
    return (
        <section className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-bold tracking-wider text-shadow-glow sm:text-6xl lg:text-7xl">
                Logesh Mahendran
            </h1>
            <p className="mt-6 text-lg tracking-wide text-foreground/70 sm:text-xl">
                Mechatronics Engineering Student
            </p>
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="absolute bottom-8 motion-safe:animate-bounce"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-8"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </a>
        </section>
    );
}
