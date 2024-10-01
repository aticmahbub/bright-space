import { Box, Image } from "@chakra-ui/react";
import zapier from '../../../assets/logos/zapier.svg';
import spotify from '../../../assets/logos/spotify.svg';
import zoom from '../../../assets/logos/zoom.svg';
import amazon from '../../../assets/logos/amazon.svg';
import adobe from '../../../assets/logos/adobe.svg';
import notion from '../../../assets/logos/notion.svg';
import netflix from '../../../assets/logos/netflix.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';


const partnersLogo = [zapier, spotify, zoom, amazon, adobe, notion, netflix];

const Partners = () => {
    return (
        <Box maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }}>
            <Box p={{ base: 2, lg: 6, '2xl': 7 }} border='1px' borderColor='#F1F1F3' rounded='lg' bg='#FCFCFD'>
                <Swiper
                    slidesPerView={1}
                    // style={{
                    //     paddingBottom: 45,
                    //     '--swiper-pagination-color': '#FF9500'
                    // }}
                    pagination={{
                        clickable: true,
                        // dynamicBullets: true
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1080: {
                            slidesPerView: 7,
                        },
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        partnersLogo.map((logo, idx) => <SwiperSlide key={idx}><Box display='flex' justifyContent='center' w='full' px={{ base: 7, '2xl': 10 }} py={{ base: 5, '2xl': 7 }} borderRight={idx !== 6 ? '1px' : 'none'} borderColor='#F1F1F3'>
                            <Image src={logo} alt='partner logo' />
                        </Box></SwiperSlide>)
                    }
                </Swiper>
            </Box>
        </Box>
    );
};

export default Partners;