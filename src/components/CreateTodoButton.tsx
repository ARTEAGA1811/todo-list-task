import React from "react";

function CreateTodoButton() {

    const onClic = () => {
        alert("Here is the button");
    }

    return (
        <div className="row mb-4">
            <div className="col d-flex justify-content-end">
                <button className="btn btn-success bg-text-success fw-bold" onClick={onClic}>Add new task</button>
            </div>
        </div>
    );
}

export { CreateTodoButton };