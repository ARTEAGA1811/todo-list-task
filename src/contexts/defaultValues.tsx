import { FormatoTodos, Props } from "../interfaces/interfaces";

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


const defaultInitialContext: Props["appUI"] = {
    state: {
        loading: true,
        error: false,
    },
    searchValue: "",
    setSearchValue: (value: string) => {},
    completedTodos: 0,
    totalTodos: 0,
    listWord: [],
    updateTodos: (id: number) => {},
    deleteTodo: (id: number) => {},
}

export { todosTemporal, defaultInitialContext};