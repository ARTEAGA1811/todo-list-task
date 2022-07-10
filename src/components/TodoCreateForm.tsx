import React from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoCreateForm() {

    const { modalOpen, setModalOpen, addTodo } = React.useContext(TodoContext);

    // Creamos un use estate para detectar los cambios.
    const [newTodoValue, setNewTodoValue] = React.useState("");


    const miOnSubmit = (e: any) => {
        // * cuando el formulario se envie le decimos que no se recarge la pagina
        e.preventDefault();
        addTodo(newTodoValue);
        // Close the modal
        setModalOpen(false);
    }

    const miOnChange =(event: any) =>{
        setNewTodoValue(event.target.value);
    }



    const openCloseModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <form onSubmit={miOnSubmit}>
            <div className="encabezado">
                <h5 className="modal-title text-primary" id="exampleModalLabel">Add Task</h5>
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={openCloseModal}
                ></button>
            </div>
            <div className="cuerpo-miModal">

                <label className="form-label">Mi task</label>
                <input 
                type="text" 
                className="form-control" 
                maxLength={65} 
                placeholder="Write here your new task" 
                value={newTodoValue}
                onChange={miOnChange}
                required
                />

            </div>
            <div className="footer-miModal">
                <button type="button" className="btn btn-secondary" onClick={openCloseModal}>Close</button>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </div>
        </form>
    );
}

export { TodoCreateForm };