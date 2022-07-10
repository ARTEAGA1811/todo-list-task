import React from "react";
import { FormatoTodos } from "../interfaces/interfaces";

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

export {useLocalStorage};