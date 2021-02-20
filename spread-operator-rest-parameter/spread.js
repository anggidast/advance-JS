// // Spread Operator
// // memecah iterables menjadi single element

// const mhs = ['Anggi', 'Asta', 'Kuang'];
// console.log(...mhs); // Anggi Asta Kuang
// console.log(...mhs[0]); // A n g g i


// // Membuat array dari nodelist
// const liMhs = document.querySelectorAll('li');

// // cara lama:
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//    mhs.push(liMhs[i].textContent);
// }

// // dengan spread dan map:
// // tanpa spread map tidak bisa digunakan karena nodelist tidak memeliki method map yang mana hanya untuk array
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


// // Membuat animasi h1 perhuruf dengan memasukkan setiap huruf ke dalam span
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// console.log(huruf);
// nama.innerHTML = huruf;