import bannerImg from '../../../assets/bannerImage.png'
import './css/banner.css'

const Banner = () => {
    return (
<div className='h-[calc(100vh-102px)]'>
  <div className="h-full flex flex-col-reverse md:flex-row justify-between items-center gap-5 py-6">
    
    {/* Text section */}
    <div className='space-y-4 md:space-y-5 flex-1 px-4 md:px-0'>
      {/* <h5 className="text-[#F2277E] font-bold text-lg md:text-xl">EDUCATION SOLUTION</h5> */}
      <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
        Empower Your Learning with Virtual Classrooms.
      </h2>
      <h3 className='font-semibold text-lg md:text-2xl leading-snug'>
        An interactive platform for teachers to share resources, assignments, and grades with students, making learning easy and accessible.
      </h3>
      <div className='flex flex-col md:flex-row gap-3 md:gap-8'>
        <button className='border px-6 py-3 md:px-8 md:py-4 font-semibold bg-[#5F2EED] text-white hover:bg-white hover:text-black hover:border-[#5F2EED]'>
          View Courses
        </button>
        <button className='border px-6 py-3 md:px-8 md:py-4 font-semibold bg-[#F2277E] text-white hover:bg-white hover:text-black hover:border-[#F2277E]'>
          Explore More
        </button>
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
