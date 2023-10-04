const ListOfCategories = document.querySelector('#categories');
const listItems = ListOfCategories.querySelectorAll('.item');

console.log(`Number of cetegories: ${listItems.length}`);

listItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const categoryElements = item.querySelectorAll("ul li").length;
    console.log(`Elements: ${categoryElements}`);
}
    );