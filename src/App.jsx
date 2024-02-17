import React from 'react';
import './App.css';
import Registro from './components/Registro';
import { useState } from 'react';

const App = () => {
  const [alert, setAlert] = useState({ alertText: '', alertType: '', alertState: false });

  const showAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <Registro myAlert={showAlert} alertText={alert.alertText} alertType={alert.alertType} alertState={alert.alertState} />
    </>
  );
};

export default App;
