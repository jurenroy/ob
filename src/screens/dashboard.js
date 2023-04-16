import React from "react";
import Headed from "../components/Headed";
import styles from "../components/styles.css";
import ob from  "../assets/ob.png";
import { Link, useNavigate} from "react-router-dom";

const Dash = () => {
    const navigate = useNavigate();

    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed/>
            <div className='container'>
          <div className='second'>
            <img src={ob} style={{ height: "250px", width: "250px", marginTop:'15px', justifyContent: 'center', alignItems: 'center', marginLeft: '180px'}} />
            <h1 style={{color: 'white', fontSize: '35px', marginTop: '-10px', marginLeft: "35px", fontWeight: "0px", fontStyle: "Poppins"}}>LOGIN</h1>
            <h3 style={{color: '#828282', fontSize: '16px', marginTop: '-25px', marginLeft: "35px", fontWeight: "0px", fontStyle: "Poppins"}}>Sign in to continue to our application</h3>
           
            <input 
            className="email"
            //placeholder="Email"
            type="type"
            required = 'required'/>
            <span className="em">Email</span>

            <input 
            className="pass"
            //placeholder="pass"
            type="password"
            required = 'required'/>
            <span className="password">Password</span>
            <a href style= {{textDecorationLine: 'underline', cursor: 'pointer', marginTop: '145px', marginLeft: '410px', textDecorationColor: 'white'}}>
                <Link to = "/forgotpassword" style={{color: 'white', fontWeight: 'normal'}}>Forgot Password? </Link>
            </a>

            <button style={{height: '43px', width: '33rem', marginLeft: '35px', marginTop: '5px'}} onClick={() => navigate('/homepage')}>Sign In</button>
            <a href style= {{textDecorationLine: 'underline', cursor: 'pointer', marginTop: '3px', marginLeft: '175px', textDecorationColor: 'white'}}>
                <Link to = "/register" style={{color: 'white', fontWeight: 'normal'}}>Doesn’t have an Account? Sign Up Here.</Link>
            </a>
          </div>
        </div>
        </div>
    )
}

export default Dash
