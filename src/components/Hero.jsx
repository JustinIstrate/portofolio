import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="text-blue-400 text-sm font-semibold tracking-wide">
            AVAILABLE FOR WORK 🚀
          </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Building Scalable <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Backend Systems
          </span>
                </h1>

                <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Hi, I'm <strong className="text-white">Iustin Istrate</strong>.
                    A passionate Java Developer & DevOps enthusiast, focused on clean architecture,
                    cloud solutions, and efficient coding.
                </p>

                <div className="flex justify-center gap-4">
                    <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all backdrop-blur-sm">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;