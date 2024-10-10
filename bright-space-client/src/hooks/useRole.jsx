import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import useLoadAllUsers from "./useLoadAllUsers";

const useRole = () => {
  const { user } = useAuth();
  const [allUsers] = useLoadAllUsers(); 
  const [role, setRole] = useState(null); 
  console.log(role);
  useEffect(() => {
    if (allUsers && user) {

      const findRole = allUsers.find(item => item?.email === user?.email);
      if (findRole) {
        setRole(findRole.role); 
      }
    }
  }, [allUsers, user]);

  return role;
  
};

export default useRole;
