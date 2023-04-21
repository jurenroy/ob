import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './screens/dashboard';
import Homepage from './screens/homepage';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';
import Message from './screens/message'
import Profile from './screens/Profile';
import ForgotPass from './screens/ForgotPass';
import MandatoryProf from './screens/MandatoryProf';
import Headed from './components/Headed';
import Registration from './screens/registration';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/headz" element={<Headed />} />
        <Route exact path="/" element={<Dash />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/loveus" element={<LoveUs />} />
        <Route path="/dobook" element={<Dobook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/mandatoryprof" element={<MandatoryProf />} />
      </Routes>
    </Router>
  );
}

export default App;
