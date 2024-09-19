import { Box } from "@chakra-ui/react";
import ClassCard from "../../components/ClassCard/ClassCard";
import { useEffect, useState } from "react";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    return (
        <Box display='flex' alignItems='center' my='20'>
            <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                {
                    classes.map((cls, idx) => <ClassCard key={idx} cls={cls} />)
                }
            </Box>
        </Box>
    );
};

export default Classes;