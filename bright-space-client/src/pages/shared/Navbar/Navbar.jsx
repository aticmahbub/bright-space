/**
 * Created By Hisam, 17/9/24
 */

import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Show, Spacer, useDisclosure } from "@chakra-ui/react";

import { Link, NavLink } from 'react-router-dom';
// import useRole from '../../../hooks/useRole';
import { useContext } from 'react';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

const {user, logOut} = useContext(AuthContext)
    console.log(user);

    const navLi = <>
        <NavLink to="/" className='mainMenu-style'>Home</NavLink>
        <NavLink to="/courses" className='mainMenu-style'>Courses</NavLink>
        <NavLink to="/classroom" className='mainMenu-style'>Classroom</NavLink>
        <NavLink to="/features" className='mainMenu-style'>Features</NavLink>
        <NavLink to="/about" className='mainMenu-style'>About</NavLink>
        <NavLink to="/contact" className='mainMenu-style'>Contact us</NavLink>
        <NavLink to="/blog" className='mainMenu-style'>Blog</NavLink>
        <NavLink to="/addCourse" className='mainMenu-style'>AddCourse</NavLink>
        <button></button>

    </>


    return (
        <Box px={{base: '2', lg: 8}} pt='5' bg='#F7F7F8'>
            <NavAdvertise />
            <Box px={{ base: 2, md: 7 }} py='4' w='full'>
                <Flex maxW='1596px' mx='auto' alignItems='center' gap={{ base: 1, md: 2 }}>
                    <Box display='flex' alignItems='center' gap={{ base: 2, md: 4 }}>
                        <Show below="md">
                            <Button
                                size={{ base: 'sm', md: 'md' }}
                                onClick={onOpen}
                                borderRadius='base'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerHeader>Menu</DrawerHeader>

                                    <DrawerBody>
                                        <Box display='flex' flexDir='column' gap='4'>
                                            {
                                                navItems.map((item, idx) => <Button key={idx} onClick={onClose} as={NavLink} to={item.path} colorScheme='primary' variant='outline' borderRadius='base' w='full'>{item.name}</Button>)
                                            }
                                        </Box>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Show>
                        <Heading size={{ base: 'md', md: 'lg' }} as={Link} to='/' textColor='primary.500'>Bright<span className=''>Space</span></Heading>
                    </Box>
                    <Spacer />
                    <Show above="lg">
                        <Box>
                            <Breadcrumb separator='' spacing='5'>
                                {
                                    navItems.map((item, idx) => <BreadcrumbItem key={idx}>
                                        {
                                            item.name !== 'Pages' ? <BreadcrumbLink as={NavLink} to={item.path} _hover={{ color: 'primary.500', textDecoration: 'none' }} _activeLink={{ color: 'primary.500', fontWeight: 'semibold' }}>{item.name}</BreadcrumbLink> : <Menu isOpen={isOpen} isLazy placement="bottom">
                                                <MenuButton onMouseEnter={onOpen} transition='all 0.001s' _hover={{ color: 'primary.500' }}>{item.name}</MenuButton>
                                                <MenuList onMouseLeave={onClose} mt='4' borderRadius='base'>
                                                    {
                                                        item.pages.map((page, idx) => <MenuItem key={idx} as={NavLink} _activeLink={{ color: 'primary.500' }} to={page.path}>{page.name}</MenuItem>)
                                                    }
                                                </MenuList>
                                            </Menu>
                                        }

                                    </BreadcrumbItem>)
                                }
                            </Breadcrumb>
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
            </Box>
        </Box>
    );

};

export default Navbar;