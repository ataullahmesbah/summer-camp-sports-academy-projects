import { useQuery } from "@tanstack/react-query";
import Container from "../Shared/Container";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {

    }

    return (
        <Container>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td className="text-gray-600 font-bold">{user.role === 'admin' ? 'ADMIN' : user.role === 'instructor' ? 'Instructor' : 'Student'}</td>

                                <td><button
                                    onClick={() => handleMakeAdmin(user)}
                                    className={` text-purple-600 btn-sm border border-purple-800 rounded-lg font-semibold ${user.role === 'admin' ? 'bg-slate-500 border-gray-300 text-gray-300 border-gray-200 ' : ''}`}
                                    disabled={user.role === 'admin'}
                                >
                                    Admin
                                </button></td>
                                <td><button onClick={() => handleMakeInstructor(user)} className="btn btn-outline btn-accent btn-sm">Instructor</button></td>
                                <td><button className="btn btn-error btn-sm">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default AllUsers;