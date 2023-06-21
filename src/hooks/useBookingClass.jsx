import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useBookingClass = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { refetch, data: bookingClass = [] } = useQuery(
    ['bookingClass', user?.email],
    async () => {
      const res = await fetch(`https://final-project-server-side-ataullahmesbah.vercel.app/bookingClass?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`
        }
      });
      return res.json();
    },
    {
      enabled: !loading, // Enable the query when `loading` is false
      retry: false // Disable automatic retries on query failures (optional)
    }
  );

  return [bookingClass, refetch];
};

export default useBookingClass;
