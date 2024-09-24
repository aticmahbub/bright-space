import bannerImg from '../../../assets/bannerImage.png'
import { Button } from '@chakra-ui/react';

import './css/banner.css'

const Banner = () => {
    return (
<<<<<<< HEAD
        <div className=''>
            <div className="h-full flex flex-col-reverse md:flex-row justify-between items-center gap-5 py-6">
=======
        <div className=" bg-[#F7F8FD]">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-5 py-20">
>>>>>>> c23f788b910e0b406b47dbc21978868696c077ad
                {/* text section */}
                <div className='space-y-5 flex-1'>
                    <h5 className="text-pink-400 font-bold">EDUCATION SOLUTION</h5>
                    <h2 className='text-4xl md:text-5xl font-bold'>Empower Your Learning with Virtual Classrooms.</h2>
                    <h3 className='font-medium text-gray-400 text-lg md:text-xl'>
                        An interactive platform for teachers to share resources, assignments, and grades with students, making learning easy and accessible.
                    </h3>
                    <div className='mt-10 flex gap-5 md:gap-8 '>
                    <Button colorScheme='secondary' size='lg' rounded='none'>View Courses</Button>
                    <Button colorScheme='primary' size='lg' rounded='none'>Explore More</Button>
                    </div>
                </div>

    {/* Image section */}
    <div className='flex-1 px-4 md:px-0'>
      <img className='hover:animate-shake w-full max-w-sm md:max-w-full' src={bannerImg} alt="Virtual Classroom" />
    </div>
  </div>
</div>

    );
};

export default Banner;