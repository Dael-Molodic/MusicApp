import { useRef, useState, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import "./UserConnection.css"
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";



function UserConnection() {

  const userRef = useRef();
  const [userName, setUserName] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const UserManager = {
    userName,
    setUserName,
    validName,
    setValidName,
    userFocus,
    setUserFocus,
    userRef
  }

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const emailManager = {
    email,
    setEmail,
    validEmail,
    setValidEmail,
    emailFocus,
    setEmailFocus
  }

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const passwordManager = {
    password,
    setPassword,
    validPassword,
    setValidPassword,
    passwordFocus,
    setPasswordFocus
  }

  const [Matchpassword, setMatchPassword] = useState('');
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [MatchpasswordFocus, setMatchpasswordFocus] = useState(false);
  const MatchpasswordManager = {
    Matchpassword,
    setMatchPassword,
    validMatchPassword,
    setValidMatchPassword,
    MatchpasswordFocus,
    setMatchpasswordFocus
  }

  const [submitSuccess, setSubmitSuccess] = useState(false);


  const SignUpManager = {
    UserManager,
    emailManager,
    passwordManager,
    MatchpasswordManager,
    submitSuccess,
    setSubmitSuccess
  }
  const LogInManager = {
    email,
    setEmail,
    password,
    setPassword,
    setSubmitSuccess
  }


  return (
    <section>
      <Routes>
        <Route path="/Sign_up" element={<SignUp SignUpManager = {SignUpManager}/>}/>
        <Route path="/Log_in" element={<LogIn LogInManager = {LogInManager}/>}/>
      </Routes>
    </section>
  )
}


export default UserConnection;
