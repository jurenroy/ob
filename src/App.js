import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './screens/dashboard';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/loveus" element={<LoveUs />} />
        <Route path="/dobook" element={<Dobook />} />
      </Routes>
    </Router>
  );
}

export default App;
