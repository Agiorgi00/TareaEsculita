import React from "react";
import ('../styles/global.css');

const colaboradores = () => {
    return(
    <div className="colaborador-Container">
        <div className="colaborador-Box">
            <form className="form-Colaboradores">
                <input type="text" className="input-Colaboradores" placeholder="Ingrese el colaborador" />
                <button type="submit">Buscar</button>
            </form>
            <div className="tabla-Container">
                <table className="tabla-Colaboradores">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Perfil</th>
                            <th>Cliente</th>
                            <th>Proyecto</th>
                            <th>Tribu</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    )
};

export default colaboradores;
