import react from 'react';
import ('../styles/global.css');

const login = () => {
    return(
        <div className='login-container'>
            <div className='login-box'>
                <h2>Iniciar Sesión</h2>
                <form>
                    <input type="email" placeholder='Correo Electronico'/>
                    <input type="password" placeholder='Contraseña'/>
                    <button type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default login;