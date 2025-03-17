import React from "react";
import ('../styles/global.css');

const Clientes = () => {
    return(
        <div className="colaborador-Container">
        <div className="colaborador-Box">
            <form className="form-Colaboradores">
                <input type="text" className="input-Colaboradores" placeholder="Ingrese el Cliente" />
                <button type="submit">Buscar</button>
            </form>
            <div className="tabla-Container">
                <table className="tabla-Colaboradores">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Rubro</th>
                            <th>Tribu</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Urbano</td>
                            <td>Tecnologia</td>
                            <td>Escuelita</td>
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

export default Clientes;