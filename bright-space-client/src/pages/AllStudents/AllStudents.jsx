import { AddIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Heading, Icon, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { BsThreeDots } from "react-icons/bs";

const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const toast = useToast();

    const fetchStudents = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/allStudents.json');
            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }
            const data = await response.json();
            setAllStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
            toast({
                title: "Error",
                description: "Failed to load students. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    const renderTableHeader = () => (
        <Thead>
            <Tr>
                <Th>Image</Th>
                <Th>Instructor</Th>
                <Th className='hidden lg:table-cell'>Phone</Th>
                <Th className='hidden lg:table-cell'>Country</Th>
                <Th className='hidden lg:table-cell'>Description</Th>
                <Th>Active courses</Th>
                <Th className='hidden lg:table-cell'>Status</Th>
                <Th><Icon as={BsThreeDots} boxSize={6} /></Th>
            </Tr>
        </Thead>
    );

    const renderTableBody = () => (
        <Tbody>
            {allStudents.map((student) => (
                <Tr key={student.id}>
                    <Td>
                        <Avatar src={student.image} name={student.student_name} size="md" />
                    </Td>
                    <Td>{student.student_name}</Td>
                    <Td className='hidden lg:table-cell'>{student.Phone}</Td>
                    <Td className='hidden lg:table-cell'>{student.Country}</Td>
                    <Td className='hidden lg:table-cell'>{student.Description}</Td>
                    <Td>{student.Active_courses}</Td>
                    <Td className='hidden lg:table-cell'>{student.Status}</Td>
                    <Td>
                        <Menu>
                            <MenuButton as={IconButton} aria-label='Options' icon={<Icon as={BsThreeDots} />} variant='ghost' />
                            <MenuList>
                                <MenuItem>View Profile</MenuItem>
                                <MenuItem>Edit</MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    );

    const renderPagination = () => (
        <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Text>
                Showing {Math.min(allStudents.length, 10)} of {allStudents.length} entries
            </Text>
            <Stack direction="row" spacing={2}>
                <Button size="sm" leftIcon={<ChevronLeftIcon />} disabled>
                    Previous
                </Button>
                <Button size="sm" variant="outline">1</Button>
                <Button size="sm" variant="outline">2</Button>
                <Button size="sm" variant="outline">3</Button>
                <Button size="sm" rightIcon={<ChevronRightIcon />}>
                    Next
                </Button>
            </Stack>
        </Flex>
    );

    return (
        <Flex direction="column" p={[0, 0, 4]}>
            <Flex justifyContent="space-between" wrap="wrap" alignItems="center" mb={4}>
                <Heading as="h1" size="xl" fontWeight="bold" color="black">
                    Students
                </Heading>
                <Flex justifyContent="end" alignItems="center" wrap="wrap" gap={4} flex={1}>
                    <InputGroup maxW="300px">
                        <InputLeftElement pointerEvents="none">
                            <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search students" focusBorderColor="primary.500" />
                    </InputGroup>
                    <Select placeholder="Status" maxW="200px" focusBorderColor="primary.500">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                    </Select>
                    <Button leftIcon={<AddIcon />} colorScheme="primary" variant="solid">
                        Add Student
                    </Button>
                </Flex>
            </Flex>
            <Table variant="simple" size="md">
                {renderTableHeader()}
                {!isLoading && renderTableBody()}
            </Table>
            {!isLoading && renderPagination()}
        </Flex>
    );
};

export default AllStudents;