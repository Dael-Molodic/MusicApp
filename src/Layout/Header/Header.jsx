import { Navigate, Route, Routes } from "react-router-dom"
import "./Header.css"
import HeaderButton from "./HeaderButton/HeaderButton"
import SearchInput from "./Search_input/SearchInput"

function Header() {
  return (<>
    <div className="header">
      <Routes>
        <Route path= "/Search" element= {<SearchInput />} />
      </Routes>
      <div className="buttoms-container">
        <HeaderButton action= "Sign_up"/>
        <HeaderButton action= "Log_in"/>
      </div>
    </div>
  </>)
}

export default Header
