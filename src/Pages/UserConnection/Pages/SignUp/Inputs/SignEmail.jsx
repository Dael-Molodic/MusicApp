import { faCheck, faTimes, faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function SignEmail({ emailManager }) {

    const {
        email,
        setEmail,
        validEmail,
        emailFocus,
        setEmailFocus
    } = emailManager;

    return (<>
  
        <div className={emailFocus && email && !validEmail ? "input-container no-margin" : "input-container"}>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="text"
            id="email"
            autoComplete="off"
            placeholder="Email"
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
            onInput={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <span className={validEmail || !email ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>  
          <span className={validEmail ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>

        </div>
        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"} >
          <FontAwesomeIcon icon={faInfoCircle} className = "faInfoCircle"/>
          a valid email address with the @ symbol.
        </p>

    </>)
}

export default SignEmail
