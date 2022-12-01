import { useRef } from "react"
import "./Login.css"

function Login() {

  const containerRef = useRef();
  console.dir(containerRef)
  
  return (<div className="login-container">
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Log in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Log in</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
        
            <button className="ghost" id="signIn" onClick={() => {
              containerRef
               .current
               .classList.remove("right-panel-active");
            }}>Log in</button>

          </div>
          <div className="overlay-panel overlay-right">
            
            <button className="ghost" id="signUp" onClick={() => {
              containerRef
               .current
               .classList.add("right-panel-active");
            }}>Sign Up</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Login
