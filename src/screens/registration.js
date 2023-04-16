import React, {useState} from 'react'
import Headed from '../components/Headed'
import '../styles/registration.css'

const Registration = () => {
    const [gender, setGender] = useState();

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
                />
                
                <text className='last'>Last Name</text>
                <input 
                className='lin'
                type='type'
                />
                
                <text className='ems'>Email</text>
                <input 
                className='ein'
                type='email'
                />
                

                <text className='bd'>Birthdate</text>
                <input 
                className='bin'
                type='date'
                />


                <text className='gender'>Gender</text>
                <select value = {gender}
                onChange = {(e) => setGender(e.target.value)}
                className='gin'>
                    <option >.....</option>

                    <option >Male</option>
                    <option >Female</option>
                </select>

                <text className='passw'>Password</text>
                <input 
                className='pin'
                type='password'
                />


                <text className='cp'>Confirm Password</text>
                <input 
                className='cin'
                type='password'
                />

                <button className='bot'> Register </button>

            </div>
        </div>
    </div>
  )
}

export default Registration