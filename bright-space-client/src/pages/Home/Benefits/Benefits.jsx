import { Box } from "@chakra-ui/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BenefitCard from "../../../components/BenefitCard/BenefitCard";

const benefitInfos = [
    {
        count: '01',
        title: 'Flexible Learning Schedule',
        description: 'Fit your coursework around your existing commitments and obligations.'
    },
    {
        count: '02',
        title: 'Expert Instruction',
        description: 'Learn from industry experts who have hands-on experience in design and development.'
    },
    {
        count: '03',
        title: 'Diverse Course Offerings',
        description: 'Explore a wide range of design and development courses covering various topics.'
    },
    {
        count: '04',
        title: 'Updated Curriculum',
        description: 'Access courses with up-to-date content reflecting the latest trends and industry practices.'
    },
    {
        count: '05',
        title: 'Practical Projects and Assignments',
        description: 'Develop a portfolio showcasing your skills and abilities to potential employers.'
    },
    {
        count: '06',
        title: 'Interactive Learning Environment',
        description: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.'
    }
];

const Benefits = () => {
    return (
        <Box w='full' maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} mt={{ base: 10, md: 20, '2xl': 28 }}>
            <SectionTitle title='Benefits' />
            <Box className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7' mt='16'>
                {
                    benefitInfos.map((info, idx) => <BenefitCard key={idx} info={info} />)
                }
            </Box>
        </Box>
    );
};

export default Benefits;