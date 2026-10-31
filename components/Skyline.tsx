"use client";

import { useSyncExternalStore } from "react";

const SKYLINE_WIDTH = 1600;
const SKYLINE_HEIGHT = 200;

type Building = {
    path: string;
    windows: { x: number; y: number }[];
};

// Builds one row of towers across the skyline, each with an outline and a few lit windows
function skyline(minHeight: number, maxHeight: number) {
    const buildings: Building[] = [];
    let x = 0;
    while (x < SKYLINE_WIDTH) {
        const width = Math.round(16 + Math.random() * 36);
        const top = Math.round(
            SKYLINE_HEIGHT -
                (minHeight + Math.random() * (maxHeight - minHeight)),
        );
        const right = x + width;
        let roof = `L${x} ${top}`;
        const feature = Math.random();
        if (feature < 0.35) {
            // Stepped crown on top of the tower
            const inset = Math.round(width * 0.25);
            const crown = top - Math.round(8 + Math.random() * 14);
            roof += ` L${x + inset} ${top} L${x + inset} ${crown} L${right - inset} ${crown} L${right - inset} ${top}`;
        } else if (feature < 0.55) {
            // Antenna spike
            const middle = x + Math.round(width / 2);
            const tip = top - Math.round(16 + Math.random() * 24);
            roof += ` L${middle - 2} ${top} L${middle} ${tip} L${middle + 2} ${top}`;
        }
        const windows: Building["windows"] = [];
        for (let wy = top + 8; wy < SKYLINE_HEIGHT - 6; wy += 10) {
            for (let wx = x + 5; wx < right - 5; wx += 8) {
                if (Math.random() < 0.08) windows.push({ x: wx, y: wy });
            }
        }
        buildings.push({
            path: `M${x} ${SKYLINE_HEIGHT} ${roof} L${right} ${top} L${right} ${SKYLINE_HEIGHT} Z`,
            windows,
        });
        x = right;
    }
    return buildings;
}

function SkylineLayer({
    buildings,
    strokeOpacity,
    windowOpacity,
}: {
    buildings: Building[];
    strokeOpacity: number;
    windowOpacity: number;
}) {
    return (
        <g>
            {buildings.map((building, i) => (
                <g key={i}>
                    <path
                        d={building.path}
                        fill="url(#building-fill)"
                        stroke="var(--tron-cyan)"
                        strokeOpacity={strokeOpacity}
                        strokeWidth={1.5}
                        vectorEffect="non-scaling-stroke"
                    />
                    {building.windows.map((w) => (
                        <rect
                            key={`${w.x}-${w.y}`}
                            x={w.x}
                            y={w.y}
                            width={3}
                            height={2}
                            fill="var(--tron-cyan)"
                            opacity={windowOpacity}
                        />
                    ))}
                </g>
            ))}
        </g>
    );
}

// Generated once per page load, and only in the browser (the build has no window)
const browserCity =
    typeof window === "undefined"
        ? null
        : { far: skyline(50, 150), near: skyline(15, 100) };

const subscribe = () => () => {};

// A new random city on every page load. The pre-built HTML has no city (server snapshot
// is null), then the browser swaps in its own, so every visitor's HTML stays identical.
export default function Skyline() {
    const city = useSyncExternalStore(
        subscribe,
        () => browserCity,
        () => null,
    );

    if (!city) return null;

    return (
        <svg
            viewBox={`0 0 ${SKYLINE_WIDTH} ${SKYLINE_HEIGHT}`}
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 size-full overflow-visible transition-opacity duration-1000 starting:opacity-0"
        >
            <defs>
                {/* Faint cyan tint at the rooftops, fading to the page background at street level */}
                <linearGradient
                    id="building-fill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2={SKYLINE_HEIGHT}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        offset="0"
                        style={{
                            stopColor:
                                "color-mix(in oklab, var(--tron-cyan) 8%, var(--background))",
                        }}
                    />
                    <stop
                        offset="1"
                        style={{ stopColor: "var(--background)" }}
                    />
                </linearGradient>
            </defs>
            <SkylineLayer
                buildings={city.far}
                strokeOpacity={0.04}
                windowOpacity={0.15}
            />
            <SkylineLayer
                buildings={city.near}
                strokeOpacity={0.1}
                windowOpacity={0.35}
            />
        </svg>
    );
}
