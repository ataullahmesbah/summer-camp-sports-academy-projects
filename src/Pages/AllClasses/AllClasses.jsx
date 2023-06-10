import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AllClasses = ({ allClass }) => {
    const { image, name, instructor_name, available_seat, price, _id } = allClass;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleBookingClass = allClass => {
        if (user && user.email) {
            const bookingClass = { classBooking: _id, name, image, price, instructor_name, available_seat, email: user.email }

            fetch('http://localhost:5000/bookingClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Congratulations! You have successfully booked your class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Log In Now, and Booking Your Favorite Class ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{instructor_name}</p>
                <p>{available_seat}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBookingClass(allClass)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>



    );
};

export default AllClasses;