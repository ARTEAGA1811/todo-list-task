import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalCreateTask.css";


function ModalCreateTask(props: any) {

    const myModal = document.getElementById('miModal')!;


    return ReactDOM.createPortal(
        <div className="miPropioModal-contenedor" id="miModalE">
            <div className="miPropioModal" role="document">
                {props.children}
            </div>
        </div>
        ,
        myModal
    );
}

export { ModalCreateTask };