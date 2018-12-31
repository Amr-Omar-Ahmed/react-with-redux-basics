import React from "react";

const Person = props => {
  return (
    <div onClick={props.clicked}>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

export default Person;
