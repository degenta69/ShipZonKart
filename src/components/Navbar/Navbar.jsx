import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { LoginIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import {useGetCategories} from '../../hooks/useGetCategories'
import ClientOnly from "../../helper/ClientOnly";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mode } = props;
  const dispatch = useDispatch();
  const handleScreenMode = () => {
    // console.log(mode);
    dispatch({ type: "SCREEN_MODE", payload: { bool: !mode.bool } });
    toggleColorMode();
  };

  const data = useGetCategories({})??[]
  console.log('hi i am navbar component',data)

  return (
    <>
    <ClientOnly>
    <Box key={'navbarContainerClass'} className="navbarContainerClass">
      <Box
        bg={useColorModeValue("gray.200", "gray.900")}
        className="w-full MAXmd:p-0"
        px={4}
        py={1.5}
      >
        <Flex
          h={16}
          alignItems={"center"}
          className="MAXmd:gap-0 gap-16"
          justifyContent={"space-between"}
        >
          <Box className="relative cursor-pointer sm:flex-grow-0">
            <p className="logo-font ">ShopiZoneKart</p>
            <span style={{ position: "absolute", right: "18px", top: "12px" }}>
              <Image
                src="/logo-only-carts.png"
                objectFit="contain"
                className="imageLogo"
                width="50"
                height="50"
              />
            </span>
          </Box>

          <Box
            sx={{ zIndex: "1" }}
            className=" bg-yellow-400 cursor-pointer gap-4 pr-4 hover:bg-yellow-500 rounded rounded-l-lg MAXmd:hidden flex-grow items-center sm:flex focus:outline-none"
          >
            <Input
              sx={{
                background: useColorModeValue("white", "gray.900"),
                borderRightRadius: "0",
                zIndex: "3",
              }}
              variant="outline"
              placeholder="Filled"
              className="bg-white rounded-l-md rounded-r-0 focus:outline-none "
            />
            <SearchIcon className="" />
          </Box>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <Stack
              alignItems={"center"}
              direction={"row"}
              spacing={[0.5, 7]}
              className="ml-7 MAXmd:ml-0"
            >
              <Button size="sm" onClick={handleScreenMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <Button size="sm">
                    <LoginIcon className="h-7 p-1" /> Login
                  </Button>
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem>
                    <Flex
                      justifyContent={"space-between"}
                      className="flex-grow"
                      alignItems={"center"}
                      gap={5}
                    >
                      <p>New Coustmer</p>{" "}
                      <Button
                        size={"sm"}
                        backgroundColor="transparent"
                        className="border-0 underline "
                      >
                        SignUp
                      </Button>
                    </Flex>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Flex
                      justifyContent={"center"}
                      className="flex-grow"
                      alignItems={"center"}
                      gap={7}
                    >
                      <UserCircleIcon className="h-7" />{" "}
                      <Button
                        size={"sm"}
                        backgroundColor="transparent"
                        className="border-0 underline "
                      >
                        My Profile
                      </Button>
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  className="relative"
                >
                  <span
                    style={{
                      background: useColorModeValue("yellow", "#ee9800"),
                      lineHeight: "1",
                    }}
                    className="absolute top-0 right-0 text-center font-bold rounded-full h-4 w-4 "
                  >
                    0
                  </span>
                  <ShoppingCartIcon className="h-10 p-1" />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
          <Flex gap={[5,9,12]} alignItems={"center"} className="sapce-x-3 p-2 pl-6 text-sm flex-grow bottomNav w-full" style={{background:useColorModeValue('yellow','#242F3E')}}>
                    <Flex alignItems={"center"}>
                      <MenuIcon className="h-4"/>All
                    </Flex>
                    <Flex gap={[2,4,8]}>
                    {data.map((categorie)=>{
                      return(
                        <Box spacing={3} className="btmList">{categorie}</Box>
                        )
                      })}
                    </Flex>
        </Flex>
      </Box>
      </ClientOnly>
    </>
  );
};

export default Navbar;
