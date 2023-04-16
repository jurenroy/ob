import React from "react";
import Headed from "../components/Headed";
import styles from "../components/styles.css";
import ob from  "../assets/ob.png";

const Dash = () => {

    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed style={{ position: 'fixed', width: '100%' }} />
            <div className='container'>
          <div className='second'>
            <img src={ob} style={{ height: "200px", width: "200px", marginTop:'10px', justifyContent: 'center', alignItems: 'center'}} />
            <h1 style={{color: 'white', fontSize: '25px', marginTop: '-10px', marginLeft: "-350px", fontWeight: "0px", fontStyle: "Poppins"}}>LOGIN</h1>
            <h3 style={{color: '#828282', fontSize: '15px', marginTop: '-20px', marginLeft: "-170px", fontWeight: "0px", fontStyle: "Poppins"}}>Sign in to continue to our application</h3>
           
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
            <a href style= {{textDecorationLine: 'underline', cursor: 'pointer', marginTop: '20%', marginLeft: '330px', textDecorationColor: 'white'}}>
                <h3 style={{color: 'white', fontWeight: 'normal', fontSize:16}}>Forgot Password? </h3>
            </a>

            <button style={{height: '43px', width: '91%', marginLeft: '2%'}}>Sign In</button>
            <a href style= {{textDecorationLine: 'underline', cursor: 'pointer', marginTop: '-10px',textDecorationColor: 'white'}}>
                <h4 style={{color: 'white', fontWeight: 'normal'}}>Doesn’t have an Account? Sign Up Here.</h4>
            </a>
          </div>
        </div>
        </div>
    )
}

export default Dash
