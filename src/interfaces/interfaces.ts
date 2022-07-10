export interface FormatoTodos {
    id: number,
    text: string,
    completed: boolean,
}


export interface Props {
    appUI: {
        state: {
            loading: boolean,
            error: boolean,
        },
        searchValue: string,
        setSearchValue: (value: string) => void,
        completedTodos: number,
        totalTodos: number,
        listWord: FormatoTodos[],
        updateTodos: (id: number) => void,
        deleteTodo: (id: number) => void,
    };

    todoSearch: {
        searchValue: string,
        setSearchValue: (value: string) => void,
    }


    todoProgressBar: {
        completedTodos: number,
        totalTodos: number,
    }

    todoList: {
        listLength: number,
        searchValue: string,
        children?: React.ReactNode,
    }

    todoItem: {
        key: number,
        text: string,
        completed: boolean,
        updateTodos: () => void,
        deleteTodo: () => void,
    }
}