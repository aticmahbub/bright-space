import {
    Avatar,
    Box,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import useLoadAllUsers from "../../hooks/useLoadAllUsers"; // Adjust path as necessary
  
  const AllStudents = () => {
    const [allUsers] = useLoadAllUsers(); // Load all users from the custom hook
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      if (allUsers) {
        // Filter for users with the role of "student"
        const studentList = allUsers.filter((item) => item?.role === "student");
        setStudents(studentList);
      }
    }, [allUsers]);
  
    return (
      <Box>
        <Text className="text-xl font-bold text-center mb-16">All Students</Text>
        <TableContainer>
          <Table variant="simple">
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
              {students.map((student, idx) => (
                <Tr key={idx}>
                  <Td>
                    <Wrap>
                      <WrapItem>
                        <Avatar name={student.name || "Unknown"} src={student.image || null} />
                      </WrapItem>
                    </Wrap>
                  </Td>
                  <Td>{student.name || "Unknown"}</Td>
                  <Td>{student.phone || "0"}</Td>
                  <Td>{student.country || "Unknown"}</Td>
                  <Td>{student.status || "Inactive"}</Td>
                  <Td>{student.email || "notprovided@example.com"}</Td>
                  <Td>{student.activeCourses || 0}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default AllStudents;
  