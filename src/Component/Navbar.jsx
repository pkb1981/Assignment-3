
import { Cat } from "lucide-react";
import { Link } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {
    // creating links 
    const links = (
        <>
            <Link to='/'>Home</Link>
            <Link to='/apps'>Apps</Link>
            <Link to='/installation'>Installation</Link>

        </>
    )

    return (
        <nav className="navbar shadow-sm px-4 mb-4">

            <h1 className="navbar-start text-[#632EE3] flex items-center font-semibold gap-2">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
                HERO.IO
            </h1>



            <ul className="navbar-center gap-4 text-sm font-medium [&_a]:hover:underline">
                {links}
            </ul>


            <div className="navbar-end">
                <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  border-none text-white flex items-center gap-2 px-4 py-2"> <Cat /> Contribute</button>
            </div>

        </nav>
    );
};

export default Navbar;