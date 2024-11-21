import { NavLink, Outlet } from "react-router-dom";
import { TbShoppingCartHeart } from "react-icons/tb";
// import { MdHomeRepairService } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { LuCalendarHeart } from "react-icons/lu";
import { TbHeartCog } from "react-icons/tb";
import { BsPersonHearts } from "react-icons/bs";
import { PiListHeartThin } from "react-icons/pi";
import { ImHome } from "react-icons/im";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-black text-[#2591b1]">
                <ul className="menu p-4">
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
                            My Cart</NavLink>
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
                            Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/">
                            <ImHome />
                            {/* <MdHomeRepairService /> */}
                            Home</NavLink>
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