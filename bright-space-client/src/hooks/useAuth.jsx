import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuth = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return user
};

export default useAuth;