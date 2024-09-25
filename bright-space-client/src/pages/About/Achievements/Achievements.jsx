// import cloud4 from '../../../assets/About Image/Cloud4.png'
import instructor from '../../../assets/About Image/instructor.png'
import contact from '../../../assets/About Image/contact.png'
import award from '../../../assets/About Image/award.png'
// import bottom from '../../../assets/About Image/about_bottom_design.png'


const Achievements = () => {
    const information = [
        {
            id: 1,
            image: contact,
            title: 'Educator Support',
            description: 'So why settle for anything less? Eduna is a super simple template specially made for educational Websites.'
        },
        {
            id: 2,
            image: instructor,
            title: 'Student Profiling System',
            description: 'A profiling system that tracks students grades, progress, analytics, and a leaderboard. It also includes a list of enrolled and completed courses, with students able to leave reviews for teachers.'
        },
        {
            id: 3,
            image: award,
            title: 'Chat Assistant',
            description: 'for handling text and image-based queries, offering personalized academic help and guidance.'
        },
    ]

    return (
        <div className='font-english_font_family mt-6'>
            {/* <img src={cloud4} className='w-full' alt="" /> */}
            <div className="container mx-auto relative  mb-16">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {information.map(info =>
                        <div className='text-center' key={info.id}>
                            <img src={info.image} className='mx-auto' alt="" />
                            <h3 className='text-[32px] font-bold text-text_color_1 mt-4'>{info.title}</h3>
                            <p className='text-lg font-normal text-text_color_1 px-16'>
                                {info.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            {/* <img src={bottom} className='w-full' alt="" /> */}
        </div>
    );
};

export default Achievements;


