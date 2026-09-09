//Declarative : Declarative programming means you describe the result you want, and the system figures out the steps needed to achieve it.
//Imperative : Imperative programming means you give the computer the specific steps it needs to follow to accomplish something.

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root
    
*/

//this is imperative coding
const h1 = document.createElement("h1");

h1.textContent = "Hello World";

h1.className = "header";

const root = document.getElementById("root");

root.appendChild(h1);