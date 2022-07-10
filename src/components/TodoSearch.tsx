import React from "react";
import {Props} from "../interfaces/interfaces";

function TodoSearch({searchValue, setSearchValue}: Props["todoSearch"]) {
        
    const searchTask = (event: any) => {
        setSearchValue(event.target.value);
    };


    return (
        <div className="row justify-content-center mb-2">
            <div className="col px-5">
                <div className="input-group mb-3 shadow-sm">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Look for a task"
                        aria-label="Look for a task"
                        aria-describedby="button-addon2"
                        onChange={searchTask}
                    />
                    {/* <button
                        class="btn btn-outline-secondary text-bg-primary "
                        type="button"
                        id="button-addon2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export { TodoSearch };
