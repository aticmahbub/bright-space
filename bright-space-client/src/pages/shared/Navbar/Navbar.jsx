import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../../assets/bright-space-logo.svg";
import { Link, NavLink } from "react-router-dom";
// import useRole from '../../../hooks/useRole';
import { useRef } from "react";
// import { AuthContext } from '../../../providers/AuthProvider';
import { HamburgerIcon } from "@chakra-ui/icons";
import NavAdvertise from "./NavAdvertise";
import useAuth from "../../../hooks/useAuth";
import useEnrolls from "../../../hooks/useEnrolls";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { user, logOut } = useAuth();
  const [enrolls] = useEnrolls();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Courses",
      path: "/allCourses",
    },
    {
      name: "Classroom",
      path: "/classroom",
    },
    {
      name: "Pages",
      pages: [
        {
          name: "Features",
          path: "/features",
        },
        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Q & A",
          path: "/qna",
        },
      ],
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Support",
      path: "/support",
    },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <Box px={{ base: "2", lg: 8 }} pt="5" bg="#F7F7F8">
      <NavAdvertise />
      <Box
        px={{ base: 0, md: 7 }}
        py="5"
        w="full"
        borderBottom="1px"
        borderColor="#F1F1F3"
      >
        <Flex
          maxW="1596px"
          mx="auto"
          alignItems="center"
          gap={{ base: 1, md: 2 }}
        >
          <Box display="flex" alignItems="center" gap={{ base: 3, md: 5 }}>
            <Show below="md">
              <Button
                size={{ base: "sm", md: "md" }}
                onClick={onOpen}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Menu</DrawerHeader>

                  <DrawerBody>
                    <Box display="flex" flexDir="column" gap="4">
                      {navItems.map((item, idx) => (
                        <Button
                          key={idx}
                          onClick={onClose}
                          as={NavLink}
                          to={item.path}
                          colorScheme="primary"
                          variant="outline"
                          borderRadius="base"
                          w="full"
                        >
                          {item.name}
                        </Button>
                      ))}
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Show>
            <Image w={{ base: 5, md: 7 }} src={logo} alt="bright space logo" />
            {/* <Heading size={{ base: 'md', md: 'lg' }} as={Link} to='/' textColor='primary.500'>Bright<span className=''>Space</span></Heading> */}

            <Spacer />
            <Show above="lg">
              <Box>
                <Breadcrumb separator="" spacing="5">
                  {navItems.map((item, idx) => (
                    <BreadcrumbItem key={idx}>
                      {item.name !== "Pages" ? (
                        <BreadcrumbLink
                          as={NavLink}
                          to={item.path}
                          _hover={{
                            color: "primary.500",
                            textDecoration: "none",
                          }}
                          _activeLink={{
                            color: "primary.500",
                            fontWeight: "semibold",
                          }}
                        >
                          {item.name}
                        </BreadcrumbLink>
                      ) : (
                        <Menu isOpen={isOpen} isLazy placement="bottom">
                          <MenuButton
                            onMouseEnter={onOpen}
                            transition="all 0.001s"
                            _hover={{ color: "primary.500" }}
                          >
                            {item.name}
                          </MenuButton>
                          <MenuList
                            onMouseLeave={onClose}
                            mt="4"
                            borderRadius="base"
                          >
                            {item.pages.map((page, idx) => (
                              <MenuItem
                                key={idx}
                                as={NavLink}
                                _activeLink={{ color: "primary.500" }}
                                to={page.path}
                              >
                                {page.name}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      )}
                    </BreadcrumbItem>
                  ))}
                </Breadcrumb>
              </Box>
            </Show>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            {user ? (
              <Box>
                <Menu placement="bottom-end" isLazy>
                  <MenuButton
                    as={Avatar}
                    src={user?.photoURL}
                    cursor="pointer"
                    size={{ base: "sm", md: "md" }}
                  />
                  <MenuList borderRadius="none" mt={5}>
                    <MenuGroup title={user?.displayName || "Unknown User"}>
                      <MenuItem as={Link} to="/dashboard">
                        Dashboard
                      </MenuItem>
                      <MenuItem as={Link} to="dashboard/enrolledCourses">
                        Enrolled: {enrolls.length}
                      </MenuItem>
                      <MenuItem textColor="primary.500" onClick={handleLogout}>
                        Logout
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            ) : (
              <ButtonGroup gap={{ base: 1, md: 2 }}>
                <Button
                  as={Link}
                  to="/register"
                  colorScheme="primary"
                  variant="outline"
                  size={{ base: "sm", md: "md" }}
                >
                  Sign Up
                </Button>
                <Button
                  as={Link}
                  to="/login"
                  colorScheme="primary"
                  size={{ base: "sm", md: "md" }}
                >
                  Login
                </Button>
              </ButtonGroup>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
