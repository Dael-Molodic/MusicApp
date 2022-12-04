import { useNavigate } from "react-router-dom";
import "./HeaderButton.css"

function HeaderButton( { action } ) {

  const navigate = useNavigate();

  return (
    <div className={`${action} button`} onClick = {() => navigate(`/Conect/${action}`)}>
      {action.replace("_", " ")}
    </div>
  )
}

export default HeaderButton
