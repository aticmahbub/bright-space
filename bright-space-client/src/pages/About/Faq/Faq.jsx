/**
 * Created By Hisam 18/09/24
*/

import { Accordion } from '@chakra-ui/react';
import faq from '../../../assets/FAQ.png'
import FaqCard from './FaqCard/FaqCard';
import cloud3 from '../../../assets/About Image/Cloud3.png'

const Faq = () => {
    const faqInformation = [
        {
            id: 1,
            questions: 'What can I do on this platform?',
            answer: 'Our LMS platform enables students and teachers to engage in live sessions, share resources, track academic progress, and interact through chats and forums. It also features personalized assessments, AI-powered feedback, and much more to support an enriched learning experience.'
        },
        {
            id: 2,
            questions: 'How are live sessions conducted?',
            answer: 'Live sessions are conducted via virtual classrooms with an interactive whiteboard. Students can participate in real-time discussions with teachers, and recorded sessions will be available for 2 days after each class for review.'
        },
        {
            id: 3,
            questions: 'How is attendance managed during live sessions?',
            answer: 'Attendance is automatically tracked during live sessions. Students participation is logged, and teachers have access to attendance records to monitor engagement.'
        },
        {
            id: 4,
            questions: 'What resources can be shared on the platform?',
            answer: 'You can share a wide variety of resources including text, PDFs, slides, images, and videos. These materials are accessible to all participants without any time limit.'
        },
        {
            id: 5,
            questions: 'How does the AI-powered feedback on assessments work',
            answer: 'After completing assessments or quizzes, students will receive instant feedback powered by AI, providing personalized insights to help improve their performance. Additionally, parents will receive assessment results for review.'
        },
        {
            id: 6,
            questions: 'Can students and teachers interact outside of live sessions?',
            answer: 'Yes! The platform offers a chat feature for real-time messaging and a forum where students and teachers can discuss academic topics, ask questions, and solve problems together.'
        },
        {
            id: 7,
            questions: 'How do I stay informed about important updates?',
            answer: 'The integrated calendar and notification system will keep you informed about class schedules, deadlines, announcements, and other important events with timely notifications.'
        },
        {
            id: 8,
            questions: 'What is the forum’s purpose?',
            answer: 'The forum allows students to engage in discussions, ask questions, and upvote helpful responses. It encourages collaborative problem-solving and knowledge sharing among students and teachers.'
        }
    ]

    return (
        <div>
            <div className="container mx-auto pt-7 px-10 mt-0">
                <div className='flex flex-row md:gap-9'>
                    {/* Image container with a fixed width and height */}
                    <div className='hidden md:flex justify-center items-center w-2/12 flex-shrink-0 h-full'>
                        <img src={faq} alt="FAQ Text" className='w-full mt-auto' />
                    </div>

                    {/* Accordion Section with fixed width and ensuring it doesn't affect the image */}
                    <div className='flex items-center md:w-10/12'>
                        <Accordion className='w-full border rounded-md'>
                            {faqInformation.map(information => (
                                <FaqCard key={information.id} information={information} />
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <img src={cloud3} className='w-full' alt="" />
        </div>
    );



};

export default Faq;