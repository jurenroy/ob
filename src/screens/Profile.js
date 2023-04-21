import React,{useState} from "react";
import Headeded from "../components/Headeded";
import '../styles/Profile.css'
import profiled from '../assets/profiled.png'
import Confirm from "../components/ConfirmDialog";

const Profile = () => {
  const [show , setShow] = useState(false)
  const handleNoClick = () => {
    setShow(false);
  }

    return( 
        <div style={{justifyContent:"center"}}>
        <Headeded/>
        <div class = "Bg-container">
          <div class = "Bg-container2">
            <h2 style={{color:'#fff', marginLeft:'17rem', fontFamily: 'serif'}}>Profile</h2>
            <img src={profiled} style={{ height: "10rem", width: "10rem", marginTop:'45px', marginLeft:'-7rem', marginBottom:'50rem'}} />
            <h2 style={{color:'#fff', marginLeft:'-13rem', marginTop:'13rem', fontFamily: 'serif', textDecorationLine:'underline'}}>Juren Roy Abragan, 21</h2>
            <h4 style={{color:'#fff', marginLeft:'-25rem', marginTop:'15rem', fontFamily: 'serif'}}>Interested: ice cream that don`t melt</h4>
            <div class = "Bg-container3" style={{marginTop: '17rem', marginLeft: '1rem'}}> Bio: hehehehehe</div>
            <div class = "Bg-container4" style={{marginTop: '25rem', marginLeft: '1rem'}}> Address:Bulua, Cagayan de Oro City</div>           
            
            <div classname="button-edit" style={{ marginLeft: "8%",marginTop:600,position:"absolute",marginBottom:20}}>
              <button Variant="contained" as="input" type="button" className="btn-edit">
                <text className="button-text">EDIT</text>
              </button>
            </div>
            <div classname="button-edit" style={{ marginLeft: "16%",marginTop:600,marginBottom:20}}>
              <button
                Variant="contained"
                as="input"
                type="button"
                className="btn-edit"
                onClick={() => setShow(true)}
              >
                <text className="button-text">LOGOUT</text>
              </button>
            </div>
          </div>          
        </div>
        
        
            {show && <Confirm setShow={setShow} handleNoClick={handleNoClick} />}

         
    </div>
    )
}

export default Profile