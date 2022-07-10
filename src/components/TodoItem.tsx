import React from "react";
import { Props } from "../interfaces/interfaces";

function TodoItem(props: Props["todoItem"]) {

    return (
        <li className="list-group-item">
            <div className="d-flex align-items-center mb-2">
                <div className="input-group">
                    {
                    /** 
                    * * Si la tarea no está completa, se coloca un borde en el contenedor
                    * * del checkbox
                    */}
                    <div className={
                        "input-group-text col-auto py-0" 
                        +(!props.completed
                            ? "border border-primary"
                            : "")
                        }
                    >
                        {
                        /** 
                        * @param onChange: ejecuta el metodo de actualizar el estado de las tareas
                        * @param checked: Se marca como checked si la tarea está completada
                        */
                        }
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            value=""
                            aria-label="Checkbox for following text input"
                            onChange={props.updateTodos}  
                            checked={props.completed}                        
                        />
                    </div>
                    {
                    /**
                     * * Si la tarea NO está completa:
                     * * se coloca un borde en el texto
                     * 
                     * * Si la tarea está completa:
                     * * solo se tacha la tarea.
                    */}
                    <input
                        type="text"
                        className={
                            "form-control-plaintext col ps-3 border rounded-end shadow-sm" 
                            + (!props.completed ? 
                                " border border-primary border-start-0"
                                : " text-decoration-line-through")
                        }
                        value={props.text}
                        readOnly
                    />
                </div>
                <div className="ms-3">
                    {
                    /**
                     * * @param onClick: ejecuta el metodo de eliminar la tarea
                    */}
                    <button
                        className="btn text-danger"
                        onClick={props.deleteTodo}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
}

export { TodoItem };
