
import React from "react";

const projects = [
    {
        title: "Cloud Deployment Dashboard",
        description:
            "A web dashboard for monitoring cloud deployments with real-time logs and status tracking.",
        tech: ["React", "Node.js", "AWS"],
        link: "#",
    },
    {
        title: "Cybersecurity Log Analyzer",
        description:
            "Tool that analyzes system logs to detect suspicious patterns and potential threats.",
        tech: ["Python", "Pandas", "Security"],
        link: "#",
    },
    {
        title: "Personal Portfolio Website",
        description:
            "Responsive portfolio website built with React and modern UI design principles.",
        tech: ["React", "Tailwind CSS"],
        link: "#",
    },
];

const skills = ["React", "JavaScript", "Python", "Node.js", "Cybersecurity Basics", "AWS", "Git"];

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
            
            {/* HERO SECTION */}
            <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center md:text-left space-y-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    Hi, I'm Saman Rastgar
                </h1>
                <p className="text-xl md:text-2xl font-medium text-slate-400">
                    Computer Science graduate focused on Cybersecurity & Data Science
                </p>
            </header>

            {/* MAIN CONTENT WRAPPER */}
            <main className="max-w-4xl mx-auto px-6 space-y-20 pb-24">
                
                {/* ABOUT SECTION */}
                <section className="space-y-4 border-t border-slate-900 pt-10">
                    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        <span className="text-teal-400 font-mono">//</span> About Me
                    </h2>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                        I am a software developer with experience in frontend development and a
                        strong interest in cybersecurity and cloud systems. I enjoy building
                        clean, scalable applications and learning new technologies.
                    </p>
                </section>

                {/* PROJECTS SECTION */}
                <section className="space-y-6 border-t border-slate-900 pt-10">
                    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        <span className="text-teal-400 font-mono">//</span> Projects
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 shadow-lg">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-slate-200">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-6 space-y-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-teal-400 bg-teal-950/30 border border-teal-900/40 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="inline-block text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                                        View Project &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section className="space-y-4 border-t border-slate-900 pt-10">
                    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        <span className="text-teal-400 font-mono">//</span> Technical Skills
                    </h2>
                    <div className="flex flex-wrap gap-2 max-w-2xl">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 text-sm bg-slate-900 text-slate-300 border border-slate-800 rounded-lg font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="space-y-4 border-t border-slate-900 pt-10">
                    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        <span className="text-teal-400 font-mono">//</span> Contact
                    </h2>
                    <div className="space-y-2 text-slate-400">
                        <p>Email: <a href="mailto:saman@example.com" className="text-slate-300 hover:text-teal-400 transition-colors">saman@example.com</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors">linkedin.com/in/yourprofile</a></p>
                        <p>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors">github.com/yourusername</a></p>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900/60">
                &copy; {new Date().getFullYear()} Saman Rastgar. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
