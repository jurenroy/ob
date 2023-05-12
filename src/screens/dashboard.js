import React, { useState } from "react";
import Headed from "../components/Headed";
import "../components/styles.css";
import ob from  "../assets/ob.png";
import { UserLogin } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../components/Redux/Auth/AuthSlice';

const Dash = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [errormsg, setErrormsg] = useState("")

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    const [data, setData] = useState({
      username: "",
      password: "",
    });

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
        const inputElement = document.querySelector(`input[name="${name}"]`);
        if (inputElement) {
          inputElement.classList.remove('error');
          setErrormsg(' ');
        }
      };




    const submit = () =>{
        if (data.username==='' && data.password===''){
            setErrormsg('Please fill out all fields');
            document.querySelector('input[name="username"]').classList.add('error');
            document.querySelector('input[name="password"]').classList.add('error');

        }else if (data.username === ''){
          document.querySelector('input[name="username"]').classList.add('error');
          setErrormsg("Enter your Email")

        }else if (regex.test(data.username) === false){
          document.querySelector('input[name="username"]').classList.add('error');
          setErrormsg("Enter a valid Email")

        }else if (data.password === ''){
          document.querySelector('input[name="password"]').classList.add('error');
          setErrormsg("Enter your Password")

        }else if (passvalid.test(data.password) === false){
          document.querySelector('input[name="password"]').classList.add('error');
          setErrormsg("Enter a valid Password")

        }else{
            UserLogin(data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                navigate('/homepage');
                dispatch(login(data.username));
                alert("Account Logged in")
              })
              .catch((error) => {
                alert(
                  "Invalid Credentials!\nor your account may not activated\nPlease check your email for activation"
                );
              }); 
        }
    }
        


    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed style={{ position: 'fixed', width: '100%' }} />
            <div className='container'>
          <div className='second'>
            <img src={ob} style={{position:'absolute', height: "200px", width: "200px", top:'10px', justifyContent: 'center', alignItems: 'center'}} />
            <h1 style={{position:'absolute' , color: 'white', fontSize: '25px', top: '180px', marginLeft: "-350px", fontWeight: "0px", fontStyle: "Poppins"}}>LOGIN </h1>
            <h3 style={{position:'absolute',color: '#828282', fontSize: '15px', top: '210px', marginLeft: "-170px", fontWeight: "0px", fontStyle: "Poppins"}}>Sign in to continue to our application</h3>
           
            <input 
            className="email"
            //placeholder="Email"
            type="type"
            name="username"
            value={data.username}
            onChange={handleInputChange}
            required = 'required'/>
            <span className="em">Email</span>
            

            <input 
            className="pass"
            //placeholder="pass"
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            required = 'required'/>
            <span className="password">Password</span>
            

            <a href style= {{position:'absolute', textDecorationLine: 'underline', cursor: 'pointer', top: '74%', marginLeft: '330px', textDecorationColor: 'white'}}>
                <Link to = 'forgotpass' style={{color: 'white', fontWeight: 'normal', fontSize:16}}>Forgot Password? </Link>
            </a>

            <button style={{position:'absolute', height: '43px', width: '91%',top:'413px', marginLeft: '2%'}} onClick={submit/*() => navigate('/homepage')*/}>Sign In</button>
            <p className="signuperror">{errormsg}</p>
            <a href style= {{position:'absolute', textDecorationLine: 'underline', cursor: 'pointer', top: '460px',textDecorationColor: 'white'}}>
                <Link to = 'registration' style={{color: 'white', fontWeight: 'normal'}}>Doesn’t have an Account? Sign Up Here.</Link>
            </a>
          </div>
        </div>
        </div>
    )
}

export default Dash
