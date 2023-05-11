import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './components/Redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Dash from './screens/dashboard';
import Homepage from './screens/homepage';
import LoveUs from './screens/Loveus';
import Dobook from './screens/Dobook.';
import Message from './screens/message'
import Profile from './screens/Profile';
import ForgotPass from './screens/ForgotPass';
import MandatoryProf from './screens/MandatoryProf';
import Registration from './screens/registration';
import NotFoundPage from './screens/NotFoundPage';
import NotYetAvailable from './screens/NotYetAvailable';
import Samplok from './screens/Samplok';

function App() {
  return (
    <Provider store={store}>
	    <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dash />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/loveus" element={<LoveUs />} />
            <Route path="/dobook" element={<Dobook />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/message" element={<Message />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/forgotpass" element={<ForgotPass />} />
            <Route path="/mandatoryprof" element={<MandatoryProf />} />
            <Route path="/error404" element={<NotFoundPage />} />
            <Route path="/error" element={<NotYetAvailable />} />
            <Route path="/samplok" element={<Samplok />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
