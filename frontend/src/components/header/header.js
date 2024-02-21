import "./css/Header.css";
import logo from "../../assets/img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
//CONTEXT
import UserContext from '../../context/SignContext';
import { useContext } from "react";

function Header() {

    const userData = useSelector((state)=>state.userInfo);
    const {logged} = useContext(UserContext);
    const {signOut} = useContext(UserContext);


    return(

    <header>
        <nav className="main-nav">

            <Link to={"./"} className="main-nav-logo"> 
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div className= {logged ? "loggedNav" : null}>

                <Link to={"sign-in"} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {logged ? " "+ userData.userName +" " : "Sign In" }
                </Link>

                {logged ? 
                    <Link onClick={signOut} className="main-nav-item">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                        Sign Out
                    </Link> 
                : 
                    null }
            </div>

        </nav>
    </header>
    
    )
}

export default Header