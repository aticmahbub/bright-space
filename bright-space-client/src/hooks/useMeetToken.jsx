import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMeetToken = () => {
    const axiosPublic = useAxiosPublic();
    const meetToken = localStorage.getItem('meetToken');

    const { mutate: mutateUserInfo } = useMutation({
        mutationKey: ['meetingToken'],
        mutationFn: async (info) => {
            const res = await axiosPublic.post('/meetingToken', info);
            return res.data;
        },
        onSuccess: (data) => {
            if (!meetToken) {
                localStorage.setItem('meetToken', data.token);
            } else {
                localStorage.removeItem('meetToken');
                localStorage.setItem('meetToken', data.token);
            }
        }
    });

    return mutateUserInfo;
};

export default useMeetToken;