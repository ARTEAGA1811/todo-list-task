import React from "react";
import '../styles/Header.css';
import imgAnime from "../assets/imgAnime2.jpg";


function Header() {
  return (
    <div className="row">
      <div className="col d-flex flex-column">
        <figure className="figure mt-3 align-self-center">
          {/* <img src={imgAnime} alt="imgAnime" className="img-fluid rounded-circle mx-auto d-block w-50" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-person-circle text-dark" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </figure>
        <h1 className="row saludo text-primary">Hi, User</h1>
      </div>
    </div>
  );
}

export { Header };