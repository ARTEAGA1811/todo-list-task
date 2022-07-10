import React from "react";
import "../styles/AppUI.css";
import { Header } from "./Header";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoProgressBar } from "./TodoProgressBar";
import { LoadingTasks } from "./LoadingTasks";
import { TodoContext } from "../contexts/TodoContext";

function AppUI() {
    const { state, listWord, updateTodos, deleteTodo } = React.useContext(TodoContext);
    // React interpreta las llaves vacías como un Fragment.
    return (
        <>
            <div className="mi_contenedor">
                <div className="container">
                    <Header />
                    <CreateTodoButton />
                    <hr className="border-primary border-3 opacity-50" />
                    <TodoSearch />

                    <TodoProgressBar />
                    <TodoList>
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
