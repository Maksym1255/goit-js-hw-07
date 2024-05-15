const liCategories = document.querySelectorAll(".item");
console.log(`Namber of categories: ${liCategories.length}`);

liCategories.forEach((elem) => {
    const itemTitel = elem.querySelector("h2").textContent;
    const itemLi = elem.querySelectorAll("li").length;

    console.log(`Category: ${itemTitel}`);
    console.log(`Elements: ${itemLi}`);
})