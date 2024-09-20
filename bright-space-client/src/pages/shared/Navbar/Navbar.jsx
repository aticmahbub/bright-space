/**
 * Created By Hisam, 17/9/24
 */

import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Button,
    ButtonGroup,
    // Menu,
    // MenuButton,
    // MenuList,
    // MenuItem
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    // ChevronDownIcon 
} from '@chakra-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import useRole from '../../../hooks/useRole';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const user = useRole()
    console.log(user);

    const navLi = <>
        {/* Dropdown Menu */}
        {/* <Menu>
            <MenuButton className='mainMenu-style'>
                <NavLink href="#">Home <ChevronDownIcon h={6} w={6} /></NavLink>
            </MenuButton>
            <MenuList className='mt-7'>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>
                    <NavLink>Home Class</NavLink>
                </MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>
                    <NavLink>Home Class</NavLink>
                </MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 3</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 4</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 5</MenuItem>
            </MenuList>
        </Menu> */}
        {/* <Menu>
            <MenuButton className='mainMenu-style'>
                <NavLink href="#">Course <ChevronDownIcon h={6} w={6} /></NavLink>
            </MenuButton>
            <MenuList className='mt-7'>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 2</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 3</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 4</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 5</MenuItem>
            </MenuList>
        </Menu> */}
        {/* <Menu>
            <MenuButton className='mainMenu-style'>
                <NavLink href="#">Pages <ChevronDownIcon h={6} w={6} /></NavLink>
            </MenuButton>
            <MenuList className='mt-7'>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 2</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 3</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 4</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 5</MenuItem>
            </MenuList>
        </Menu> */}
        {/* <Menu>
            <MenuButton className='mainMenu-style'>
                <NavLink href="#">Blog <ChevronDownIcon h={6} w={6} /></NavLink>
            </MenuButton>
            <MenuList className='mt-7'>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 2</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 3</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 4</MenuItem>
                <MenuItem px={6} py={3} className='dropdown-menuItem-style'>Home Class 5</MenuItem>
            </MenuList>
        </Menu> */}
        <NavLink to="/" className='mainMenu-style'>Home</NavLink>
        <NavLink to="/classes" className='mainMenu-style'>Classes</NavLink>
        <NavLink to="/features" className='mainMenu-style'>Features</NavLink>
        <NavLink to="/about" className='mainMenu-style'>About</NavLink>
        <NavLink to="/contact" className='mainMenu-style'>Contact us</NavLink>
        <NavLink to="/blog" className='mainMenu-style'>Blog</NavLink>

    </>

    return (
        <Box px='4' py='7'>
            <Box className='container mx-auto'>
                <Flex alignItems="center" justifyContent="space-between">
                    <HStack spacing={8} alignItems="center" className='flex justify-between w-full'>
                        {/* Logo or Brand Name */}
                        <Box color="white" fontWeight="bold" fontSize="xl">
                            <Box textColor='primary.500' fontSize='3xl'>
                                Bright<span className='text-[#2A3290]'>Space</span>
                            </Box>
                        </Box>
                        {/* Links for larger screens */}
                        <HStack
                            as="nav"
                            textColor='gray'
                            spacing={14}
                            display={{ base: 'none', xl: 'flex' }}
                            className='md:text-base lg:text-lg'
                        >
                            {navLi}
                        </HStack>
                        {/* Login Button */}
                        <Box className='space-x-4 text-lg font-semibold' display={{ base: 'none', xl: 'block' }}>
                            {user ? <>
                                <button className='
                            bg-[#5F2DED] text-white rounded-md px-4 py-2 border-[#5F2DED] border transition duration-300
                            hover:bg-transparent hover:text-[#5F2DED]
                            '><a href="dashboard">Dashboard</a></button>
                                <button
                                    className='
                            hover:bg-[#5F2DED] hover:text-white rounded-md px-4 py-2 border-[#6f7b8455] border transition duration-300
                            bg-transparent text-[#1f2122]
                            '><a href="userProfile">Profile</a></button>
                            </> : <>
                                <ButtonGroup gap={{ base: 1, md: 2 }}>
                                    <Button as={Link} to='/login' colorScheme='primary' variant='outline' borderRadius='none' size={{ base: 'sm', md: 'md' }}>Log In</Button>
                                    <Button as={Link} to='/registration' colorScheme='secondary' borderRadius='none' size={{ base: 'sm', md: 'md' }}>Get Started Free</Button>
                                </ButtonGroup>
                                {/* <button
                                    className='
                            hover:bg-[#5F2DED] hover:text-white rounded-md px-4 py-2 border-[#6f7b8455] border transition duration-300
                            bg-transparent text-[#1f2122]
                            '><a href="login">Login</a></button>
                                <button className='
                            bg-[#5F2DED] text-white rounded-md px-4 py-2 border-[#5F2DED] border transition duration-300
                            hover:bg-transparent hover:text-[#5F2DED]
                            '><a href="registration">Get Started Free</a></button> */}
                            </>}
                        </Box>
                    </HStack>

                    {/* Hamburger Icon for mobile screens */}
                    <IconButton
                        size="lg"
                        rounded='none'
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ xl: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {/* Mobile Menu */}
                {isOpen ? (
                    <Box pb={4} display={{ lg: 'none' }}>
                        <Stack as="nav" spacing={4} className='text-lg font-semibold text-[#6F7B84]'>
                            {navLi}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </Box>
    );

};

export default Navbar;