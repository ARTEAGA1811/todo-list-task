import React from "react";
import {TodoContext} from "../contexts/TodoContext";

function CreateTodoButton() {

    const {setModalOpen, modalOpen} = React.useContext(TodoContext);

    const onClic = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <div className="row mb-4">
            <div className="col d-flex justify-content-end">
                <button 
                type="button" 
                className="btn btn-success bg-text-success fw-bold" 
                // data-bs-toggle="modal"
                data-bs-dismiss="modal"
                data-bs-target="#miModalE"
                aria-label="Close"
                onClick={onClic}  
                >
                    Add new task
                </button>
            </div>
        </div>
    );
}

export { CreateTodoButton };