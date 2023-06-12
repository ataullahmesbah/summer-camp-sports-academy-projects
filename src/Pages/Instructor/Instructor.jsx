import usePopularInstructor from "../../hooks/usePopularInstructor";
import Container from "../Shared/Container";


const Instructor = () => {
    const [instructor] = usePopularInstructor();
    const instructors = instructor.filter(instarctorCata => instarctorCata.role === 'instructor')

    return (
        <Container>
            <div className="pt-[140px]">
            <h1 className="text-4xl uppercase font-bold text-center text-orange-700 pb-5"><span className="text-blue-900 ">Elite Athlete Arena Sports Academy: </span> <span className="text-stone-500">Expert Instructors <br /> Guiding Champions</span> </h1>
            <p className="text-center mb-14 font-serif text-gray-500 ">At Elite Athlete Arena Sports Academy, we pride ourselves on our team of exceptional instructors who are dedicated to <br /> nurturing the talents of aspiring athletes and guiding them towards success. Our instructors are highly experienced <br /> and possess a deep understanding of their respective sports, bringing a wealth of knowledge <br /> and expertise to our academy.</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-400 uppercase ">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>E-mail</th>

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