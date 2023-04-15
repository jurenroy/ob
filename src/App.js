import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './screens/dashboard';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';
import ForgotPass from './screens/ForgotPass';
import MandatoryProf from './screens/MandatoryProf';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/loveus" element={<LoveUs />} />
        <Route path="/dobook" element={<Dobook />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/MandatoryProf" element={<MandatoryProf />} />
      </Routes>
    </Router>
  );
}

export default App;
