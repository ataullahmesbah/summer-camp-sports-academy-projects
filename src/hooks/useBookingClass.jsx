import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const useBookingClass = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { refetch, data: bookingClass = [] } = useQuery({
        queryKey: ['bookingClass', user?.email],
        enabled: loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookingClass?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })
    return [bookingClass, refetch]


}
export default useBookingClass;
