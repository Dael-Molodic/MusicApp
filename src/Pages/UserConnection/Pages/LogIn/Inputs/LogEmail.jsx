import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function LogEmail({ setEmail }) {

  return (<>
  
    <div className= "input-container">
      
      <FontAwesomeIcon icon={faEnvelope} />
      <input
        type="text"
        id="email"
        autoComplete="off"
        placeholder="Email"
        required
        aria-invalid={true ? "false" : "true"} // add validtion
        onInput={(e) => setEmail(e.target.value)}
      />

    </div>

</>)
}

export default LogEmail
