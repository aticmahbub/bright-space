import { useEffect, useState } from "react";

const useLoadAllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://bright-space-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses]
};

export default useLoadAllCourses;