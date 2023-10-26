import React from "react";
import ReactDOM from "react-dom/client";

//React.createElements ReactElement => Object=> HTMLElements(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX - ITS HTML LIKE SYNTAX or XML Syntax
// JSX =>React.CreateElement=> JS OBJECT => HtmlElement(render);

// const heading = <h1 className="head">Namaste React using JSX🚀</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));

// React Components

// React Functional  Component
// const HeadingComponent = ()=>{
//   return <h1 className="heading">Namaste React Functional Component</h1>

// }

const Title = ()=>(<h1 className="head">Namaste React using JSX🚀</h1>);

const numnber = 10000;

const HeadingComponent2 = () => (
  <div id="container">
     {/* Componet composition => component inside component */}
    <Title/>
    {numnber} 
    {Title()}
   
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

root.render(<HeadingComponent2/>);
