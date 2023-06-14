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
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                title: `${user.name} is an instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Failed to update user role',
              showConfirmButton: false,
              timer: 1500
            });
          });
      };

      const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${user.name}`
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/users/${user._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    `Your ${user.email} mail has been deleted.`,
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    return (
        <Container>
            <div className="overflow-x-auto mt-10 mx-auto">
<h2 className="text-center font-bold text-5xl text-blue-950 p-10">All Users Information </h2>
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
                                    className={` text-purple-600 btn-sm border border-purple-800 rounded-lg font-semibold ${user.role === 'admin' ? 'bg-slate-500 text-gray-300 border-gray-200 ' : ''}`}
                                    disabled={user.role === 'admin'}
                                >
                                    Admin
                                </button></td>


                                <td><button
                  onClick={() => handleMakeInstructor(user)}
                  className={`btn btn-outline btn-accent btn-sm ${
                    user.role === 'instructor' ? 'disabled' : ''
                  }`}
                  disabled={user.role === 'instructor'}
                >
                  Instructor
                </button></td>


                                <td><button onClick={() => handleDelete(user)} className="btn btn-error btn-sm">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default AllUsers;