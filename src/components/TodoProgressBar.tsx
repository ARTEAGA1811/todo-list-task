import React from "react";
import { Props } from "../interfaces/interfaces";

function TodoProgressBar({ completedTodos, totalTodos }: Props["todoProgressBar"]) {
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
