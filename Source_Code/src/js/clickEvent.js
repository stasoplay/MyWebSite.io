const items = document.querySelectorAll(".block");
const footer = document.querySelector(".links");
const header = document.querySelector("h1");
addItemListener(footer);
addItemListener(header);

items.forEach((item) => {
    addItemListener(item);
});

function addItemListener(item) {
    item.addEventListener("click", () => {
        item.classList.add("clicked");
        setTimeout(() => {
            item.classList.remove("clicked");
        }, 100);
    });
}
