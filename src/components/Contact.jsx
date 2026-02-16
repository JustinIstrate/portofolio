import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Let's Work <span className="text-blue-500">Together</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    I'm currently looking for Internship or Junior Developer roles in Iași.
                    If you have an opportunity or just want to say hi, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <a href="mailto:justinistrate95@gmail.com" className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">Email</h3>
                        <p className="text-gray-400 text-sm group-hover:text-blue-100">justinistrate95@gmail.com</p>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/gheorghe-iustin-istrate-b30502263" target="_blank" rel="noopener noreferrer" className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">LinkedIn</h3>
                        <p className="text-gray-400 text-sm group-hover:text-blue-100">Connect with me</p>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/Justinlstrate" target="_blank" rel="noopener noreferrer" className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-gray-700 hover:border-gray-600 transition-all">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">GitHub</h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-200">Check my code</p>
                    </a>
                </div>

                <div className="mt-12 text-gray-500 text-sm">
                    Phone: <span className="text-gray-300">+40 743 253 068</span> • Location: <span className="text-gray-300">Iași, Romania</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;