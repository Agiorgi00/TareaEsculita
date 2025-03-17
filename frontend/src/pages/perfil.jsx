import React from "react";
import ('../styles/global.css');

const Perfil = () => {
    return(
        <div className="colaborador-Container">
        <div className="colaborador-Box">
            <form className="form-Colaboradores">
                <input type="text" className="input-Colaboradores" placeholder="Ingrese el Perfil" />
                <button type="submit">Buscar</button>
            </form>
            <div className="tabla-Container">
                <table className="tabla-Colaboradores">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Qa</td>
                            <td>
                                <button className="editar">Editar</button>
                                <button className="eliminar">Eliminar</button>
                            </td>
                            </tr>
                         </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default Perfil;