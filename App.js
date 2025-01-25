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

const parent = React.createElement("div",{ id: "parent" },[ 
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ])
  ,  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ])              ]
);
const heading = ReactDOM.createRoot(document.getElementById("heading"));
root.render(heading);
console.log(parent);
