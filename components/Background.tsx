import Skyline from "@/components/Skyline";

// Seeded pseudo-random numbers, so the stars come out the same on every render
function seededRandom(seed: number) {
    let state = seed;
    return () => {
        state = (state * 16807) % 2147483647;
        return (state - 1) / 2147483646;
    };
}

const random = seededRandom(11);
const stars = Array.from({ length: 140 }, () => ({
    x: Math.round(random() * 1600),
    y: Math.round(random() * 600),
    radius: 0.5 + random() * 1,
    opacity: 0.15 + random() * 0.45,
}));

// Fixed Tron scene (starry sky, distant city, grid floor) that stays in place
// behind the page while it scrolls
export default function Background() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden perspective-[600px]"
        >
            {/* Stars, fading out toward the horizon */}
            <svg
                viewBox="0 0 1600 600"
                preserveAspectRatio="xMidYMin slice"
                className="absolute inset-x-0 top-0 h-[64%] w-full [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
            >
                {stars.map((star, i) => (
                    <circle
                        key={i}
                        cx={star.x}
                        cy={star.y}
                        r={star.radius}
                        fill="var(--foreground)"
                        opacity={star.opacity}
                    />
                ))}
            </svg>
            {/* Soft city glow rising from the horizon into the sky */}
            <div className="absolute inset-x-0 bottom-[36%] h-[45%] bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--tron-cyan)_10%,transparent),transparent_70%)]" />
            <div className="absolute -inset-x-1/2 bottom-0 h-[70%] origin-bottom rotate-x-[70deg] tron-grid [mask-image:linear-gradient(to_top,black,transparent)] opacity-25" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--tron-cyan)_12%,transparent),transparent_70%)]" />
            {/* Sits on the floor's horizon, which the perspective above places about 36% up the screen */}
            <div className="absolute inset-x-0 bottom-[36%] h-[14vh]">
                <Skyline />
            </div>
        </div>
    );
}
