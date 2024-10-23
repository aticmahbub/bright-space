import { Outlet, useLocation, useParams } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { Box, IconButton } from '@chakra-ui/react';
import { IoMdChatboxes } from 'react-icons/io';

const Main = () => {
    const { pathname } = useLocation();
    const { id } = useParams();

    return (
        <Box bg='#F7F7F8' pos='relative'>
            <Box display={pathname === `/live/${id}` ? 'none' : 'block'}>
                <Navbar />
            </Box>
            <Outlet />
            <Box display={pathname === `/live/${id}` ? 'none' : 'block'}>
                <Footer />
            </Box>
            <IconButton
                pos='fixed'
                right='5'
                bottom='5'
                size='lg'
                isRound={true}
                variant='solid'
                colorScheme='primary'
                aria-label='Done'
                fontSize='20px'
                icon={<IoMdChatboxes />}
            />
        </Box>
    );
};

export default Main;