import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './screens/dashboard';
import Homepage from './screens/homepage';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';
import Profile from './screens/Profile';
import Message from './screens/message';
import Registration from './screens/registration';
import ForgotPass from './screens/ForgotPass';
import MandatoryProf from './screens/MandatoryProf';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/loveus" element={<LoveUs />} />
        <Route path="/dobook" element={<Dobook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path="/mandatoryprofile" element={<MandatoryProf />} />
        
      </Routes>
    </Router>
  );
}

export default App;
