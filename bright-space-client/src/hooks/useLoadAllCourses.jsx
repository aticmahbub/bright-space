import { useEffect, useState } from "react";

const useLoadAllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses]
};

export default useLoadAllCourses;