import React from "react";
import ReactDOM from "react-dom/client";


const element = <span>React Element</span>
const Title = () => (<h1 className="head">slm I am Mariem</h1>);
// React Functional Component
const number = 1000;
const HeadingComponenet = () => (
  <div id="container">
    <h2>{number}</h2>
    {element}
    <Title />
    <Title></Title>
    {Title()}
    <h1>Learn React</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet />);
