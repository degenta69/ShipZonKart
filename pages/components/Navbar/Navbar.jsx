import React from 'react'
import { useDispatch } from 'react-redux'

const Navbar = (props) => {
  const {mode} = props
  const dispatch = useDispatch();
  const handleScreenMode = ()=>{
    console.log(mode);
    dispatch({type:'SCREEN_MODE', payload:{bool:!mode.bool}})

  }
  return (
    <>
    <nav className={`flex h-10 items-center justify-around row-start-1 ${mode.bool?'bg-button_netflex':'bg-secondary'}`}>
      <div>
        <p>DipanshJiKi</p>
      </div>
      <div className='w-full justify-around flex '>
          <p>home</p>
          <p>about</p>
          <p>contact</p>
          <p>ping pong</p>
      </div>
      <div className='col-span-3'>
        <button onClick={handleScreenMode}>{mode.bool?'dark':'light'}</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar