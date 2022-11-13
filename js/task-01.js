const categoriesQuantity = document.querySelectorAll('h2').length;
const message = `Number of categories: ${categoriesQuantity}`;
console.log(message);

const listItems = document.querySelectorAll('.item');
for (const item of listItems) {
  const categoryTitle = item.firstElementChild.textContent;
  const elementsQuantity = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle} \n Elements: ${elementsQuantity}`);
}
