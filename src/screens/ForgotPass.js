import React,{useState} from "react";
import Headed from "../components/Headed";
import "../components/styles.css";
import ob from  "../assets/ob.png";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
    const navigate = useNavigate()
    const [errormsg, setErrormsg] = useState("")

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [email, setEmail] = useState('');

    const checkEmail = (e) => {
        setEmail(e.target.value);
        setErrormsg(' ');
    }

    const forgot = () =>{
        if (email === ""){
            setErrormsg('Please enter your Email');
            document.querySelector('input[name="email"]').classList.add('error');

        }else if (regex.test(email) === false){   
            setErrormsg('Please enter a valid Email Address');
            document.querySelector('input[name="email"]').classList.add('error');
            
        }else{
            navigate('/')
        }
    }

    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed/>
            <div className='container'>
                <div className="forgotpasscon">
                    <img src={ob} style={{position:'absolute', height: '300px', width: '300px', marginTop:'70px', marginLeft: '16rem'}} />
                    <h1 style={{color: 'white', fontSize: '70px',fontStyle: 'Poppins', marginTop: '23rem', alignItems: 'center', marginLeft: "7rem"}}>Forgot Password</h1>


                    <input 
                    className="emailfp"
                    //placeholder="Email"
                    type="type"
                    name="email"
                    value={email}
                    onChange={checkEmail}
                    required = 'required'/>
                    <span className="emfp">Email Address</span>

                    <p className='forgoterror'>{errormsg}</p>
                    <button style={{height: '43px', width: '20rem', marginLeft: '17.5rem', marginTop: '650PX', position: 'absolute', fontWeight: 'bold'}} onClick={forgot}>SEND TO EMAIL ADDRESS</button>
                </div>
            </div>

            
            
        </div>
    )
}

export default ForgotPass
