import Container from "../Shared/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const EnrollClasses = () => {
    const [enrollClass, setEnrollClass] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    
   
    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const response = await axiosSecure.get(`/payments?email=${user.email}`);
                setEnrollClass(response.data);
            } catch (error) {
                console.log(error);
                // Handle the error
            }
        };

        fetchPaymentData();
    }, [axiosSecure, user.email]);


  return (
    <Container>
      <div className="overflow-x-auto mx-auto mt-10 justify-center items-center">
        <div className="bg-gray-800 rounded-lg mb-10">
          <h1 className="text-white text-3xl text-center p-10 font-bold bg-gradient-to-br from-gray-400 to-blue-900 rounded-lg ">
           All Enroll Classes
          </h1>
        </div>

        {enrollClass.length === 0 ? (
          <div className="text-center mt-5">
            <p>No Enroll data available.</p>
          </div>
        ) : (
          <table className="table">
            <thead className="bg-gray-100 rounded-lg">
              <tr className="p-8">
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>E-mail</th>
                <th>Total Amount</th>
                
                
              </tr>
            </thead>
            <tbody>
              {enrollClass.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>{payment.name}</td>
                  <td>{payment.instructors}</td>
                  <td>{payment.email}</td>
                  <td>{payment.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Container>
  );
};

export default EnrollClasses;
