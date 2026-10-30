import type { ReactNode } from "react";
import packageJson from "@/package.json";

type FooterLink = {
    label: string;
    href: string;
    icon: ReactNode;
};

const iconClass = "size-4 shrink-0";

const links: FooterLink[] = [
    {
        label: "Email",
        href: "mailto:logesh.ishwar@gmail.com",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={iconClass}
            >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/logesh-mahendran-66194836b/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className={iconClass}
            >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/lmahendran",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className={iconClass}
            >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
];

const linkClass =
    "inline-flex items-center gap-2 text-sm transition hover:text-shadow-[0_0_8px_var(--tron-orange)]";

export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-3xl px-6 pb-12">
            <div
                aria-hidden="true"
                className="h-px bg-tron-cyan/50 shadow-[0_0_8px_var(--tron-cyan)]"
            />
            <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                    <p className="font-display text-sm font-semibold tracking-widest text-tron-cyan uppercase">
                        Logesh Mahendran
                    </p>
                    <p className="mt-1 font-mono text-xs text-foreground/50">
                        © 2026 · v{packageJson.version}
                    </p>
                </div>
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                    {links.map((link) => {
                        // mailto: links open an email app, so only web links need a new tab
                        const isWebLink = link.href.startsWith("http");
                        return (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={linkClass}
                                    {...(isWebLink && {
                                        target: "_blank",
                                        rel: "noreferrer",
                                    })}
                                >
                                    {link.icon}
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="mt-10 text-center">
                <a href="#" className={linkClass}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={iconClass}
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                    Back to top
                </a>
            </div>
        </footer>
    );
}
