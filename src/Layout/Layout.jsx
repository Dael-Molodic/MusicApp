import { Navigate, Route, Routes } from "react-router-dom";
import "./Layout.css";
import Main from "./Main/Main";
import Header from "./Header/Header";
import NavBar from "./Nav_bar/NavBar";
import Footer from "./Footer/Footer";
import UserConnection from "../Pages/UserConnection/UserConnection";


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

      <Route path= "/Conect/*" element= {<UserConnection/>} />
      <Route path= "*" element= {<Navigate to="/" />} />

    </Routes>

  </>)
}

export default Layout
