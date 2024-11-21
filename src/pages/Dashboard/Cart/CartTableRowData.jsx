

const CartTableRowData = ({image, cost, guideName, tripTitle}) => {
    return (
        <div>
            <tr key={item._id}>
                <th>
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
                            <div className="font-bold">{guideName}</div>
                            {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                    </div>
                </td>
                <td>
                    {tripTitle}
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">{cost}</button>
                </th>
            </tr>
        </div>
    );
};

export default CartTableRowData;