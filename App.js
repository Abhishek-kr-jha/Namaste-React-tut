/**
 * <div id = "parent">
 *    <div id="child">
 *       <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>
 *
 *    </div>
 * <div id="child">
 *       <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>
 *
 *    </div>
 * </div>
 *
 *
 *ReactElement(Object)= HTML(Nrowser understand)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hellow World From React!"
// );

// JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);