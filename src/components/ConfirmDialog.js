import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../components/confirmdialog.css'

function Confirm() {
  const signout = useNavigate();

  return (
    <div className='divback'>
      <div className='dialogback'>
        <div className='dialogform'>
          <text className='txtdialog'>
            Are you sure you want to Logout?
          </text>
          
          <button className='yesdialog' onClick={() => signout('/')}>
            <text>yes</text>
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Confirm