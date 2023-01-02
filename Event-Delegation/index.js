document.querySelector("#category").addEventListener("click", (e) => {
  console.log("Category Parent clicked", e.target);
  if (e.target.tagName == "LI") {
    // window.location.href = "/" + e.target.id;
  }
});
