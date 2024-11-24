import { Link } from "react-router-dom";
import Category from "../../Category/Category";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link>Home</Link></li>
        <li>
            <details>
                <summary><Link to="Category">Packages</Link></summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><Link to="/reservation" >Reserve</Link></li>
        {/* <li><Link to="/secret" >Secret</Link></li> */}
        {
            // user ? 'true' : 'false
            // 
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome" >Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome" >Dashboard</Link></li>
        }
        <li className=""><Link to="/dashboard/cart" >
            <button className="btn">
                <FaCartFlatbedSuitcase />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
    </>

    return (
        <>
            <div className="navbar bg-transparent  max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#02c39a]">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#02c39a]">Pathfindr</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#02c39a]">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <span>{user?.displayName}</span>
                            <img className="w-8" src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn text-[#2591b1]">Logout</button>
                        </> : <>
                            <Link to="/login" className="btn  text-[#02c39a] btn-outline hover:bg-[#2591b1] hover:text-white">Login</Link>

                        </>
                    }
                </div>
            </div>
        </>
    );
    // bg-[#f0f3bd]

};

export default NavBar;