import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bright-space-server-fnwkazze9-atic-mahbubs-projects.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;