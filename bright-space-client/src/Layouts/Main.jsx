import { Outlet, useLocation, useParams } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { Box } from '@chakra-ui/react';

const Main = () => {
    const { pathname } = useLocation();
    const { id } = useParams();

    return (
        <Box bg='#F7F7F8'>
            <Box display={pathname === `/live/${id}` ? 'none' : 'block'}>
                <Navbar />
            </Box>
            <Outlet />
            <Box display={pathname === `/live/${id}` ? 'none' : 'block'}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Main;