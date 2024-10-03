import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useEnrolls = () => {

    const {user} = useAuth()
    const axiosSecure =useAxiosSecure()
    const {refetch, data: enrolls=[]} = useQuery({
        queryKey: ['enrolls', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/enrolls?email=${user.email}`)
            return res.data
        }
    })
    return [enrolls, refetch]
};

export default useEnrolls;