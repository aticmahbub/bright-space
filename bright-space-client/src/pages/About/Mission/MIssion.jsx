import aGirl from '../../../assets/About Image/7.png'
import checkIcon from '../../../assets/About Image/mingcute_check-2-line (1).svg'
import './css/mission.css'
import cloud2 from '../../../assets/About Image/Cloud2.png'

const MIssion = () => {
    const missions = [
        {
            id: 1,
            mission: 'Our Expert Trainers'
        },
        {
            id: 2,
            mission: 'Online Remote Learning'
        },
        {
            id: 3,
            mission: 'Easy to follow curriculum'
        },
        {
            id: 4,
            mission: 'Lifetime Access'
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
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
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