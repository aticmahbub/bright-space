import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { Box } from '@chakra-ui/react';

const Main = () => {
    return (
        <>
            <Navbar />
            <Box bg='#F7F8FD' h='full'>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
};

export default Main;