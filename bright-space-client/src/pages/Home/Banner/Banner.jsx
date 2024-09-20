import bannerImg from '../../../assets/bannerImage.png'
import './css/banner.css'

const Banner = () => {
    return (
        <div className=" bg-[#F7F8FD]">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-5 py-20">
                {/* text section */}
                <div className='py-12 md:py-28 space-y-5 max-w-full md:max-w-[40%] p-3'>
                    <h5 className="text-pink-400 font-bold">EDUCATION SOLUTION</h5>
                    <h2 className='text-4xl md:text-5xl font-bold'>Empower Your Learning with Virtual Classrooms.</h2>
                    <h3 className='font-medium text-gray-400 text-lg md:text-xl'>
                        An interactive platform for teachers to share resources, assignments, and grades with students, making learning easy and accessible.
                    </h3>
                    <div className='mt-10 flex gap-5 md:gap-8 '>
                        <button className='border rounded-md px-6 py-3 md:px-8 md:py-4 font-semibold bg-[#5F2EED] text-white hover:bg-white hover:text-black hover:border-[#5F2EED]'>
                            View Courses
                        </button>
                        <button className='border rounded-md px-6 py-3 md:px-8 md:py-4 font-semibold bg-[#F2277E] text-white hover:bg-white hover:text-black hover:border-[#F2277E]'>
                            Explore More
                        </button>
                    </div>
                </div>

                {/* image section */}
                <div className=''>
                    <img className='h-[350px] md:h-[550px] hover:animate-shake' src={bannerImg} alt="Virtual Classroom" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
