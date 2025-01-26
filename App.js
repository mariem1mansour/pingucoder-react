/**
 * <div id="parent">
 *     <div id="child">
 *         <h1> I am h1 Tag</h1>
 *         <h2> I am h2 Tag</h2>
 *     </div>
 *     <div id="child2">
 *         <h1> I am h1 Tag</h1>
 *         <h2> I am h2 Tag</h2>
 *     </div>
 * </div>
 *
 * createElement() => html browser understand
 *
 * jsx
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "learn parcel"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

// ignitting our app
