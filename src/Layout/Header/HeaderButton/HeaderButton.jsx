import { useNavigate } from "react-router-dom";
import "./HeaderButton.css"

function HeaderButton( { action } ) {

  const navigate = useNavigate();

  return (
    <div className={`${action.replace(" ", "-")} button`} onClick = {() => navigate("/Log in")}>
      {action}
    </div>
  )
}

export default HeaderButton
