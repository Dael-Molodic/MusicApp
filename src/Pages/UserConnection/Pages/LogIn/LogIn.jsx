import { useEffect } from "react";
import { useMainAppContext } from "../../../../contexts/Main_app_context";
import AnotherOptionButton from "../../components/AutoConnection/AnotherOptionButton/AnotherOptionButton";
import AutoConnection from "../../components/AutoConnection/AutoConnection";
import LogEmail from "./Inputs/LogEmail";
import LogPassword from "./Inputs/LogPassword";



function LogIn( { LogInManager } ) {

    const { connectedUser: [connectedUser, setConnectedUser] } = useMainAppContext();
    const {
        email,
        setEmail,
        password,
        setPassword,
        setSubmitSuccess
    } = LogInManager;

    
    const handleSubmit = async (e) => {
    
        e.preventDefault()
    
        setConnectedUser({ email, password });
        console.log(email, password);
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <AutoConnection />
            <h4>or use your account</h4>

            <div className="fields-container">
                <LogEmail setEmail ={ setEmail }/>
                <LogPassword setPassword = {setPassword}/>
            </div>

            <button>Log in</button>

            <AnotherOptionButton action = "Sign up" questionTxt = "Don't have an account?"/>
        </form>
    )
}


export default LogIn
