import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useBookingClass from "../../../hooks/useBookingClass";
import Container from "../../Shared/Container";
import CheckoutForm from "./CheckoutForm";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [bookingClass] = useBookingClass();
  const booking = bookingClass.find(item => item._id === id);

  if (!booking) {
    return <div>Loading...</div>; // Add appropriate loading state
  }

  const price = parseFloat(booking.price.toFixed(2));
  const instructors = booking.instructor_name;
  const category = booking.category;
  const name = booking.name;

  return (
    <Container>
      <div className="mb-40">
        <h2 className="text-4xl font-bold text-center text-blue-900 m-10">Online Payment Gateway</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-100 border border-gray-300 box-border border-hidden shadow-lg p-16 rounded-lg lg:w-1/2 md:w-full sm:w-1/2 mx-auto mb-20">
          <div className="sm:order-1 sm:mr-8 space-y-3 justify-center items-center">
            <img src={user?.photoURL} alt="Profile" className="w-40 h-40 rounded-full" />
          </div>
          <div className="sm:order-2 space-y-2">
            <h2 className="text-xl font-semibold text-blue-950">Name: {user?.displayName}</h2>
            <p className="text-gray-500 font-semibold">Email: {user?.email}</p>
            <p className="font-semibold">Price: <span className="text-orange-500">${price}</span></p>
          </div>

        </div>


        <div className="mx-auto bg-gray-200 lg:w-1/2  p-10 rounded-lg text-center space-y-5">

          <Elements stripe={stripePromise}>
            <CheckoutForm bookingClass={[booking]} price={price} instructors={instructors} category={category} name={name} />
          </Elements>
        </div>
      </div>
    </Container>
  );
};

export default Payment;
