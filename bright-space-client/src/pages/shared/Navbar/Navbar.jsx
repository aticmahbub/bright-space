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
    Text,
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
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        <NavLink href="#" className='mainMenu-style'>Home</NavLink>
        <NavLink href="#" className='mainMenu-style'>About</NavLink>
        <NavLink href="#" className='mainMenu-style'>Features</NavLink>
    </>

    return (
        <Box className='shadow-2xl shadow-[#0000001c]' py={5}>
            <Box px={4} className='container mx-auto'>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <HStack spacing={8} alignItems="center" className='flex justify-between w-full'>
                        {/* Logo or Brand Name */}
                        <Box color="white" fontWeight="bold" fontSize="xl">
                            <Text className='text-3xl'>
                                <span className='text-[#F2277E]'>Bright</span>
                                <span className='text-[#612FEE]'>Space</span>
                            </Text>
                        </Box>
                        {/* Links for larger screens */}
                        <HStack
                            as="nav"
                            spacing={14}
                            display={{ base: 'none', lg: 'flex' }}
                            className='md:text-base lg:text-lg font-semibold text-[#6F7B84]'
                        >
                            {navLi}
                        </HStack>
                        {/* Login Button */}
                        <Box className='space-x-4 text-lg font-semibold' display={{ base: 'none', lg: 'flex' }}>
                            <button className='
                            hover:bg-[#5F2DED] hover:text-white rounded-md px-4 py-2 border-[#6f7b8455] border transition duration-300
                            bg-transparent text-[#1f2122]
                            '>Login</button>
                            <button className='
                            bg-[#5F2DED] text-white rounded-md px-4 py-2 border-[#5F2DED] border transition duration-300
                            hover:bg-transparent hover:text-[#5F2DED]
                            '>Get Started Free</button>
                        </Box>
                    </HStack>

                    {/* Hamburger Icon for mobile screens */}
                    <IconButton
                        size="lg"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ lg: 'none' }}
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