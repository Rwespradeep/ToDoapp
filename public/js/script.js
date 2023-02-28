const trashButton = document.getElementById("trash");
const box = document.querySelector(".box");
const item = document.querySelector(".item");

console.log("Hello, I am the javascript for this TODO app!")

trashButton.addEventListener("click", () =>
{
    box.removeChild(item);
});
