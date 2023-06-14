import  { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../Shared/Container";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [sort, setSort] = useState("desc");
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && user) {
          fetchPaymentHistory();
        }
      }, [sort, loading, user]);

      const fetchPaymentHistory = () => {
        const userEmail = user.email; 
        axiosSecure
          .get(`/payments?sort=${sort}&email=${userEmail}`) 
          .then((response) => {
            setPaymentHistory(response.data);
          })
            .catch((error) => {
                console.log(error);
                // Handle the error
            });
    };

    const handleSort = () => {
        const newSort = sort === "asc" ? "desc" : "asc";
        setSort(newSort);
    };

    return (
        <Container>
            <div className="overflow-x-auto mx-auto mt-10 justify-center items-center">
                <div className="bg-gray-800 rounded-lg mb-5">
                    <h1 className="text-white text-3xl text-center p-10 font-bold bg-gradient-to-br from-indigo-800 to-purple-900 rounded-lg">
                        <span className="text-yellow-300">Student Ledger:</span> Payment History
                    </h1>
                </div>

                <div className="text-center mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                        onClick={handleSort}
                    >
                        Sort {sort === "asc" ? "Ascending" : "Descending"}
                    </button>
                </div>

                {paymentHistory.length === 0 ? (
                    <div className="text-center mt-5">
                        <p>No payment data available.</p>
                    </div>
                ) : (
                    <table className="table">
                        <thead className="bg-gray-100 rounded-lg">
                            <tr className="p-8">
                                <th>#</th>
                                <th>E-mail</th>
                                <th>Date</th>
                                <th>Transaction ID</th>
                                <th>Total Amount</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory.map((payment, index) => (
                                <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.email}</td>
                                    <td>{payment.date}</td>
                                    <td>....{payment.transactionId.substring(payment.transactionId.length - 8)}</td>
                                    <td>{payment.price}</td>
                                    <td>{payment.name}</td>
                                    <td>{payment.instructors}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Container>
    );
};

export default PaymentHistory;
