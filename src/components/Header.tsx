import React from "react";
import '../styles/Header.css';
import imgAnime from "../assets/imgAnime2.jpg";


function Header() {
  return (
    <div className="row">
      <div className="col d-flex flex-column">
        <figure className="figure mt-3 align-self-center">
          <img src={imgAnime} alt="imgAnime" className="img-fluid rounded-circle mx-auto d-block w-50" />
        </figure>
        <h1 className="row saludo text-primary">Hi, David</h1>
      </div>
    </div>
  );
}

export { Header };