/**
 * Created By Hisam
 */
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import PropTypes from 'prop-types';


const FaqCard = ({ information }) => {
    const { questions, answer } = information
    return (
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: '#E7F1FF', color: '#F2277E' }}>
                        <Box as='span' flex='1' textAlign='left' className='text-2xl font-bold py-3 px-1'>
                            {questions}
                        </Box>
                        <AccordionIcon w={10} h={10} />
                    </AccordionButton>
                </h2>
                <AccordionPanel className='text-xl' py={10} px={5}>
                    {answer}
                </AccordionPanel>
            </AccordionItem>
    );
};

FaqCard.propTypes = {
    information: PropTypes.object
};

export default FaqCard;