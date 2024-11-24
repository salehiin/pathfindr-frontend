import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import SectionHeader from "../../Shared/Components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionHeader
            heading={`Payment History: ${payments.length}`}
            ></SectionHeader>
            <h2 className="text-3xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cost</th>
                            <th>TransactionId</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transsactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;