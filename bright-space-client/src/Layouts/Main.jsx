import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { Box } from '@chakra-ui/react';

const Main = () => {
    return (
        <Box bg='#F7F7F8'>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Main;