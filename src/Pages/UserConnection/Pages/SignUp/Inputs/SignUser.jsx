import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react";

function SignUser({ UserManager }) {

  const {
    userName,
    setUserName,
    validName,
    userFocus,
    setUserFocus,
    userRef
  } = UserManager;

  useEffect(() => {
    userRef.current.focus();
  },[])

  return (<>

    <div className={userFocus && userName && !validName ? "input-container no-margin" : "input-container"}>
      <FontAwesomeIcon icon={faUser} />
      <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        placeholder="Name"
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onInput={(e) => setUserName(e.target.value)}
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />

      <span className={validName || !userName ? "hide" : "invalid"}>
        <FontAwesomeIcon icon={faTimes} />
      </span>  
      <span className={validName ? "valid" : "hide"}>
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </div>

    <p id="uidnote" className={userFocus && userName && !validName ? "instructions" : "offscreen"} >
      <FontAwesomeIcon icon={faInfoCircle} className = "faInfoCircle"/>
      4 to 24 characters. <br />
      must begin with a letter. <br />
      Leter, numbers, underscores, hyphens allowed.
    </p>

  </>)
}

export default SignUser
