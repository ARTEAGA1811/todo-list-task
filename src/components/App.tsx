import React from "react";
import AppUI from "./AppUI";
import { TodoProvider} from "../contexts/TodoContext";



function App() {
    

    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
       
    );
}

export { App };
