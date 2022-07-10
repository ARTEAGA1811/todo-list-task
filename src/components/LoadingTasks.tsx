import React from "react";

export const LoadingTasks = () => {
    return (
        <div className="row">
            <div className="col d-flex align-items-center flex-column">
                <div className="spinner-border text-primary " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="lead text-info">We are loading your task(s)</p>
            </div>
        </div>
    );
};
