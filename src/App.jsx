import React from 'react';
import './App.css';
import Registro from './components/Registro';
import Alert from './components/Alert';
import { useState } from 'react';

const App = () => {
  const [alert, setAlert] = useState({ alertText: '', alertType: '', alertState: false });

  const showAlert = (newAlert) => { setAlert(newAlert) };

  return (
    <>
      <div className="card-body p-5 text-center">
        <Registro myAlert={ showAlert } alertText={ alert.alertText } alertType={ alert.alertType } alertState={ alert.alertState } />
        <Alert alertText={ alert.alertText } alertType={ alert.alertType } alertState={ alert.alertState } />
        <hr className="my-4" />
      </div>
    </>
  );
};

export default App;

// Estimada Alba, te comento que tuve una confusión con el desafío, ya que creo se contradice el requerimiento
// N° 2 que dice componente Registro importa los otros 3 componentes: SocialButton, Formulario y Alert. Pero en
// requerimiento 5 dice que en App se debe pasar a Registro y Alert lo que implicaría importarlos en App. Esto me hizo 
// dar muchas vueltas, despúes de varios días haciendo y deshaciendo código finalmente lo dejé así, espero este bien
// implementado. Saludos.