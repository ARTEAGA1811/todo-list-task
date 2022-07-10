import React from "react";
import "../styles/TodoList.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoList(props: any) {

    const {listWord, searchValue} = React.useContext(TodoContext);

    // * Se crea una lista de todos
    if (listWord.length) {
        return (
            <div className="row rounded">
                <div className="col mb-5 rounded">
                    <ul className="list-group list-group-flush rounded">
                        {props.children}
                    </ul>
                </div>
            </div>
        );
        // * Si no hay tareas, y SÍ se está buscando una tarea
    } else if (searchValue) {
        return (
            <div className="row pb-5">
                <div className="col">
                    <h2 className="text-info text-center ">
                        Task(s) not found😕
                    </h2>
                    <p className="fw-lighter text-center">
                        Make sure you are writing the correct word
                    </p>
                </div>
            </div>
        );
        // * Si no hay tareas, y NO se está buscando una tarea
        // * Aquí es que la lista general de tareas está vacía
    } else {
        return (
            <div className="row pb-5">
                <div className="col">
                    <h2 className="text-info text-center ">
                        Start adding your task(s) 🙂
                    </h2>
                </div>
            </div>
        );
    }
}

export { TodoList };
