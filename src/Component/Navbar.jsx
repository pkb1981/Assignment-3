
import { Cat } from "lucide-react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {

    // creating Navlinks for creating active links and underlines
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
            >Home</NavLink>
            <NavLink
                to="/apps"
                className={({ isActive }) =>
                    `flex items-center gap-1 ${isActive
                        ? "text-[#632EE3] border-b-2 border-[#632EE3]"
                        : "text-gray-500"
                    }`
                }
            >Apps</NavLink>

            <NavLink
                to="/installation"
                className={({ isActive }) =>
                    `flex items-center gap-1 ${isActive
                        ? "text-[#632EE3] border-b-2 border-[#632EE3]"
                        : "text-gray-500"
                    }`
                }
            >Installation</NavLink>

        </>
    )



    return (
        <nav className="navbar shadow-sm px-4 mb-4">

            <h1 className="navbar-start text-[#632EE3] flex items-center font-semibold gap-2">
                <Link to='/' className="flex items-center gap-1 "><img src={Logo} alt="Logo" className="w-8 h-8" />
                    HERO.IO </Link>
            </h1>



            <ul className="navbar-center gap-4 text-sm font-medium [&_a]:hover:underline">
                {links}
            </ul>


            <div className="navbar-end">
                <a href="https://github.com/pkb1981/Assignment-3" target="_blank"> <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  border-none text-white flex items-center gap-2 px-4 py-2"> <Cat />Contribute</button></a>
            </div>

        </nav>
    );
};

export default Navbar;