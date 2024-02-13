import { useNavigate } from "react-router-dom";
import "./css/signin.css"
import {useState} from "react"

function SignIn(){

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/user")
  };

 return(
    <main className="main bg-dark">

      <section className="sign-in-content">

        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" value={email} onChange={e => setUsername(e.target.value)} required/>
          </div>

          {/* Password */}
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
          </div>

          {/* Remember box */}
          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me"/>
          </div>

          {/* Submit button */}
          <button  type="submit" className="sign-in-button">Sign In</button>

        </form>

      </section>
    </main>   
  )
}

export default SignIn