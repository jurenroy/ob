import React,{useState} from "react";
import Headed from "../components/Headed";
import "../components/styles.css";
import ob from  "../assets/ob.png";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
    const navigate = useNavigate()
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [email, setEmail] = useState('');

    const checkEmail = (e) => {
        setEmail(e.target.value);
    }

    const forgot = () =>{
        if (email === ""){
            console.log ('wla')
        }else{
            if(regex.test(email) === false){
                console.log ('mali')
            }else{
                navigate('/')
            }
        }
    }

    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed/>
            <div className='container'>
                <div className="forgotpasscon">
                    <img src={ob} style={{position:'absolute', height: '300px', width: '300px', marginTop:'70px', marginLeft: '16rem'}} />
                    <h1 style={{color: 'white', fontSize: '70px',fontStyle: 'Poppins', marginTop: '23rem', justifyContent: 'center', alignItems: 'center', marginLeft: "8rem"}}>Forgot Password</h1>


                    <input 
                    className="emailfp"
                    //placeholder="Email"
                    type="type"
                    name="email"
                    value={email}
                    onChange={checkEmail}
                    required = 'required'/>
                    <span className="emfp">Email Address</span>
                    <button style={{height: '43px', width: '20rem', marginLeft: '17.5rem', marginTop: '580PX', position: 'absolute', fontWeight: 'bold'}} onClick={forgot}>SEND TO EMAIL ADDRESS</button>
                </div>
            </div>

            
            
        </div>
    )
}

export default ForgotPass
