import React from "react";

export default function Card(props){

    return (
        <li className="concept">
        <img src={props.image} alt="TODO: TITLE" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    );
}