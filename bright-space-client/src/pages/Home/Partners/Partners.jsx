import { Box, Image } from "@chakra-ui/react";
import zapier from '../../../assets/logos/zapier.svg';
import spotify from '../../../assets/logos/spotify.svg';
import zoom from '../../../assets/logos/zoom.svg';
import amazon from '../../../assets/logos/amazon.svg';
import adobe from '../../../assets/logos/adobe.svg';
import notion from '../../../assets/logos/notion.svg';
import netflix from '../../../assets/logos/netflix.svg';

const partnersLogo = [zapier, spotify, zoom, amazon, adobe, notion, netflix];

const Partners = () => {
    return (
        <Box maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }}>
            <Box display='flex' alignItems='center' justifyContent='space-between' p='8' border='1px' borderColor='#F1F1F3' rounded='base' bg='#FCFCFD'>
                {
                    partnersLogo.map((logo, idx) => <Box key={idx} display='flex' justifyContent='center' w='full' px='10' py='7' borderRight={idx !== 6 ? '1px': 'none'} borderColor='#F1F1F3'>
                        <Image src={logo} alt='partner logo' />
                    </Box>)
                }
            </Box>
        </Box>
    );
};

export default Partners;