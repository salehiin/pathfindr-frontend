import { NavLink, Outlet } from "react-router-dom";
import { TbShoppingCartHeart, TbCameraHeart } from "react-icons/tb";
// import { MdHomeRepairService } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { LuCalendarHeart } from "react-icons/lu";
import { TbHeartCog } from "react-icons/tb";
import { BsPersonHearts } from "react-icons/bs";
import { PiListHeartThin, PiListHeartFill, PiUsersThreeThin  } from "react-icons/pi";
import { ImHome, ImUsers  } from "react-icons/im";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-black text-[#2591b1]">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>

                            <li>

                                <NavLink to="/dashboard/adminHome">
                                    <TbHomeHeart />
                                    {/* <MdHomeRepairService /> */}
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                <TbCameraHeart />
                                    {/* <LuCalendarHeart /> */}
                                    Add Packages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservations">
                                <PiListHeartFill />
                                    {/* <TbShoppingCartHeart /> */}
                                    Manage Resevations ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/managePackages">
                                    <TbHeartCog />
                                    {/* <BsPersonHearts /> */}
                                    Manage Packages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <PiListHeartThin />
                                    {/* <BsPersonHearts /> */}
                                    My Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <ImUsers />
                                    {/* <BsPersonHearts /> */}
                                    All Users</NavLink>
                            </li>



                        </>
                            :
                            <>
                                <li>

                                    <NavLink to="/dashboard/userHome">
                                        <TbHomeHeart />
                                        {/* <MdHomeRepairService /> */}
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <LuCalendarHeart />
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <TbShoppingCartHeart />
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <TbHeartCog />
                                        {/* <BsPersonHearts /> */}
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <PiListHeartThin />
                                        {/* <BsPersonHearts /> */}
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider bg-black h-[1px]"></div>
                    <li>

                        <NavLink to="/">
                            <ImHome />
                            {/* <MdHomeRepairService /> */}
                            Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/category">
                            <ImHome />
                            {/* <MdHomeRepairService /> */}
                            Packages</NavLink>
                    </li>
                    <li>

                        <NavLink to="/">
                            <ImHome />
                            {/* <MdHomeRepairService /> */}
                            Contact</NavLink>
                    </li>
                    <li>

                        <NavLink to="/contact">
                            <ImHome />
                            {/* <MdHomeRepairService /> */}
                            Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;