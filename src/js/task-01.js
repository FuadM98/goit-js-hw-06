const listItemRef = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${listItemRef.length}`);

listItemRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
