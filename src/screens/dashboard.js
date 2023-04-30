import React, { useState } from "react";
import Headed from "../components/Headed";
import "../components/styles.css";
import ob from  "../assets/ob.png";
import { Link, useNavigate } from "react-router-dom";


const Dash = () => {
    const navigate = useNavigate()
    const [errormsg, setErrormsg] = useState("")

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    const [data, setData] = useState({
        email: "",
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
        if (data.email==='' && data.password===''){
            setErrormsg('Please fill out all fields');
            document.querySelector('input[name="email"]').classList.add('error');
            document.querySelector('input[name="password"]').classList.add('error');

        }else if (data.email === ''){
          setErrormsg("Enter your Email")

        }else if (regex.test(data.email) === false){
          setErrormsg("Enter a valid Email")

        }else if (data.password === ''){
          setErrormsg("Enter your Password")

        }else if (passvalid.test(data.password) === false){
          setErrormsg("Enter a valid Password")

        }else{
            navigate('/homepage')
        }
    }
        


    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed style={{ position: 'fixed', width: '100%' }} />
            <div className='container'>
          <div className='second'>
            <img src={ob} style={{position:'absolute', height: "200px", width: "200px", top:'10px', justifyContent: 'center', alignItems: 'center'}} />
            <h1 style={{position:'absolute' , color: 'white', fontSize: '25px', top: '180px', marginLeft: "-350px", fontWeight: "0px", fontStyle: "Poppins"}}>LOGIN</h1>
            <h3 style={{position:'absolute',color: '#828282', fontSize: '15px', top: '210px', marginLeft: "-170px", fontWeight: "0px", fontStyle: "Poppins"}}>Sign in to continue to our application</h3>
           
            <input 
            className="email"
            //placeholder="Email"
            type="type"
            name="email"
            value={data.email}
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
