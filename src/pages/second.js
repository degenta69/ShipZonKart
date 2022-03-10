import { Box, Flex, List, ListItem, Stack } from '@chakra-ui/react'
import React from 'react'
import { NavbarContainer } from '../components/Navbar/Navbar.container'

export default function second(){
  return (
      <>
      <Box className='h-screen secondDiv'>
      <NavbarContainer/>
      <Box className='w-full'>  
         <Box>second</Box>
         <Box>second</Box>
      </Box>
      </Box>
      </>
  )
}