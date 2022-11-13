const categories = document.querySelectorAll('.item');
const categoriesQuantity = categories.length;
const message = `Number of categories: ${categoriesQuantity}`;
console.log(message);

const firstCategory = document.querySelector('.item');
const firstCategoryTitle = firstCategory.firstElementChild.textContent;
console.log(`Category: ${firstCategoryTitle}`);

const firstElementQuantity = firstCategory.lastElementChild.children.length;
console.log(`Elements: ${firstElementQuantity}`);

const secondCategory = firstCategory.nextElementSibling;
const secondCategoryTitle = secondCategory.firstElementChild.textContent;
console.log(`Category: ${secondCategoryTitle}`);

const secondElementQuantity = secondCategory.lastElementChild.children.length;
console.log(`Elements: ${secondElementQuantity}`);

const thirdCategory = secondCategory.nextElementSibling;
const thirdCategoryTitle = thirdCategory.firstElementChild.textContent;
console.log(`Category: ${thirdCategoryTitle}`);

const thirdElementQuantity = thirdCategory.lastElementChild.children.length;
console.log(`Elements: ${thirdElementQuantity}`);
