import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const githubUsername = "JustinIstrate";

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // SCHIMBARE MAJORĂ:
                // Luăm doar repo-urile la care ai dat STAR (/starred)
                // Asta e lista ta curată pentru portofoliu.
                const response = await fetch(`https://api.github.com/users/${githubUsername}/starred?sort=created&direction=desc`);
                const data = await response.json();

                // Nu mai filtrăm fork-urile!
                // Dacă i-ai dat star, înseamnă că vrei să apară.
                // Păstrăm doar condiția să aibă o descriere, ca să nu arate urât.
                const filtered = data.filter(repo => repo.description);

                setProjects(filtered);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Featured <span className="text-blue-500">Projects</span>
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    A collection of projects I've built or contributed to.
                    <br/>Fetched live from my GitHub Stars.
                </p>

                {loading ? (
                    <div className="text-center text-blue-400 animate-pulse">Loading repositories...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((repo) => (
                            <div key={repo.id} className="bg-black/40 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-2 flex flex-col h-full group">

                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 break-words">
                                        {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                                    </h3>
                                    {/* Afișăm owner-ul dacă nu e repo-ul tău (pentru proiectul cu colegul) */}
                                    {repo.owner.login !== githubUsername && (
                                        <span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">
                      by {repo.owner.login}
                    </span>
                                    )}
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {repo.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {repo.language && (
                                            <span className="text-xs font-medium text-blue-300 bg-blue-900/20 px-2 py-1 rounded border border-blue-500/20">
                        {repo.language}
                      </span>
                                        )}
                                        {repo.topics && repo.topics.slice(0, 3).map(topic => (
                                            <span key={topic} className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {topic}
                      </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 border-t border-white/10 pt-4">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.32-1.755-1.32-1.755-1.09-.735.09-.72.09-.72 1.2.09 1.83 1.245 1.83 1.245 1.065 1.83 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.225 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.545 3.3-1.23 3.3-1.23.66 1.695.24 2.925.12 3.225.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                            View Code
                                        </a>

                                        {repo.homepage && (
                                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center ml-auto">
                                                Live Demo →
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;