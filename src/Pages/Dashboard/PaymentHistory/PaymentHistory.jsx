import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../Shared/Container";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure
            .get("/payments")
            .then((response) => {
                setPaymentHistory(response.data);
            })
            .catch((error) => {
                console.log(error);
                // Handle the error
            });
    }, [axiosSecure]);

    return (
        <Container>
            <div className="overflow-x-auto mx-auto mt-10 justify-center items-center">
            <div className="bg-gray-800 rounded-lg mb-5">
  <h1 className="text-white text-3xl text-center p-10 font-bold bg-gradient-to-br from-indigo-800 to-purple-900 rounded-lg">
    <span className="text-yellow-300">Student Ledger:</span> Payment History
  </h1>
</div>

            <table className="table">
                <thead className="bg-gray-100 rounded-lg">
                    <tr>
                        <th>#</th>
                        <th>Category</th>
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
                            <td>{payment.category}</td>
                            <td>{payment.date}</td>
                            <td>....{payment.transactionId.substring(payment.transactionId.length - 6)}</td>
                            <td>{payment.price}</td>
                            <td>{payment.name}</td>
                            <td>{payment.instructors}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </Container>
    );
};

export default PaymentHistory;
