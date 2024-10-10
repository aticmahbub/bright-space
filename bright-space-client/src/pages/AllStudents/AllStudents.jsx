import { Avatar, Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const AllStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/allStudents.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <Box>
            <Text className="text-xl font-bold text-center mb-16">All Students</Text>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Photo</Th>
                            <Th>User</Th>
                            <Th>Phone</Th>
                            <Th>Country</Th>
                            <Th>Status</Th>
                            <Th>Email</Th>
                            <Th>Active Courses</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            students.map((student, idx) =>
                                <Tr key={idx}>
                                    <Td>
                                        <Wrap>
                                            <WrapItem>
                                                <Avatar name={student.student_name} src={student.image} />
                                            </WrapItem>
                                        </Wrap>
                                    </Td>
                                    <Td>{student.student_name}</Td>
                                    <Td>{student.Phone}</Td>
                                    <Td>{student.Country}</Td>
                                    <Td>{student.Status}</Td>
                                    <Td>{student.email}</Td>
                                    <Td>{student.Active_courses}</Td>
                                </Tr>
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AllStudents;