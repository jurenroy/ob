import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './screens/dashboard';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';
<<<<<<< HEAD
import ForgotPass from './screens/ForgotPass';
import MandatoryProf from './screens/MandatoryProf';
=======
import Message from './screens/message';
import Profile from './screens/Profile';
>>>>>>> origin/Trisha

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/loveus" element={<LoveUs />} />
        <Route path="/dobook" element={<Dobook />} />
<<<<<<< HEAD
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/MandatoryProf" element={<MandatoryProf />} />
=======
        <Route path="/message" element={<Message/>}/>
        <Route path="/profile" element={<Profile/>}/>
>>>>>>> origin/Trisha
      </Routes>
    </Router>
  );
}

export default App;
