import {  faCheck, faTimes, faInfoCircle, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function SignConfirmPassword({ MatchpasswordManager }) {

    const {
        Matchpassword,
        setMatchPassword,
        validMatchPassword,
        MatchpasswordFocus,
        setMatchpasswordFocus
    } = MatchpasswordManager;

    return (<>

        <div className={MatchpasswordFocus && !validMatchPassword ? "input-container no-margin" : "input-container"}>
          <FontAwesomeIcon icon={faRepeat} />
          <input
            type="password"
            id="confirm_password"
            required
            placeholder="Confirm password"
            aria-invalid={validMatchPassword ? "false" : "true"}
            aria-describedby="confirmnote"
            onInput={(e) => setMatchPassword(e.target.value)}
            onFocus={() => setMatchpasswordFocus(true)}
            onBlur={() => setMatchpasswordFocus(false)}
          />

          <span className={validMatchPassword || !Matchpassword ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>  
          <span className={validMatchPassword && Matchpassword ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>

        </div>
        <p id="confirmnote" className={MatchpasswordFocus && !validMatchPassword ? "instructions" : "offscreen"} >
          <FontAwesomeIcon icon={faInfoCircle} className = "faInfoCircle"/>
          Must match the first password input field.
        </p>

    </>)
}

export default SignConfirmPassword
