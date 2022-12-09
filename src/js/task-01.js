// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

const qwerty = list.forEach((item, i)=> {
    const nameCategories = item.firstElementChild.textContent
    const childListCount = item.lastElementChild.childElementCount;
    console.dir(
`Category: ${nameCategories}
Elements: ${childListCount}`);    
})



