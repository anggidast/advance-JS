// Rest Parameter

// function myFunct(...myArgs) {
//    return myArgs;
//    return Array.from(arguments);
//    return[...arguments];
// }

// console.log(myFunct(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5 ]


// function jumlahkan(...params) {
//    // let total = 0;
//    // for (const el of params) {
//    //    total += el;
//    // }
//    // return total;

//    return params.reduce((total, el) => total + el);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// Filtering
function filterBy(type, ...values) {
   return values.filter(el => typeof el === type);
}
console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));