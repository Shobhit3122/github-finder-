import React from 'react'
import DropDown from './component/Pages/DropDown'
import Login from './component/Pages/Login'
import TopNavbar from './component/Pages/TopNavbar'
import ContextApi from './Context/ContextApi'
import { BrowserRouter as Router, Routes , Route, } from 'react-router-dom'

const App = () => {
  return (
   
      <ContextApi>
        <TopNavbar />
        <DropDown />

        {/* <Login/> */}
      </ContextApi>

  );
}

export default App