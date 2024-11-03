import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

// Analytics component displaying different cards
const Analytics = () => {
    return (
        <Flex wrap="wrap" justify="space-between" p="6">
            <AnalyticsCard title="Total Students" number={120} helpText="+5 since last week" />
            <AnalyticsCard title="Total Courses" number={30} helpText="+2 since last week" />
            <AnalyticsCard title="Active Enrollments" number={75} helpText="+10 since last week" />
            <AnalyticsCard title="New Feedback" number={15} helpText="+3 since last week" />
        </Flex>
    );
};

// Individual analytics card
const AnalyticsCard = ({ title, number, helpText }) => {
    return (
        <Box
            w={{ base: "100%", md: "45%", lg: "22%" }}
            p="4"
            mb="4"
            borderWidth="1px"
            borderRadius="lg"
            shadow="md"
            bg="white"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }} // Hover effect
        >
            <Stat>
                <StatLabel>{title}</StatLabel>
                <StatNumber>{number}</StatNumber>
                <StatHelpText>{helpText}</StatHelpText>
            </Stat>
        </Box>
    );
};
