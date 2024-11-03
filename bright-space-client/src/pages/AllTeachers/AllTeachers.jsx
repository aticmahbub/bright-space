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
  
  const AllTeachers = () => {
    const [allUsers] = useLoadAllUsers(); // Load all users from the custom hook
    const [teachers, setTeachers] = useState([]);
  
    useEffect(() => {
      if (allUsers) {
        // Filter for users with the role of "teacher"
        const teacherList = allUsers.filter((item) => item?.role === "teacher");
        setTeachers(teacherList);
      }
    }, [allUsers]);
  
    return (
      <Box>
        <Text className="text-xl font-bold text-center mb-16">All Teachers</Text>
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
                <Th>Courses Taught</Th>
              </Tr>
            </Thead>
            <Tbody>
              {teachers.map((teacher, idx) => (
                <Tr key={idx}>
                  <Td>
                    <Wrap>
                      <WrapItem>
                        <Avatar name={teacher.name || "Unknown"} src={teacher.image || null} />
                      </WrapItem>
                    </Wrap>
                  </Td>
                  <Td>{teacher.name || "Unknown"}</Td>
                  <Td>{teacher.phone || "0"}</Td>
                  <Td>{teacher.country || "Unknown"}</Td>
                  <Td>{teacher.status || "Inactive"}</Td>
                  <Td>{teacher.email || "notprovided@example.com"}</Td>
                  <Td>{teacher.coursesTaught || 0}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default AllTeachers;
  