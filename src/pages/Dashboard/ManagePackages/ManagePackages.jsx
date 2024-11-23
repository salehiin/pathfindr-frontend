import { BsTrash3 } from "react-icons/bs";
import usePackage from "../../../hooks/usePackage";
import SectionHeader from "../../Shared/Components/SectionHeader/SectionHeader";
import { FaUsers } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManagePackages = () => {
    const [packages, , refetch] = usePackage();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/packages/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the UI
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
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
            <SectionHeader
                heading="Manage All Packages"></SectionHeader>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Package Name</th>
                                <th>Cost</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packages.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt={`${item.tripTitle}`} />
                                                </div>
                                            </div>
                                            {/* <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div> */}
                                        </div>
                                    </td>
                                    <td className="font-semibold">
                                        {item.tripTitle}
                                    </td>
                                    <td className="text-accent">$ {item.cost}</td>
                                    <td>
                                        <Link to={`/dashboard/updatePackage/${item._id}`}>
                                            <button
                                                // onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-ghost btn-xs font-bold"><FaEdit className="text-accent" />
                                            </button>
                                        </Link>

                                    </td>
                                    <td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteItem(item)}
                                                className="btn btn-ghost btn-xs font-bold"><BsTrash3 className="text-red-600" />
                                            </button>
                                        </td>
                                    </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagePackages;