import { Navigate, Route, Routes } from "react-router-dom"
import SearchInput from "../../Pages/Search/Search_input/SearchInput"
import "./Header.css"
import HeaderButton from "./HeaderButton/HeaderButton"

function Header() {
  return (<>
    <div className="header">
      <Routes>
        <Route path= "/Search" element= {<SearchInput />} />
      </Routes>
      <div className="buttoms-container">
        <HeaderButton action= "Sing up"/>
        <HeaderButton action= "Log in"/>
      </div>
    </div>
  </>)
}

export default Header
