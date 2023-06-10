
import { FaShoppingCart } from "react-icons/fa";
import useBookingClass from "../../../hooks/useBookingClass";
import Container from "../../Shared/Container";
import Swal from "sweetalert2";


const MyClasses = () => {
    const [bookingClass, refetch] = useBookingClass();
    const total = bookingClass.reduce((sum, classes) => classes.price + sum, 0)

    const handleDelete = booking => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/bookingClass/${booking._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your Booking has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    return (
        <Container>
            <div className="">
                <div className="text-center">
                <h1 className="font-bold text-4xl p-5"><span className="text-blue-950">Empowering Students:</span> <span className="text-gray-600">
                Book Your Classes and <br /> Summer Camp Learning Experience</span></h1>
                <p className="mb-10">Welcome to our student-centered platform, where we put the power in the hands of learners. <br /> With our user-friendly interface, students can now easily book their desired classes <br /> and summer camp learning experiences. Whether you are looking to enhance <br /> your academic skills</p>
                </div>
                
                <div className="mb-5 flex items-center justify-between">
                    <h1 className=" flex items-center">
                        <span className="font-semibold text-xl mx-5">Total Bookings:</span>
                        <button className="relative flex items-center gap-2">
                            <FaShoppingCart className="bg-white text-black rounded-full p-1 text-4xl" />
                            <div className="absolute -top-2 -right-2 bg-purple-900 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                {bookingClass?.length || 0}
                            </div>
                        </button>
                    </h1>
                    <div className="space-y-2">
                    <h1 className="font-semibold text-xl">Sub Total: <span className="text-blue-950 text-2xl">${total}</span></h1>
                    <button className="btn-sm btn-outline btn-secondary btn mx-16">Payment</button>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-100 rounded-lg uppercase">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Instructor Name</th>
                                <th>Available Seat</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingClass.map((booking, index) => <tr
                                    key={booking._id}
                                >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{booking.name}</td>
                                    <td>{booking.instructor_name}</td>
                                    <td>{booking.available_seat}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(booking)} className="btn btn-error btn-sm ">Delete</button>
                                    </td>
                                </tr>)
                            }




                        </tbody>

                    </table>
                </div>


            </div>
        </Container>



    );
};

export default MyClasses;