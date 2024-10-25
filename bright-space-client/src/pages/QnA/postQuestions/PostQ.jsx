import { useContext, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Textarea,
} from "@chakra-ui/react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";

const PostQ = () => {
  const axiosPublic = useAxiosPublic();

  const { user } = useContext(AuthContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handlePostClick = async () => {
    const questionInfo = {
      name: name,
      question: question,
      upVotes: 0,
      downVotes: 0,
      voters: [],
      answers: [],
      UserEmail: user?.email,
    };

    try {
      const response = await axiosPublic.post("/questions", questionInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("successfully sended", response.data);
    } catch (error) {
      console.log(error);
    }

    // Optionally reset the form
    setName("");
    setQuestion("");
    onClose(); // Close the modal after posting
  };

  return (
    <div>
      <button
        className="w-full bg-[#f7ab3f] text-white font-medium py-2 rounded-md hover:bg-[#FF9500]"
        onClick={onOpen}
      >
        Ask A Question
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You can post any type of questions</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <Input
                required
                ref={initialRef}
                placeholder="write your name here"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Your Question</FormLabel>
              <Textarea
                required
                placeholder="write your question here"
                value={question}
                onChange={(e) => setQuestion(e.target.value)} // Update question state
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlePostClick}>
              Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PostQ;
