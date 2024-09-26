import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ClassCard from "../../../components/CourseCard/CourseCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    return (
        <Box py='20'>
            <Heading>Popular Classes</Heading>
            <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10'>
                {
                    classes.map((cls, idx) => <ClassCard key={idx} cls={cls} />)
                }
            </Box>
        </Box>
    );
};

export default PopularClasses;