import { NavLink, useNavigate } from "react-router-dom"
import "./NavBarButton.css"

function NavBarButton({ button }) {

  return (
    <NavLink className="button" to={("/" + button.txt)} >
        <img src={button.img} alt={`${button.txt}-button`} className="icon" />
        <div className="button-name">{button.txt}</div>
    </NavLink>
  )
}

export default NavBarButton
