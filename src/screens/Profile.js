import React from "react";
import Headeded from "../components/Headeded";
import '../styles/Profile.css'
import profiled from '../assets/profiled.png'

const Profile = () => {
    return( 
        <div>
        <Headeded/>
        <div class = "Bg-container">
            <div class = "Bg-container2">
            <h2 style={{color:'#fff', marginLeft:'17rem', fontFamily: 'serif'}}>Profile</h2>
            <img src={profiled} style={{ height: "10rem", width: "10rem", marginTop:'45px', marginLeft:'-7rem', marginBottom:'50rem'}} />
                <h2 style={{color:'#fff', marginLeft:'-13rem', marginTop:'13rem', fontFamily: 'serif', textDecorationLine:'underline'}}>Juren Roy Abragan, 21</h2>
                <h4 style={{color:'#fff', marginLeft:'-25rem', marginTop:'15rem', fontFamily: 'serif'}}>Interested: ice cream that don`t melt</h4>
                    <div class = "Bg-container3" style={{marginTop: '17rem', marginLeft: '1rem'}}>Bio: hehehehehe</div>
                    <div class = "Bg-container4" style={{marginTop: '25rem', marginLeft: '1rem'}}>Address:Bulua, Cagayan de Oro City</div>
            </div>
        </div>
        <div classname = 'button-edit'>
            <button Variant ='contained' as = "input" type = 'button' className='btn-edit'>
            <text className='button-text'>
              EDIT
            </text>
            </button>
          </div>
          <div classname = 'button-edit' style={{marginLeft:'12rem'}}>
            <button Variant ='contained' as = "input" type = 'button' className='btn-edit'>
            <text className='button-text'>
              LOGOUT
            </text>
            </button>
          </div>
    </div>
    )
}

export default Profile