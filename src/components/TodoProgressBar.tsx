import React from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoProgressBar() {

    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    
    const calculatePercentage = () => {
        //alert(`${completedTodos}/${totalTodos}`);
        return (completedTodos / totalTodos) * 100;
    };

    const stylePercentage = {
        width: `${calculatePercentage()}%`,
    }
    return (
        <div className="row mb-3">
            <div className="col">
                <div className="progress w-100 col">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={stylePercentage}
                    ></div>
                </div>
                <p className="lead">
                    <small>
                        <em>
                            {completedTodos}/{totalTodos} task(s) completed
                        </em>
                    </small>
                </p>
            </div>
        </div>
    );
}

export { TodoProgressBar };
