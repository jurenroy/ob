import React, {useState} from 'react'
import Headed from '../components/Headed'
import '../styles/registration.css'
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    const [regdata, setRegData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        birthdate:"",
        gender:"",
        password: "",
        confirmpass: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegData((prevState) => ({ ...prevState, [name]: value }));
      };

    const registered = () =>{
        
        if (regdata.firstname ==='' && regdata.lastname ==='' && regdata.email ==='' && regdata.birthdate ==='' && regdata.gender ==='' && regdata.password ==='' && regdata.confirmpass ===''){
            console.log('wla kay ge pang type')

        }else{

            if (regdata.firstname ==='' || regdata.lastname ==='' || regdata.email ==='' || regdata.birthdate ==='' || regdata.gender ==='' || regdata.password ==='' || regdata.confirmpass ===''){
                console.log('wla nimo ge human og input ')

            }else{

                if (passvalid.test(regdata.password) === false || regex.test(regdata.email) === false){
                    console.log('mali imong ge type nga password or email ')

                }else{

                    if (regdata.password!==regdata.confirmpass){
                        console.log('dli parehas imong password og confrim password')

                    }else{

                        console.log(regdata)
                    }
                }
            }    
        }
    }

  return (
    <div>
        <Headed/>
        <div className='regcontainer'>
            <div className='secondcontainer'>
                <text className='regtxt'>REGISTER</text>
                <text className='first'>First Name</text>
                <input 
                className='fin'
                type='type'
                name="firstname"
                value={regdata.firstname}
                onChange={handleInputChange}
                />
                
                <text className='last'>Last Name</text>
                <input 
                className='lin'
                type='type'
                name="lastname"
                value={regdata.lastname}
                onChange={handleInputChange}
                />
                
                <text className='ems'>Email</text>
                <input 
                className='ein'
                type='email'
                name="email"
                value={regdata.email}
                onChange={handleInputChange}
                />
                

                <text className='bd'>Birthdate</text>
                <input 
                className='bin'
                type='date'
                name="birthdate"
                value={regdata.birthdate}
                onChange={handleInputChange}
                />


                <text className='gender'>Gender</text>
                <select name="gender"
                value={regdata.gender}
                onChange={handleInputChange}
                className='gin'>
                   <option value="" disabled select>....</option>

                    <option >Male</option>
                    <option >Female</option>
                </select>

                <text className='passw'>Password</text>
                <input 
                className='pin'
                type='password'
                name="password"
                value={regdata.password}
                onChange={handleInputChange}
                />


                <text className='cp'>Confirm Password</text>
                <input 
                className='cin'
                type='password'
                name="confirmpass"
                value={regdata.confirmpass}
                onChange={handleInputChange}
                />

                <button className='bot' onClick={registered}> Register </button>

            </div>
        </div>
    </div>
  )
}


export default Registration