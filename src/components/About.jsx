import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Partea de Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-blue-500">Me</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            I am a final-year Computer Science student at <strong className="text-white">"Alexandru Ioan Cuza" University of Iași</strong>,
                            with a strong foundation in OOP, SOLID principles, and scalable software design.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I enjoy building clean, maintainable, and efficient solutions, with a particular interest in
                            <span className="text-blue-400"> backend development</span> and system architecture.
                            I am highly motivated, curious, and eager to learn new technologies.
                        </p>

                        {/* Soft Skills din CV */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-blue-500">✔</span>
                                <span className="text-sm text-gray-300">Problem Solving</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-blue-500">✔</span>
                                <span className="text-sm text-gray-300">Team Player</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-blue-500">✔</span>
                                <span className="text-sm text-gray-300">Continuous Learning</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-blue-500">✔</span>
                                <span className="text-sm text-gray-300">English (Fluent)</span>
                            </div>
                        </div>
                    </div>

                    {/* Partea Vizuală (Card Educație) */}
                    <div className="bg-black/50 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors relative">
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>

                        <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                        <p className="text-blue-400 font-medium mb-4">2023 - 2026 (Present)</p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Faculty of Computer Science</h4>
                                <p className="text-gray-500">University "Alexandru Ioan Cuza", Iași</p>
                            </div>

                            <div className="border-t border-white/10 pt-4">
                                <h4 className="text-lg font-semibold text-gray-200">Key Courses</h4>
                                <p className="text-gray-500 text-sm mt-1">
                                    Data Structures, Algorithms, OOP, Database Management, Web Technologies, Operating Systems
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;