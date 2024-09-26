import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { Box } from '@chakra-ui/react';

const Main = () => {
    return (
        <>
            <Navbar />
            <Box bg='#F7F7F8' px={{base: 4, md: 6, xl: 10, '2xl': 44}} h='full'>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
};

export default Main;