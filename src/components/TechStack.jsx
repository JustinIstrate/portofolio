import React from 'react';

const TechStack = () => {
    const technologies = [
        {
            category: "Backend & Systems",
            skills: ["Java 21", "Spring Boot 3", "C/C++", "Python", "Node.js"]
        },
        {
            category: "Frontend",
            skills: ["Angular 18+", "React", "Vue.js", "Tailwind CSS", "Bootstrap 5"]
        },
        {
            category: "DevOps & Cloud",
            skills: ["Docker", "Google Cloud", "GitHub Actions", "Bash Scripting", "Microservices"]
        },
        {
            category: "Databases & Tools",
            skills: ["MySQL", "PostgreSQL", "SQLite", "Postman", "Swagger/OpenAPI"]
        }
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Technical <span className="text-blue-500">Arsenal</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-semibold text-blue-400 mb-4 border-b border-white/10 pb-2">
                                {tech.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tech.skills.map((skill, idx) => (
                                    <span key={idx} className="bg-white/10 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-blue-500/20 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;