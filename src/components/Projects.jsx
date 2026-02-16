import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Fleet Management System",
            description: "A distributed microservices ecosystem for vehicle tracking. Features Service Discovery (Eureka), API Gateway, and real-time dashboard updates.",
            tech: ["Java Spring Boot 3", "Angular 18+", "Docker", "MySQL", "Microservices"],
            link: "https://github.com/JustinIstrate/fleet-manager", // Verifică link-ul!
        },
        {
            title: "TCP Client-Server 'Visit Card'",
            description: "Concurrent server application built in C using fork() to handle multiple clients. Implements a custom text-based protocol and SQLite integration.",
            tech: ["C/C++", "SQLite", "Linux API", "TCP/IP", "Multi-processing"],
            link: "https://github.com/JustinIstrate", // Link generic sau specific
        },
        {
            title: "File Synchronization System",
            description: "Automated bidirectional sync tool between FTP servers and local storage. Uses checksums (MD5) for change detection and watchdog for monitoring.",
            tech: ["Python", "OOP", "FTP Protocol", "Watchdog", "Automation"],
            link: "https://github.com/JustinIstrate",
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Featured <span className="text-blue-500">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-black/40 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-2 group">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                    {t}
                  </span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                View Code <span className="ml-2">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;