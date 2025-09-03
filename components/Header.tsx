
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
    <header className="fixed top-8 right-8 z-50">
        <nav className="flex items-center gap-2 bg-[#e2ced3]/50 backdrop-blur-sm p-3 rounded-full shadow-lg">
            <Link to="/" className="font-dancing text-[#66496a] text-xl font-semibold px-4 py-1 transition-all duration-300 hover:text-white hover:bg-[#66496a]/50 rounded-full">
                Home
            </Link>
            <Link to="/about-me" className="font-dancing text-[#66496a] text-xl font-semibold px-4 py-1 transition-all duration-300 hover:text-white hover:bg-[#66496a]/50 rounded-full">
                About Me
            </Link>
            <Link to="/get-in-touch" className="font-dancing text-[#66496a] text-xl font-semibold px-4 py-1 transition-all duration-300 hover:text-white hover:bg-[#66496a]/50 rounded-full">
                Contact
            </Link>
        </nav>
    </header>
);

export default Header;