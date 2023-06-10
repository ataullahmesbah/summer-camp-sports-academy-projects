import useBookingClass from "../../../hooks/useBookingClass";
import Container from "../../Shared/Container";


const MyClasses = () => {
    const [bookingClass] = useBookingClass();
    const total = bookingClass.reduce((sum, classes) => classes.price + sum, 0)

    return (
        <Container>
            <div className="">
                <div className="flex space-x-10 mb-10">
                    <h1 className="text-center">Total items: {bookingClass.length}</h1>
                    <h1 className="text-center">Total Price: ${total}</h1>
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
                                <th>
                                    <button className="btn btn-error btn-sm ">Delete</button>
                                </th>
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