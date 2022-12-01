import { Navigate, Route, Routes } from "react-router-dom";
import "./Main.css"
import Home from "../../Pages/Home/Home.jsx"
import Search from "../../Pages/Search/Search.jsx"


function Main() {
  return (<>
    <main className="main">
      <Routes>
        <Route path= "/Home" element= {<Home/>} />
        <Route path= "/Search" element= {<Search/>} />
        <Route path= "*" element= {<Navigate to="/Home" />} />
      </Routes>

    </main>
  </>)
}

export default Main
