import React, {useState} from 'react'
import Headed from '../components/Headed'
import '../styles/registration.css'
import { Navigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserProfile } from '../api';

const Registration = () => {
    const navigate = useNavigate()
    const [errormsg, setErrormsg] = useState("")

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
        const inputElement = document.querySelector(`input[name="${name}"]`);
        if (inputElement) {
          inputElement.classList.remove('error');
          setErrormsg(' ');
        }
      };


    const registered = () =>{

        // {kani kay kung wla kay ge input sa tanan}
        if (regdata.firstname ==='' && regdata.lastname ==='' && regdata.email ==='' && regdata.birthdate ==='' && regdata.gender ==='' && regdata.password ==='' && regdata.confirmpass ===''){
                // mo tunga ang txt if error
                setErrormsg('Complete the input text above');

                // kung error kay mo pula ang border
                document.querySelector('input[name="firstname"]').classList.add('error');
                document.querySelector('input[name="lastname"]').classList.add('error');
                document.querySelector('input[name="email"]').classList.add('error');
                document.querySelector('input[name="birthdate"]').classList.add('error');
                document.querySelector('input[name="password"]').classList.add('error');
                document.querySelector('input[name="confirmpass"]').classList.add('error');

                // {kani kay kung wla kay ge input sa First Name}
            }else if (regdata.firstname ===''){
                setErrormsg('Enter your First Name');
                document.querySelector('input[name="firstname"]').classList.add('error');
                
               
                // {kani kay kung wla kay ge input sa Last Name}
            }else if (regdata.lastname ===''){
                setErrormsg('Enter your Last Name');
                document.querySelector('input[name="lastname"]').classList.add('error');
                
                
                // {kani kay kung wla kay ge input sa Email}
            }else if (regdata.email ===''){
                setErrormsg('Enter your Email');
                document.querySelector('input[name="email"]').classList.add('error');

                // {kani kay sa Email Validation}
            }else if (regex.test(regdata.email) === false){   
                setErrormsg('Enter a valid Email');
                document.querySelector('input[name="email"]').classList.add('error');

                // {kani kay kung wla kay ge input sa Birth Date }
            }else if (regdata.birthdate ===''){
                setErrormsg('Enter your Birth Date');
                document.querySelector('input[name="birthdate"]').classList.add('error');

                // {kani kay kung wla kay ge input sa Gender }
            }else if (regdata.gender ===''){
                setErrormsg('Enter your Gender');

                // {kani kay kung wla kay ge input sa Paswword}
            }else if (regdata.password ===''){
                setErrormsg('Enter your Password');
                document.querySelector('input[name="password"]').classList.add('error');

                // {kani kay sa Password Validation}
            }else if(passvalid.test(regdata.password) === false ){
                setErrormsg('Invalid Input Password');
                document.querySelector('input[name="password"]').classList.add('error');
                
                // {kani kay kung wla kay ge input sa Confirm Password}
            }else if (regdata.confirmpass ===''){
                setErrormsg('Enter your Confirm Password');
                document.querySelector('input[name="confirmpass"]').classList.add('error');

                // {kani kay sa Confirm Password Validation}
            }else if(passvalid.test(regdata.confirmpass) === false ){
                setErrormsg('Invalid Input Confirm Password');
                document.querySelector('input[name="confirmpass"]').classList.add('error'); 

            }else if (regdata.password!==regdata.confirmpass){
                setErrormsg('Invalid Input Confirm Password');
                document.querySelector('input[name="password"]').classList.add('error'); 
                document.querySelector('input[name="confirmpass"]').classList.add('error'); 

            }else{
                console.log(regdata)
                navigate('/mandatoryprof')
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
                <p className='errormessage'>{errormsg}</p>
                

            </div>
        </div>
    </div>
  )
}



export default Registration