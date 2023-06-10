
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
            if(result.isConfirmed){
                fetch(`http://localhost:5000/bookingClass/${booking._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
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