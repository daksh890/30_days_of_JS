document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent clicked.");
  },
  false //Bubbling
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    // e.stopPropagation(); TO STOP PROPAGATION OF EVENT...
    console.log("Parent clicked.");
  },
  true //Capturing
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child clicked.");
  },
  false //Bubbling
);
