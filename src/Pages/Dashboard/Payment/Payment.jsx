import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useBookingClass from "../../../hooks/useBookingClass";
import Container from "../../Shared/Container";
import CheckoutForm from "./CheckoutForm";
import Loader from "../../Shared/Loader/Loader";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [bookingClass] = useBookingClass();
    const total = bookingClass.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    if (id) {
        const booking = bookingClass.find(item => item._id === id);

        if (!booking) {
            return <div><Loader /></div>;
        }

        return (
            <Container>
                <div>
                    <h2>Student Payment Gateway</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm bookingClass={[booking]} price={price} />
                    </Elements>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div>
                <h2>Student Payment Gateway</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookingClass={bookingClass} price={price} />
                </Elements>
            </div>
        </Container>
    );
};

export default Payment;
