const basket = ['apples', 'oranges', 'grapes']
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for(let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item);
})

// for of
//Itirating - arrays, strings
for (item of basket) {
    console.log('for', item);
}

// for in. works with objects
// enumerating - for objects
for (item in detailedBasket) {
    console.log(item);
}

