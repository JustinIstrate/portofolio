import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 md:pt-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Layout GRID: 1 coloană pe mobil, 2 coloane pe desktop (md) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Coloana Stânga: TEXT */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-sm font-semibold tracking-wide">
                AVAILABLE FOR WORK 🚀
              </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Computer Science <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
    Student
  </span>
                        </h1>

                        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
                            Hi, I'm <strong className="text-white">Iustin Istrate</strong>.
                            A final-year CS student at <strong className="text-blue-400">UAIC Iași</strong>,
                            passionate about building end-to-end applications and exploring
                            <span className="text-blue-400"> Microservices</span> & <span className="text-emerald-400">Cloud Infrastructure</span>.
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                                View Projects
                            </a>
                            <a href="#contact" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all backdrop-blur-sm">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Coloana Dreapta: IMAGINE */}
                    <div className="order-1 md:order-2 flex justify-center relative">
                        {/* Efect de strălucire în spatele pozei */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full z-0"></div>

                        {/* Containerul pozei cu border */}
                        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-4xl overflow-hidden border-4 border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-2xl transform hover:-rotate-2">
                            <img
                                src="/profile.jpeg"  // <--- ASIGURĂ-TE CĂ NUMELE FIȘIERULUI E CORECT AICI
                                alt="Iustin Istrate"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;