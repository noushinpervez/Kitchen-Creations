import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="navbar my-3 lg:my-12 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </div>
                    <ul tabindex="0" className="menu menu-sm dropdown-content z-[1] rounded-box bg-buttonColor">
                        <li><a className="transition-all duration-300 ease-in">Home</a></li>
                        <li><a className="transition-all duration-300 ease-in">Recipes</a></li>
                        <li><a className="transition-all duration-300 ease-in">About</a></li>
                        <li><a className="transition-all duration-300 ease-in">Search</a></li>
                    </ul>
                </div>
                <a className="line-clamp-1 text-base lg:text-3xl font-bold">Kitchen Creations</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-base">
                    <li><a className="transition-all duration-300 ease-in hover:bg-buttonColor">Home</a></li>
                    <li><a className="transition-all duration-300 ease-in hover:bg-buttonColor">Recipes</a></li>
                    <li><a className="transition-all duration-300 ease-in hover:bg-buttonColor">About</a></li>
                    <li><a className="transition-all duration-300 ease-in hover:bg-buttonColor">Search</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <label className="input rounded-full items-center gap-2 bg-textColor/5 hidden lg:flex">
                    <CiSearch className="w-full h-1/2" />
                    <input type="text" className="grow text-textColor text-base" placeholder="Search" />
                </label>
                <a className="btn btn-circle bg-buttonColor transition-all duration-300 ease-in hover:ring-2 hover:ring-textColor hover:bg-transparent border-none"><VscAccount className="w-3/5 h-full" /></a>
            </div>
        </div>
    );
};

export default Navbar;