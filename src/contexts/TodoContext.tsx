import React from 'react'
import { useLocalStorage } from './useLocalStorage';
import { FormatoTodos, Props } from '../interfaces/interfaces';
import { todosTemporal, defaultInitialContext} from './defaultValues';




// Se crea el contexto.
const TodoContext = React.createContext<Props["appUI"]>(defaultInitialContext);

function TodoProvider(props: any) {
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
        <TodoContext.Provider value={{
            state,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            listWord,
            updateTodos,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };