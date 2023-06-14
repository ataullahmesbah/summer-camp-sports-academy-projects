import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import InstructorAllClasses from "../InstructorAllClasses/InstructorAllClasses";
import Container from "../Shared/Container";
import Swal from "sweetalert2";


const InstructorOwnClass = () => {
    const { user } = useContext(AuthContext);
    const [myClass, setMyClass] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/classes?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [navigate])

    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/classes/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {


                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                const remaining = myClass.filter(instructorClass => instructorClass._id !== id);
                setMyClass(remaining);
            }
        })
    }

    return (
        <Container>
            <div className="mx-20 mt-20">
                <h2 className="text-5xl font-bold text-center mt-10 mb-10 text-blue-950">Your Personalized Classes:  <span className="text-gray-500">Unlocking Tailored Insights <br /> for Your Learning Journey</span></h2>
                <p className="text-center text-stone-500 font-serif mb-8">Harness the power of your unique data! Our personalized dashboard provides tailored insights, empowering <br /> you to make informed decisions based on your preferences and goals. Log in now and take charge of <br /> your journey!</p>

                {myClass.length === 0 ? (
                    <div className="text-center mt-10">
                        <p className="text-stone-500 font-serif text-6xl mb-5">No classes found.</p>
                        <p className="text-stone-500 font-serif text-2xl">Add a class to get started!</p>
                    </div>
                ) : (

                    <table className="table w-full">

                        <thead className="bg-gray-200 uppercase">
                            <tr>

                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>E-mail</th>
                                <th>Price</th>
                                <th>Available Seats</th>
                                <th>Category</th>
                                <th>Delete</th>
                                <th>Update</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClass.map((instructorClass, index) => <InstructorAllClasses
                                    key={instructorClass._id}
                                    instructorClass={instructorClass}
                                    index={index}
                                    handleDelete={handleDelete}
                                ></InstructorAllClasses>)
                            }
                        </tbody>
                    </table>
                )}
            </div>
        </Container>
    );
};

export default InstructorOwnClass;