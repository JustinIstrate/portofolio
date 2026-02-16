import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects'; // <--- Import nou

function App() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <Hero />
            <TechStack />
            <Projects /> {/* <--- Adăugat aici */}

            {/* Footer simplu */}
            <footer id="contact" className="py-10 text-center text-gray-500 border-t border-white/10 bg-black">
                <p>© 2026 Iustin Istrate. Built with React & Tailwind.</p>
            </footer>
        </div>
    );
}

export default App;