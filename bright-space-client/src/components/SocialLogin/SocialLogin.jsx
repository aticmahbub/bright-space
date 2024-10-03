import { Button, Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ googleLogin }) => {
  return (
    <div className='space-y-5'>
      <Button onClick={googleLogin} colorScheme='gray' w='full' gap='2'>
        <Icon fontSize='2xl' as={FcGoogle} />
        <span>Sign Up with Google</span>
      </Button>
    </div>
  );
};

export default SocialLogin;