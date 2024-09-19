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
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 2,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 3,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 4,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 5,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 6,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 7,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
        },
        {
            id: 8,
            questions: 'What is Edurock? How does it work?',
            answer: 'Hello and thank you for visiting Edurock- Education LMS Template. Edurock is a modern, trendy, and creative education LMS Bootstrap 5 Template. It loads much faster and has a high degree of conformability. Edurock speeds up the creation of your website by using simple, well-documented code.'
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