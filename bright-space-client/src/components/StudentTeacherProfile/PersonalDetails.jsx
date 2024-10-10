import {
  Box,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

const PersonalDetails = ({ update }) => {
  return (
    <Form>
      <>
        <Grid
          templateColumns="repeat(3, 1fr)"
          borderBottom="1px solid"
          borderBottomColor="primary.100"
          py={4}
          gap={12}
        >
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">First Name</FormLabel>
            <Input type="text" w="full" defaultValue="John" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Last Name</FormLabel>
            <Input type="text" w="full" defaultValue="Doe" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Occupation</FormLabel>
            <Input type="text" w="full" defaultValue="Engineer" disabled={!update} />
          </Box>
        </Grid>

        <Grid
          templateColumns="repeat(3, 1fr)"
          borderBottom="1px solid"
          borderBottomColor="primary.100"
          py={4}
          gap={12}
        >
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Father's Name</FormLabel>
            <Input type="text" w="full" defaultValue="Mr. Doe" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="130px">Mother's Name</FormLabel>
            <Input type="text" w="full" defaultValue="Mrs. Doe" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Date of Birth</FormLabel>
            <Input type="date" w="full" defaultValue="1990-01-01" disabled={!update} />
          </Box>
        </Grid>

        <Grid
          templateColumns="repeat(3, 1fr)"
          borderBottom="1px solid"
          borderBottomColor="primary.100"
          py={4}
          gap={12}
        >
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Gender</FormLabel>
            <RadioGroup defaultValue="1" isDisabled={!update}>
              <Stack direction="row">
                <Radio value="1">Male</Radio>
                <Radio value="2">Female</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Religion</FormLabel>
            <Input type="text" w="full" defaultValue="Christian" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Email</FormLabel>
            <Input type="email" w="full" defaultValue="john.doe@example.com" disabled={!update} />
          </Box>
        </Grid>

        <Grid
          templateColumns="repeat(3, 1fr)"
          borderBottom="1px solid"
          borderBottomColor="primary.100"
          py={4}
          gap={12}
        >
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Admission Roll</FormLabel>
            <Input type="text" w="full" defaultValue="12345" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Class</FormLabel>
            <Input type="text" w="full" defaultValue="12" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Subject</FormLabel>
            <Input type="text" w="full" defaultValue="Mathematics" disabled={!update} />
          </Box>
        </Grid>

        <Grid
          templateColumns="repeat(3, 1fr)"
          borderBottom="1px solid"
          borderBottomColor="primary.100"
          py={4}
          gap={12}
        >
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Roll</FormLabel>
            <Input type="text" w="full" defaultValue="67890" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Address</FormLabel>
            <Input type="text" w="full" defaultValue="123 Street Name" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">Random</FormLabel>
            <Input type="text" w="full" defaultValue="Some Value" disabled={!update} />
          </Box>
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" py={4} gap={12}>
          <Box display="flex" alignItems="center" w="full">
            <FormLabel minW="120px">ID</FormLabel>
            <Input type="text" w="full" defaultValue="A1234" disabled={!update} />
          </Box>
          <Box display="flex" alignItems="center" gridColumn="span 2">
            <FormLabel minW="120px">Civil Status</FormLabel>
            <Select variant="outline" placeholder="Select Status" isDisabled={!update}>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </Select>
          </Box>
        </Grid>
      </>
    </Form>
  );
};

export default PersonalDetails;
