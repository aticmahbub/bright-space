import { Box } from "@chakra-ui/react";
import ClassCard from "../../../components/ClassCard/ClassCard";
import { useEffect, useState } from "react";

const AllCourses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    return (
        <Box display='flex' alignItems='center' py='20'>
            <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                {
                    classes.map((cls, idx) => <ClassCard key={idx} cls={cls} />)
                }
            </Box>
        </Box>
    );
};

export default AllCourses;