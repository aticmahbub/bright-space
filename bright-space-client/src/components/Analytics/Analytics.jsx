import { Box, Flex,  Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const Analytics = () => {
    return (
        <Flex wrap="wrap" justify="space-between" p="6" gap="6">
            <AnalyticsCard title="Total Students" number={120} helpText="+5 since last week" />
            <AnalyticsCard title="Total Courses" number={30} helpText="+2 since last week" />
            <AnalyticsCard title="Active Enrollments" number={75} helpText="+10 since last week" />
            <AnalyticsCard title="New Feedback" number={15} helpText="+3 since last week" />
        </Flex>
    );
};

// Individual analytics card component with refined styling
const AnalyticsCard = ({ title, number, helpText }) => {
    return (
        <Box
            w={{ base: "100%", md: "45%", lg: "22%" }}
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            shadow="sm"
            bg="white"
            transition="transform 0.15s ease-in-out"
            _hover={{ transform: "scale(1.03)" }}
        >
            <Stat>
                <StatLabel fontSize="md" color="gray.600" fontWeight="medium">{title}</StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold" color="orange.500">{number}</StatNumber>
                <StatHelpText fontSize="sm" color="green.500">{helpText}</StatHelpText>
            </Stat>
        </Box>
    );
};

export default Analytics;
