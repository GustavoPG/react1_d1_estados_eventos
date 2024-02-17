// components/Formulario.jsx
import React from 'react';
import { useState } from "react";
// Importa trim de JavaScript

const Formulario = ({ showAlert }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleNombreChange = (e) => {
        // Utiliza trim adecuadamente para eliminar espacios en blanco
        const trimmedValue = e.target.value.trim();
        setNombre(trimmedValue);
      };

      const handleEmailChange = (e) => {
        // Utiliza trim adecuadamente para eliminar espacios en blanco
        const trimmedValue = e.target.value.trim();
        setEmail(trimmedValue);
      };

      const handlePasswordChange = (e) => {
        // Utiliza trim adecuadamente para eliminar espacios en blanco
        const trimmedValue = e.target.value.trim();
        setPassword(trimmedValue);
      };

      const handlePasswordConfirmChange = (e) => {
        // Utiliza trim adecuadamente para eliminar espacios en blanco
        const trimmedValue = e.target.value.trim();
        setPasswordConfirm(trimmedValue);
      };

    const validateForm = (e) => {
        e.preventDefault();
        if (nombre === '') {
            showAlert({
                alertText: '¡Debe ingresar nombre!',
                alertType: 'danger',
                alertState: true
            });
            return;
        }
        else if (email === '') {
            showAlert({
                alertText: '¡Debe ingresar email!',
                alertType: 'danger',
                alertState: true
            });
            return;
        }
        else if (!validarEmail(email)) {
            showAlert({
                alertText: '¡Debe ingresar email válido!',
                alertType: 'danger',
                alertState: true
            });
            return;
        }
        else if (password === '') {
            showAlert({
                alertText: '¡Debe ingresar contraseña!',
                alertType: 'danger',
                alertState: true
            });
            return;
        }
        else if (passwordConfirm === '') {
            showAlert({
                alertText: '¡Debe confirmar contraseña!',
                alertType: 'danger',
                alertState: true
            });
            return;
        }
        else if (password != passwordConfirm) {
            showAlert({
                alertText: '¡Contraseñas ingresadas no coinciden!',
                alertType: 'danger',
                alertState: true
            });
            return;
        }

        setNombre('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        showAlert({
            alertText: '¡Registro Exitoso!',
            alertType: 'success',
            alertState: false
        });

    };

    const validarEmail = (email) => {
        // Expresión regular para validar un correo electrónico
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    return (
        <>
            <form onSubmit={(e) => validateForm(e)}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={nombre}
                        autoFocus
                        maxLength={50}
                        onChange={handleNombreChange} 
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        maxLength={50}
                        onChange={handleEmailChange} 
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                        maxLength={25}
                        onChange={handlePasswordChange} 
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirmar Contraseña"
                        value={passwordConfirm}
                        maxLength={25}
                        onChange={handlePasswordConfirmChange} 
                    />
                </div>

                <div className="input-group mb-3 d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </>
    );
};

export default Formulario;