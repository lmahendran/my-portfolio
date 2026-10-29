import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <div className="mx-auto max-w-3xl space-y-24 px-6 py-24">
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                </div>
            </main>
            <Footer />
        </>
    );
}
