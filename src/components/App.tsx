import React from "react";
import AppUI from "./AppUI";
import { FormatoTodos } from "../interfaces/interfaces";


const todosTemporal: FormatoTodos[] = [
    {
        id: 1,
        text: "Hacer ejercicio",
        completed: false,
    },
    {
        id: 2,
        text: "Tomar curso de React",
        completed: true,
    },
    {
        id: 3,
        text: "Realizar el bootcamp",
        completed: false,
    },
    {
        id: 4,
        text: "Preparar la cena",
        completed: true,
    },
];

function useLocalStorage(itemName: string, initialValue: FormatoTodos[]) {

    // * Creamos los estados de carga
    const [state, setState] = React.useState({
        loading: true,
        error: false,
    });

    // * Aquí guardo la lista de todos
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            // * Ahora se usará el LocalStorage para guardar las tareas
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem: FormatoTodos[];

            // * Verificamos si existe una lista de tareas en el LocalStorage,
            // * si no existe, se crea una lista vacía.
            if (localStorageItem) {
                parsedItem = JSON.parse(localStorageItem);
            } else {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            }

            setItem(parsedItem);
            setState({
                loading: false,
                error: false,
            });

        }, 1000);
    });


    /**
     * @param newItem: lista de todos actualizada
     * * Se guarda en el LocalStorage la lista de todos
     * * Se actualiza el estado de la lista de todos
     */
    const saveItem = (newItem: FormatoTodos[]) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return { item, saveItem, state };
}

function App() {
    const { item: todos, saveItem: saveTodos, state } = useLocalStorage("TODOS_V1", todosTemporal);

    //Aquí guardo el valor de la búsqueda
    const [searchValue, setSearchValue] = React.useState("");

    //ejm: 1/3
    const completedTodos: number = todos.filter((todo: FormatoTodos) => todo.completed).length;
    const totalTodos: number = todos.length;

    //Obtiene un array de los TODOs que cumplen con la busqueda.
    let listWord: FormatoTodos[] | [] = [];
    listWord = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });

    /**
     *
     * @param {int} id : id de la tarea
     * * usa un map para recorrer la lista de TODOs
     * * y cuando encuentra el id de la tarea, la cambia a completed o viceversa
     * * al final actualiza el estado de la lista de TODOs
     */
    const updateTodos = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        saveTodos(newTodos);
    };

    /**
     *
     * @param {int} id : id de la tarea
     * * usa un filter para recorrer la lista de TODOs
     * * y cuando encuentra el id de la tarea, no toma en cuenta la tarea
     * * al final actualiza el estado de la lista de TODOs
     */
    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        saveTodos(newTodos);
    };



    return (
        <AppUI
            state={state}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            listWord={listWord}
            updateTodos={updateTodos}
            deleteTodo={deleteTodo}
        />
    );
}

export { App };
