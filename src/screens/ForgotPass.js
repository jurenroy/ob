import React from "react";
import Headed from "../components/Headed";
import styles from "../components/styles.css";
import ob from  "../assets/ob.png";

const ForgotPass = () => {
    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed/>
            <div className='container'>
                <img src={ob} style={{height: '300px', width: '300px', marginTop:'50px', marginLeft: '53rem'}} />
                <h1 style={{color: 'white', fontSize: '70px',fontStyle: 'Poppins', marginTop: '22rem', justifyContent: 'center', alignItems: 'center', marginLeft: "-26rem"}}>Forgot Password</h1>
            </div>
            
            <input 
            className="emailfp"
            //placeholder="Email"
            type="type"
            required = 'required'/>
            <span className="emfp">Email Address</span>
            <button style={{height: '43px', width: '20rem', marginLeft: '53rem', marginTop: '-250PX', position: 'absolute', fontWeight: 'bold'}}>SEND TO EMAIL ADDRESS</button>
        </div>
    )
}

export default ForgotPass
