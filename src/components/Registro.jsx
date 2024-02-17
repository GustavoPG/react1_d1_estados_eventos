// components/Registro.jsx
import React from 'react';
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({ myAlert, alertText, alertType, alertState }) => {
    const iconsData = [
        {
            iconName: "lni lni-facebook-oval",
            url: "https://www.facebook.com"
        },
        {
            iconName: "lni lni-linkedin-original",
            url: "https://www.linkedin.com"
        },
        {
            iconName: "lni lni-github-original",
            url: "https://www.github.com"
        }
    ]

    return (
        <>
            <div className="card-body p-5 text-center">
                <h3 className="mb-2">Crea una Cuenta</h3>
                <SocialButton links={iconsData} />
                <h5 className="mt-3">O usa tu email para registrarte</h5>
                <Formulario showAlert={myAlert} />
                <Alert alertText={alertText} alertType={alertType} alertState={alertState} />
                <hr className="my-4" />
            </div>
        </>
    );
};

export default Registro;