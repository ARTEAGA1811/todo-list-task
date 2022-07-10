import React from "react";
import "../styles/AppUI.css";
import { Header } from "./Header";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoProgressBar } from "./TodoProgressBar";
import { LoadingTasks } from "./LoadingTasks";
import { Props } from "../interfaces/interfaces";

function AppUI({
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    listWord,
    updateTodos,
    deleteTodo,
    state}: Props["appUI"]) {
    // React interpreta las llaves vacías como un Fragment.
    return (
        <>
            <div className="mi_contenedor">
                <div className="container">
                    <Header />
                    <CreateTodoButton />
                    <hr className="border-primary border-3 opacity-50" />
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />

                    <TodoProgressBar
                        completedTodos={completedTodos}
                        totalTodos={totalTodos}
                    />
                    <TodoList
                        listLength={listWord.length}
                        searchValue={searchValue}
                    >
                        {state.error && <p>Hubo un error al cargar la lista</p>}
                        {state.loading && <LoadingTasks />}
                        {(!state.loading && !state.error) &&
                            listWord.map((item) => (
                                <TodoItem
                                    key={item.id}
                                    text={item.text}
                                    completed={item.completed}
                                    updateTodos={() => updateTodos(item.id)}
                                    deleteTodo={() => deleteTodo(item.id)}
                                />
                            ))
                        }
                    </TodoList>
                </div>
            </div>
        </>
    );
}

export default AppUI;
