import React from "react";
import ('../styles/global.css');

const inicio = () => {
    return(
        <div className="inicio-Container">
            <div className="inicio-box">
                <button>Colaboradores</button>
                <button>Clientes</button>
                <button>Proyecto</button>
                <button>Tribus</button>
            </div>
        </div>
    );
};

export default inicio;