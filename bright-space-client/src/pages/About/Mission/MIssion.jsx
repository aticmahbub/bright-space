import aGirl from '../../../assets/About Image/7.png'
import checkIcon from '../../../assets/About Image/mingcute_check-2-line (1).svg'
import './css/mission.css'
import cloud2 from '../../../assets/About Image/Cloud2.png'

const MIssion = () => {
    const missions = [
        {
            id: 1,
            mission: 'Live Sessions, Whiteboards & Attendance'
        },
        {
            id: 2,
            mission: 'Online Assessments & AI-Powered Quizzes'
        },
        {
            id: 3,
            mission: 'Blog for Educational Content Sharing'
        },
        {
            id: 4,
            mission: 'AI Chat Assistant (LLM-based)'
        },
    ]

    return (
        <div className='mt-16'>
            <div className="container mx-auto font-english_font_family -mb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                    <div className=''>
                        <img className='mx-auto lg:mx-0 px-16 md:px-0 lg:ml-auto' src={aGirl} alt="A Girl Photo" />
                    </div>
                    <div className='pl-16'>
                        <p className='welcome_message mb-5'>WELCOME TO Bright Space</p>
                        <h4 className='middle_text mb-5'>
                            Digital Online Academy: Your Path to Creative Excellence
                        </h4>
                        <p className='about_text mb-7'>
                        To create an accessible, innovative, and engaging learning platform that empowers students and educators alike to thrive in a dynamic digital environment
                        </p>
                        <ul>
                            {missions.map(mission =>
                                <li className='list_style' key={mission.id}>
                                    <img src={checkIcon} alt="" />
                                    <span>{mission.mission}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <img className='w-full' src={cloud2} alt="" />
        </div>
    );
};

export default MIssion;