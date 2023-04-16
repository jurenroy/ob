import React from 'react'
import Headed from '../components/Headed'
import '../styles/registration.css'

const Registration = () => {
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

                <input 
                className='lin'
                type='type'
                />





            </div>
        </div>
    </div>
  )
}

export default Registration