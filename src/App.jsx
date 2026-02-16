import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About'; // <--- Import nou
import Contact from './components/Contact'; // <--- Import nou

function App() {
    return (
        <div className="bg-black min-h-screen text-white font-sans">
            <Navbar />
            <Hero />
            <TechStack />
            <Projects />
            <About /> {/* <--- Adăugat aici */}
            <Contact /> {/* <--- Adăugat aici */}

            {/* Footer minimal */}
            <footer className="py-6 text-center text-gray-600 border-t border-white/5 bg-black text-sm">
                <p>© 2026 Iustin Istrate. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;