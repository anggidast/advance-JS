const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const angkaBaru = []
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(angkaBaru);

// filter, menyaring isi array
// const angkaBaru = angka.filter(a => a >= 3);
// console.log(angkaBaru);


// mengalikan semua elemen pada array dengan 2
// map, memanipulasi dengan ke dalam array yang baru
// const angkaBaru = angka.map(a => a * 2);
// console.log(angkaBaru);


// jumlahkan seluruh elemen pada array
// reduce, menyatukan seluruh elemen array
// const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(angkaBaru);


// Method Chaining
// cari angka > 5
// kalikan angka tsb dengan 3
// jumlahkan seluruh angka tsb
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);