import { useEffect, useState } from "react";
import AdminAllClassDetails from "../AdminAllClassDetails/AdminAllClassDetails";
import Container from "../Shared/Container";


const AdminAllClasses = () => {
    const [allClasses, setAllClasses] = useState([]);




    useEffect(() => {
        fetch('https://final-project-server-side-ataullahmesbah.vercel.app/classes')
            .then(res => res.json())
            .then(data => setAllClasses(data));
    }, [])



    return (
        <Container>
            <div>
            <h3 className="text-4xl text-center font-bold  mb-10">All Classes</h3>


            <table className="table w-full ">

                <thead className="uppercase">
                    <tr>

                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        


                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClasses.map((allClasses, index) => <AdminAllClassDetails
                            key={allClasses._id}
                            allClasses={allClasses}
                            index={index}
                        ></AdminAllClassDetails>)
                    }
                </tbody>
            </table>
        </div>
        </Container>
    );
};

export default AdminAllClasses;  