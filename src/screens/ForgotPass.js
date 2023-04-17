import React from "react";
import Headed from "../components/Headed";
import styles from "../components/styles.css";
import ob from  "../assets/ob.png";
import Footres from "../components/Footres";

const ForgotPass = () => {
    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed/>
            <div className='container' style={{justifyContent:'center'}}>
            <div className='second' style={{backgroundColor:'transparent'}}>
                <img src={ob} style={{height: '200px', width: '200px', marginTop:'-250px', position:'absolute'}} />
                <h1 style={{color: 'white', fontSize: '40px',fontStyle: 'Poppins', marginTop: '40px', justifyContent: 'center', alignItems: 'center'}}>Forgot Password</h1>
                <input 
                    className="emailfp"
                    //placeholder="Email"
                    type="type"
                    required = 'required'/>
                <span className="emfp">Email Address</span>               
            <button style={{height: '43px', width: '20rem', marginTop: '290px', position: 'absolute', fontWeight: 'bold'}}>SEND TO EMAIL ADDRESS</button>
            </div>
            </div>
            <Footres/>
        </div>
    )
}

export default ForgotPass
