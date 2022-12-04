import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function LogPassword({ setPassword }) {

  return (<>

    <div className= "input-container">
      <FontAwesomeIcon icon={faLock} />
      <input
        type="password"
        id="password"
        aria-invalid={true ? "false" : "true"} // add validtion
        required
        placeholder="Password"
        onInput={(e) => setPassword(e.target.value)}
      />
    </div>

  </>)
}

export default LogPassword
