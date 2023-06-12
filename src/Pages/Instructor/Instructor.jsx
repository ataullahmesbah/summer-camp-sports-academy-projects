import usePopularInstructor from "../../hooks/usePopularInstructor";
import Container from "../Shared/Container";


const Instructor = () => {
    const [instructor] = usePopularInstructor();
    const instructors = instructor.filter(instarctorCata => instarctorCata.role === 'instructor')

    return (
        <Container>
            <div className="pt-[140px]">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300 uppercase ">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>

                            </tr>
                        </thead>
                        <tbody>


                            {
                                instructors.map((allInstructor, index) => <tr
                                    key={allInstructor._id}


                                >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={allInstructor.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{allInstructor.name}</td>
                                    <td>{allInstructor.email}</td>

                                </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </Container>
    );
};

export default Instructor;