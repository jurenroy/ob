import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './screens/dashboard';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';
import Message from './screens/message';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/loveus" element={<LoveUs />} />
        <Route path="/dobook" element={<Dobook />} />
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </Router>
  );
}

export default App;
