import SectionHeader from "../../Shared/Components/SectionHeader/SectionHeader";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: add publishable key
const srtipePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {



    return (
        <div>
            <SectionHeader
                heading={"Payment"}
            ></SectionHeader>
            <div>
                <Elements stripe={srtipePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;