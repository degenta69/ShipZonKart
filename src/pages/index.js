import React from "react";
import { NavbarContainer } from "../components/Navbar/Navbar.container";
import {
  Box, List, ListItem, Stack, Tab, TabList, useColorModeValue,
} from "@chakra-ui/react";
import Carousel from "../components/Carousel/Carousel";
import ProductFeed from "../components/ProductFeed/ProductFeed";

const Home = ({products})=>{
  // console.log('products',products)
  return (
    <>
      <Box className="h-screen">
        <NavbarContainer/>
        <main className="max-w-screen-lg flex flex-col gap-9 max-h-96 mx-auto">
          <Carousel />

          {/* <div className={`absolute z-[1] w-full h-32 bg-gradient-to-t ${useColorModeValue('from-gray-100','from-[#1A202C]')}  to-transparent bottom-0 z-20`}/> */}

          <ProductFeed products={products} />
        </main>
      </Box>
    </>
  );
};


export async function getServerSideProps (context) {
  // const products = await fetch("https://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );
  const products = await fetch("https://fakestoreapi.com/products")
  const parsed = await products.json()
  // console.log(parsed)
  return {
    props: {
      products: parsed,
    },
  };

}

export default Home