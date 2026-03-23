import { Cat, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex items-center gap-1 ${isActive
                        ? "text-[#632EE3] border-b-2 border-[#632EE3]"
                        : "text-gray-500"
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Home
            </NavLink>
            <NavLink
                to="/apps"
                className={({ isActive }) =>
                    `flex items-center gap-1 ${isActive
                        ? "text-[#632EE3] border-b-2 border-[#632EE3]"
                        : "text-gray-500"
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Apps
            </NavLink>
            <NavLink
                to="/installation"
                className={({ isActive }) =>
                    `flex items-center gap-1 ${isActive
                        ? "text-[#632EE3] border-b-2 border-[#632EE3]"
                        : "text-gray-500"
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Installation
            </NavLink>
        </>
    );

    return (
        <nav className="bg-white shadow-sm px-4 py-3 flex items-center justify-between relative">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-[#632EE3] font-semibold">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
                HERO.IO
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-sm font-medium [&_a]:hover:underline">
                {links}
            </ul>

            {/* Contribute Button (Desktop) */}
            <div className="hidden md:flex">
                <a
                    href="https://github.com/pkb1981/Assignment-3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none text-white flex items-center gap-2 px-4 py-2">
                        <Cat /> Contribute
                    </button>
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden flex items-center text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
                    <ul className="flex flex-col gap-4 text-sm font-medium [&_a]:hover:underline">
                        {links}
                    </ul>
                    <a
                        href="https://github.com/pkb1981/Assignment-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none text-white flex items-center gap-2 px-4 py-2">
                            <Cat /> Contribute
                        </button>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;