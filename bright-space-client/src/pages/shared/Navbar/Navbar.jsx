/**
 * Created By Hisam, 17/9/24
 */

import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Portal, Show, Spacer, useDisclosure } from "@chakra-ui/react";

import { Link, NavLink } from 'react-router-dom';
// import useRole from '../../../hooks/useRole';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { HamburgerIcon } from "@chakra-ui/icons";


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();


    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const navLi = <>
        <NavLink to="/" className='mainMenu-style'>Home</NavLink>
        <NavLink to="/allCourses" className='mainMenu-style'>Courses</NavLink>
        <NavLink to="/classroom" className='mainMenu-style'>Classroom</NavLink>
        <NavLink to="/features" className='mainMenu-style'>Features</NavLink>
        <NavLink to="/about" className='mainMenu-style'>About</NavLink>
        <NavLink to="/contact" className='mainMenu-style'>Contact us</NavLink>
        <NavLink to="/blog" className='mainMenu-style'>Blog</NavLink>
        <NavLink to="/addCourse" className='mainMenu-style'>AddCourse</NavLink>
        <button></button>
    </>

    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Courses',
            path: '/allCourses'
        },
        {
            name: 'Classroom',
            path: '/classroom'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
    ]

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <Box bg='#F7F7F8' px={{ base: 2, md: 7 }} py={7} w='full'>
            <Flex alignItems='center' gap={{ base: 1, md: 2 }}>
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
                                    <Button as={Link} to='/register' colorScheme='primary' variant='outline' borderRadius='base' w='full'>Home</Button>
                                </DrawerBody>
                                <Button as={Link} to='/register' colorScheme='primary' variant='outline' borderRadius='base' display={{ base: 'none', md: 'flex' }} size={{ base: 'sm', md: 'md' }}>Sign Up</Button>
                                <DrawerFooter>
                                    <Button variant='outline' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme='blue'>Save</Button>
                                </DrawerFooter>
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
                                navItems.map((item, idx) => <BreadcrumbItem key={idx} _hover={{ color: 'primary.500' }}>
                                    <BreadcrumbLink as={NavLink} to={item.path} _activeLink={{ color: 'primary.500', fontWeight: 'semibold' }}>{item.name}</BreadcrumbLink>
                                </BreadcrumbItem>)
                            }
                            <BreadcrumbItem _hover={{ color: 'primary.500' }}>
                                <Menu isOpen={isOpen} onClose={onClose} isLazy placement="auto">
                                    <MenuButton onMouseEnter={onOpen} transition='all 0.001s'>Pages</MenuButton>
                                    <Portal>
                                        <MenuList onMouseLeave={onClose} mt={8} borderRadius='base'>
                                            <MenuItem as={NavLink} to='/features'>Features</MenuItem>
                                            <MenuItem>Events</MenuItem>
                                        </MenuList>
                                    </Portal>
                                </Menu>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                </Show>
                <Spacer />
                <Box display='flex' alignItems='center'>
                    {
                        user ? <Box>
                            <Menu placement="bottom-end" isLazy>
                                <MenuButton as={Avatar} src={user?.photoURL} cursor='pointer' size={{ base: 'sm', md: 'md' }} />
                                <MenuList borderRadius='none' mt={5}>
                                    <MenuGroup title={user?.displayName || 'Unknown User'}>
                                        <MenuItem as={Link} to='/dashboard/profile'>Dashboard</MenuItem>
                                        <MenuItem>FAQ</MenuItem>
                                        <MenuItem textColor='primary.500' onClick={handleLogout}>Logout</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Box> : <ButtonGroup gap={{ base: 1, md: 2 }}>
                            <Button as={Link} to='/register' colorScheme='primary' variant='outline' borderRadius='base' display={{ base: 'none', md: 'flex' }} size={{ base: 'sm', md: 'md' }}>Sign Up</Button>
                            <Button as={Link} to='/login' colorScheme='primary' borderRadius='base' size={{ base: 'sm', md: 'md' }}>Login</Button>
                        </ButtonGroup>
                    }
                </Box>
            </Flex>
        </Box>
    );

};

export default Navbar;