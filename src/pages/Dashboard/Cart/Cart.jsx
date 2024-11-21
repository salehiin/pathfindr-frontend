import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import CartTableRowData from "./CartTableRowData";
import { BsTrash3 } from "react-icons/bs";


const Cart = () => {
    const [cart] = useCart();
    const totalCost = cart.reduce((total, item) => total + item.cost, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Packages: {cart.length}</h2>
                <h2 className="text-4xl">Total Cost: {totalCost}</h2>
                <button className="btn btn-accent">Checkout</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Image</th>
                            <th>Package</th>
                            <th>Guide</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}
                                    {/* <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label> */}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            {/* <div className="font-bold">{item.guideName}</div> */}
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">
                                    {item.tripTitle}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td className="font-bold">{item.guideName}</td>
                                <td className="font-bold">{item.cost}</td>
                                <th className="">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-xs font-bold"><BsTrash3 className="text-red-600" /></button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;