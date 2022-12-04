import { faCheck, faTimes, faInfoCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SignPassword({ passwordManager }) {

    const {
        password,
        setPassword,
        validPassword,
        passwordFocus,
        setPasswordFocus
    } = passwordManager;  

    return (<>
        <div className={passwordFocus && !validPassword ? "input-container no-margin" : "input-container"}>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="passwordnote"
            onInput={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />

          <span className={validPassword || !password ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>  
          <span className={validPassword ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>

        </div>
        <p id="passwordnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"} >
          <FontAwesomeIcon icon={faInfoCircle} className = "faInfoCircle"/>
          8 to 24 characters. <br />
          must include uppercase and lowercase letter, a number and a special character. <br />
          allowed special character: ! @ # $ %
        </p>

    </>)
}

export default SignPassword
