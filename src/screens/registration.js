import React, {useState} from 'react'
import Headed from '../components/Headed'
import '../styles/registration.css'
import { Navigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserProfile } from '../api'

const Registration = () => {
    const navigate = useNavigate();
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        birthdate:"",
        gender:"",
        password: "",
    });

    const [data2, setData2] = useState({
        confirmPassword: "",
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
      };

    const registered = () =>{
        
        if (data.first_name ==='' && data.lastname ==='' && data.email ==='' && data.birthdate ==='' && data.gender ==='' && data.password ==='' && data2.confirmpass ===''){
            console.log('wla kay ge pang type')
            alert('wla kay ge pang type')

        }else{

            if (data.first_name ==='' || data.lastname ==='' || data.email ==='' || data.birthdate ==='' || data.gender ==='' || data.password ==='' || data2.confirmpass ===''){
                console.log('wla nimo ge human og input ')

            }else{

                if (passvalid.test(data.password) === false || regex.test(data.email) === false){
                    console.log('mali imong ge type nga password or email ')

                }else{

                    if (data.password!==data2.confirmpass){
                        console.log('dli parehas imong password og confrim password')

                    }else{

                        console.log(data)
                        createUserProfile(data, {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          })
                            .then((response) => {
                              console.log(response.data);
                              alert(
                                "Successfully Registered!\nPlease check your email\nfor activation"
                              );
                              navigate('/mandatoryprof')
                            })
                            .catch((error) => {
                              console.log(error);
                              console.log(error.request);
                              console.log(data);
                            });

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
                value={data.firstname}
                onChange={handleInputChange}
                />
                
                <text className='last'>Last Name</text>
                <input 
                className='lin'
                type='type'
                name="lastname"
                value={data.lastname}
                onChange={handleInputChange}
                />
                
                <text className='ems'>Email</text>
                <input 
                className='ein'
                type='email'
                name="email"
                value={data.email}
                onChange={handleInputChange}
                />
                

                <text className='bd'>Birthdate</text>
                <input 
                className='bin'
                type='date'
                name="birthdate"
                value={data.birthdate}
                onChange={handleInputChange}
                />


                <text className='gender'>Gender</text>
                <select name="gender"
                value={data.gender}
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
                value={data.password}
                onChange={handleInputChange}
                />


                <text className='cp'>Confirm Password</text>
                <input 
                className='cin'
                type='password'
                name="confirmpass"
                value={data2.confirmpass}
                onChange={handleInputChange}
                />

                <button className='bot' onClick={registered}> Register </button>

            </div>
        </div>
    </div>
  )
}


export default Registration