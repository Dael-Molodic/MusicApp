import "./NavBar.css"
import NavBarButton from "./NavBarButton/NavBarButton"

const navBarButtoms = [
  {
    txt: "Home",
    img: "https://cdn-icons-png.flaticon.com/512/25/25694.png"
  },
  {
    txt: "Search",
    img: "https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
  },
  {
    txt: "Your Collection",
    img: "https://static.thenounproject.com/png/2221165-200.png"
  }
]

function NavBar() {
  return (
    <div className="NavBar">

      <div className="logo-container">
        <div className="logo-img"></div>
        <div className="logo-name">musical</div>
      </div>

      {navBarButtoms.map(v => <NavBarButton key= {v.txt} button= {v}/>)}

    </div>
  )
}

export default NavBar
