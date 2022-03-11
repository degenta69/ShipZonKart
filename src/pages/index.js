import React from "react";
import { NavbarContainer } from "../components/Navbar/Navbar.container";
import {
  Box, List, ListItem, Stack, Tab, TabList,
} from "@chakra-ui/react";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Box className="h-screen">
        <NavbarContainer/>
        <Box className="max-w-screen-2xl mx-auto">
          <Carousel />
        </Box>
      </Box>
    </>
  );
};

export default Home;
