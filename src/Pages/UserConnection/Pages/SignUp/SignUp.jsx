import { useEffect } from "react";
import { useMainAppContext } from "../../../../contexts/Main_app_context";
import AnotherOptionButton from "../../components/AutoConnection/AnotherOptionButton/AnotherOptionButton";
import AutoConnection from "../../components/AutoConnection/AutoConnection";
import SignConfirmPassword from "./Inputs/SignConfirmPassword";
import SignEmail from "./Inputs/SignEmail";
import SignPassword from "./Inputs/SignPassword";
import SignUser from "./Inputs/SignUser";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function SignUp({ SignUpManager }) {
    
    const { connectedUser: [connectedUser, setConnectedUser] } = useMainAppContext();
    const {
        UserManager: {
            userName,
            setUserName,
            validName,
            setValidName,
            userFocus,
            setUserFocus,
            userRef
        },
        emailManager: {
            email,
            setEmail,
            validEmail,
            setValidEmail,
            emailFocus,
            setEmailFocus
        },
        passwordManager: {
            password,
            setPassword,
            validPassword,
            setValidPassword,
            passwordFocus,
            setPasswordFocus
        },
        MatchpasswordManager: {
            Matchpassword,
            setMatchPassword,
            validMatchPassword,
            setValidMatchPassword,
            MatchpasswordFocus,
            setMatchpasswordFocus
        },
        submitSuccess,
        setSubmitSuccess
    } = SignUpManager;

    useEffect(() => {
        //do more checks
        setValidName(USER_REGEX.test(userName));
    },[userName])
    
    useEffect(() => {
        //do more checks
        setValidEmail(EMAIL_REGEX.test(email));
    },[email])
    
    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidMatchPassword(password === Matchpassword)
    },[password, Matchpassword])
    
    const handleSubmit = async (e) => {
    
        e.preventDefault()
    
        const v1 = USER_REGEX.test(userName);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PASSWORD_REGEX.test(password);
        if (!v1 || !v2 || !v3 || !validEmail) {
          alert("Invalid Entry")
          return;
        }
    
        setConnectedUser({ userName, password });
        console.log(userName, email, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>sign up</h2>
            <AutoConnection />
            <h4>or use your email for registration</h4>

            <div className="fields-container">
                <SignUser UserManager = {SignUpManager.UserManager}/>
                <SignEmail emailManager = {SignUpManager.emailManager} />
                <SignPassword passwordManager = {SignUpManager.passwordManager} />
                <SignConfirmPassword MatchpasswordManager = {SignUpManager.MatchpasswordManager} /> 
            </div>

            <button disabled={!validName || !validEmail || !validPassword || !validMatchPassword ? true : false}>
                Sign up
            </button>

            <AnotherOptionButton action = "Log in" questionTxt = "Have an account?"/>
        </form>
    )
}

export default SignUp
