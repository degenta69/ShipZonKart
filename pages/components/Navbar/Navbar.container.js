import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

export const NavbarContainer = () => {
    const mode = useSelector(state => state.screenModeReducer)
console.log(mode);
  return (
    <><Navbar mode={mode}/></>
  )
}
