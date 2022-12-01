import { Navigate, Route, Routes } from "react-router-dom";
import "./Layout.css";
import Main from "./Main/Main";
import Header from "./Header/Header";
import NavBar from "./Nav_bar/NavBar";
import Footer from "./Footer/Footer";
import Login from "../Pages/Login/Login";


function Layout() {
  return (<>

    <Routes>

      <Route path= "/*" element= {
        <div className="layout-container">
          <Header/>
          <NavBar/>
          <Main/>
          <Footer/>
        </div>
      } />

      <Route path= "/Log in" element= {<Login/>} />
      <Route path= "*" element= {<Navigate to="/" />} />

    </Routes>

  </>)
}

export default Layout
