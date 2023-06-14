import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const usePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { refetch, data: payments = [] } = useQuery(
    ['payments', user?.email],
    async () => {
      const res = await fetch(`https://final-project-server-side-beta.vercel.app/payments?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`
        }
      });
      return res.json();
    },
    {
      enabled: !loading && user?.email, 
      retry: false 
    }
  );

  return [payments, refetch];
};

export default usePayment;
