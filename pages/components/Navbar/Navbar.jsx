import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
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
} from '@chakra-ui/react';
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Navbar = (props) => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const {mode} = props
  const dispatch = useDispatch();
  const handleScreenMode = ()=>{
    console.log(mode);
    dispatch({type:'SCREEN_MODE', payload:{bool:!mode.bool}})
    toggleColorMode();
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.900')} className='fixed w-full' px={4} py={1.5}>
        <Flex h={16} alignItems={'center'} gap={5} justifyContent={'space-between'}>
          <Box className='relative cursor-pointer sm:flex-grow-0'>
            <p className='logo-font'>ShopiZoneKart</p>
            <span  style={{position:'absolute',right:'18px',top:'12px'}}>
            <Image src='/logo-only-carts.png' objectFit='contain' className='imageLogo' width='50' height='50'/>
            </span>
            </Box>

            <Box sx={{zIndex:'1'}} className=' bg-yellow-400 cursor-pointer gap-4 pr-4 hover:bg-yellow-500 rounded rounded-l-lg hidden flex-grow items-center sm:flex '>
            <Input sx={{background:useColorModeValue('white', 'gray.900'), borderRightRadius:'0',zIndex:'3'}} variant='outline' placeholder='Filled' className='bg-white rounded-l-md rounded-r-0 focus:outline-none '/>
            <SearchIcon className='' />
            </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={handleScreenMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
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
    </>
  )
}

export default Navbar