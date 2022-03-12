import React, { useState, useEffect } from "react";
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
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import {
  MenuIcon,
  ShoppingCartIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline";
import { LoginIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useGetCategories } from "../../hooks/useGetCategories";
import ClientOnly from "../../helper/ClientOnly";
import { useMediaQuery } from "@chakra-ui/react";
import Loader from "../Loader/Loader";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownData, setdropdownData] = useState([{ category: "" }]);

  const [matches] = useMediaQuery("(max-width: 478px)");

  const { mode } = props;
  const dispatch = useDispatch();
  const handleScreenMode = () => {
    // console.log(mode);
    dispatch({ type: "SCREEN_MODE", payload: { bool: !mode.bool } });
    toggleColorMode();
  };

  const data = useGetCategories({}) ?? [];
  console.log("hi i am navbar component", data);

  const handleCategoryDropdown = (category) => {
    // const data2 = useGetCategories({category})
    // console.log(data2)
    const fetchApi = async () => {
      try {
        // Fetch data from REST API
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );

        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          // console.log('hi',rawData);
          // const processedData = processJson(rawData);
          setdropdownData(rawData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };
    fetchApi();

    console.log(dropdownData);
    // setdropdownData(useGetCategories({category}))
    // console.log(dropdownData)
  };

  return (
    <>
      <ClientOnly>
        <Box key={"navbarContainerClass"} className="navbarContainerClass">
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
                <span
                  style={{ position: "absolute", right: "18px", top: "12px" }}
                >
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
                          src={
                            "https://avatars.dicebear.com/api/male/username.svg"
                          }
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
          <Flex
            gap={[5, 9, 12]}
            alignItems={"center"}
            className="sapce-x-3 p-2 pl-6 text-sm flex-grow bottomNav w-full"
            style={{ background: useColorModeValue("yellow", "#242F3E") }}
          >
            <Flex alignItems={"center"}>
              <MenuIcon className="h-4" />
              All
            </Flex>

            <Flex gap={[4, 8]}>
              {data.map((categorie, i) => {
                return (
                  <>
                    <Box
                      id="categoryListItemFetch"
                      key={i}
                      role={"group"}
                      position="relative"
                      onMouseEnter={() => {
                        handleCategoryDropdown(categorie);
                      }}
                    >
                      <Box
                        spacing={3}
                        fontSize={["10px", "14px"]}
                        className="flex relative group items-center w-max btmList"
                      >
                        {categorie}{" "}
                        <Box className="w-4 absolute -right-3 hidden -rotate-90 -translate-x-6 group-hover:rotate-0 group-hover:block group-hover:translate-x-1 transition-all">
                          <ArrowDownIcon />
                        </Box>
                      </Box>
                      <Box  
                      key={i}
                      zIndex={"tooltip"}
                        display={"none"}
                        transitionDelay={"0.5s"}
                        transition={"all"}
                        width={"max-content"}
                        padding="1rem"
                        _groupHover={{ display: "block" }}
                        position={"absolute"}
                        style={{
                          bottom:
                            dropdownData[0].category === categorie
                              ? `${
                                  dropdownData.length > 4 ? "-200px" : "-150px"
                                }`
                              : "-75px",
                        }}
                        left={[
                          i === 0
                            ? "0rem"
                            : i === data.length
                            ? "-8rem"
                            : "-4rem",
                          i === data.length ? "-4rem" : "0rem",
                        ]}
                        fontSize={["12px", "14px"]}
                        background={useColorModeValue("gray.300", "gray.900")}
                        border={2}
                        borderRadius={6}
                      >
                        <>
                          {dropdownData[0].category === categorie &&
                            dropdownData.length}{" "}
                          Items
                          <Divider />
                          {dropdownData[0].category !== categorie &&
                          <Flex className="mx-auto w-full p-2" alignItems={"center"}>
                          <Loader  border={10} />
                          </Flex>
                          }
                          <Box>
                            {dropdownData[0].category === categorie &&
                              dropdownData.map((item, i) => {
                                return (
                                  <>
                                    <Flex
                                      key={i}
                                      alignItems={"center"}
                                      justifyContent={"space-between"}
                                      gap={["0rem", "3rem"]}
                                    >
                                      <Box>
                                        {item.title.substring(
                                          0,
                                          matches ? 30 : item.title.length
                                        )}
                                        ...
                                      </Box>
                                      <Box>{item.price}</Box>
                                    </Flex>
                                    <Divider />
                                  </>
                                );
                              })}
                          </Box>
                          {dropdownData[0].category !== categorie &&
                            document
                              .getElementById("categoryListItemFetch")
                              ?.addEventListener(
                                onmouseenter,
                                handleCategoryDropdown
                              )}
                        </>
                      </Box>
                    </Box>
                  </>
                );
              })}
            </Flex>
          </Flex>
        </Box>
      </ClientOnly>
    </>
  );
};

export default Navbar;
