import React, {useState} from 'react'
import Headed from '../components/Headed'
import '../styles/registration.css'
import { useNavigate } from "react-router-dom";
import { createUserProfile } from '../api';

const Registration = () => {
    const navigate = useNavigate()
    const [errormsg, setErrormsg] = useState("")

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    const [data, setData] = useState({
      first_name: "",
      last_name: "",
      gender: "",
      birthday: "",
      email: "",
      password: "",
      username: "",
    });

    const [data2, setData2] = useState({
      confirmpass: ""
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

      const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setData2((prevState) => ({ ...prevState, [name]: value }));
        const inputElement = document.querySelector(`input[name="${name}"]`);
        if (inputElement) {
          inputElement.classList.remove('error');
          setErrormsg(' ');
        }
      };


    const registered = () =>{

        // {kani kay kung wla kay ge input sa tanan}
        if (data.first_name ==='' && data.last_name ==='' && data.email ==='' && data.birthday ==='' && data.gender ==='' && data.password ==='' && data2.confirmpass ===''){
                // mo tunga ang txt if error
                setErrormsg('Complete the input text above');

                // kung error kay mo pula ang border
                document.querySelector('input[name="firstname"]').classList.add('error');
                document.querySelector('input[name="lastname"]').classList.add('error');
                document.querySelector('input[name="email"]').classList.add('error');
                document.querySelector('input[name="birthday"]').classList.add('error');
                document.querySelector('input[name="password"]').classList.add('error');
                document.querySelector('input[name="confirmpass"]').classList.add('error');

                // {kani kay kung wla kay ge input sa First Name}
            }else if (data.first_name ===''){
                setErrormsg('Enter your First Name');
                document.querySelector('input[name="firstname"]').classList.add('error');
                
               
                // {kani kay kung wla kay ge input sa Last Name}
            }else if (data.last_name ===''){
                setErrormsg('Enter your Last Name');
                document.querySelector('input[name="lastname"]').classList.add('error');
                
                
                // {kani kay kung wla kay ge input sa Email}
            }else if (data.email ===''){
                setErrormsg('Enter your Email');
                document.querySelector('input[name="email"]').classList.add('error');

                // {kani kay sa Email Validation}
            }else if (regex.test(data.email) === false){   
                setErrormsg('Enter a valid Email');
                document.querySelector('input[name="email"]').classList.add('error');

                // {kani kay kung wla kay ge input sa Birth Date }
            }else if (data.birthday ===''){
                setErrormsg('Enter your Birth Day');
                document.querySelector('input[name="birthday"]').classList.add('error');

                // {kani kay kung wla kay ge input sa Gender }
            }else if (data.gender ===''){
                setErrormsg('Enter your Gender');

                // {kani kay kung wla kay ge input sa Paswword}
            }else if (data.password ===''){
                setErrormsg('Enter your Password');
                document.querySelector('input[name="password"]').classList.add('error');

                // {kani kay sa Password Validation}
            }else if(passvalid.test(data.password) === false ){
                setErrormsg('Invalid Input Password');
                document.querySelector('input[name="password"]').classList.add('error');
                
                // {kani kay kung wla kay ge input sa Confirm Password}
            }else if (data2.confirmpass ===''){
                setErrormsg('Enter your Confirm Password');
                document.querySelector('input[name="confirmpass"]').classList.add('error');

                // {kani kay sa Confirm Password Validation}
            }else if(passvalid.test(data2.confirmpass) === false ){
                setErrormsg('Invalid Input Confirm Password');
                document.querySelector('input[name="confirmpass"]').classList.add('error'); 

            }else if (data.password!==data2.confirmpass){
                setErrormsg('Invalid Input Confirm Password');
                document.querySelector('input[name="password"]').classList.add('error'); 
                document.querySelector('input[name="confirmpass"]').classList.add('error'); 

            }else{
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
                value={data.first_name}
                onChange={(event) => {
                  setData({ ...data, first_name: event.target.value });
                  const inputElement = document.querySelector(`input[name="firstname"]`);
                  if (inputElement) {
                    inputElement.classList.remove('error');
                    setErrormsg(' ');
                  }
                }}
                />
                
                <text className='last'>Last Name</text>
                <input 
                className='lin'
                type='type'
                name="lastname"
                value={data.last_name}
                onChange={(event) => {
                  setData({ ...data, last_name: event.target.value });
                  const inputElement = document.querySelector(`input[name="lastname"]`);
                  if (inputElement) {
                    inputElement.classList.remove('error');
                    setErrormsg(' ');
                  }
                }}
                />
                
                <text className='ems'>Email Address</text>
                <input 
                className='ein'
                type='email'
                name="email"
                value={data.email}
                onChange={(event) => {
                  const email = event.target.value;
                  setData({ ...data, email: email, username: email });
                  const inputElement = document.querySelector(`input[name="email"]`);
                  if (inputElement) {
                    inputElement.classList.remove('error');
                    setErrormsg(' ');
                  }
                }}
                />
                

                <text className='bd'>Birthday</text>
                <input 
                className='bin'
                type='date'
                name="birthday"
                value={data.birthday}
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
                onChange={handleInputChange2}
                />

                <button className='bot' onClick={registered}> Register </button>
                <p className='errormessage'>{errormsg}</p>
                

            </div>
        </div>
    </div>
  )
}



export default Registration