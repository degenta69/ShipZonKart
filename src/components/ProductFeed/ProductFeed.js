import React, { useEffect } from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Grid,
    SimpleGrid,
  } from '@chakra-ui/react';
import Loader from '../Loader/Loader'

const ProductFeed = ({products}) => {

    useEffect(() => {
        console.log(products)
    }, []);

  return (
    <>
      <SimpleGrid columns={[1,2,3]} columnGap={10} rowGap={[15,10]} zIndex={'overlay'}>
        {products.map(
          ({ title, id, price, category, description, image }, i) => {
            return (
              <>
                  <Box
                  key={i}
                    role={"group"}
                    p={6}
                    maxW={"330px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    pos={"relative"}
                    zIndex={1}
                  >
                    <Box
                      rounded={"lg"}
                      mt={-12}
                      pos={"relative"}
                      height={"230px"}
                      className='style'
                      bg={useColorModeValue('white','#1A202C')}
                      _after={{
                        transition: "all .3s ease",
                        content: '""',
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: "blur(15px)",
                        zIndex: -1,
                      }}
                      _groupHover={{
                        _after: {
                          filter: "blur(20px)",
                        },
                      }}
                    >
                      <Image
                        rounded={"lg"}
                        height={230}
                        width={282}
                        objectFit={"cover"}
                        src={image}
                      />
                    </Box>
                    <Stack pt={10} align={"center"}>
                      <Text
                        color={"gray.500"}
                        fontSize={"sm"}
                        textTransform={"uppercase"}
                      >
                        {category}
                      </Text>
                      <Heading
                        fontSize={"2xl"}
                        fontFamily={"body"}
                        fontWeight={500}
                        textAlign={'center'}
                      >
                        {title}
                      </Heading>
                      <Stack direction={"row"} align={"center"}>
                        <Text fontWeight={800} fontSize={"xl"}>
                          ${price}
                        </Text>
                        <Text
                          textDecoration={"line-through"}
                          color={"gray.600"}
                        >
                          ${(price + 20).toString()}
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
              </>
            );
          }
        )}
      </SimpleGrid>
    </>
  );
}

export default ProductFeed