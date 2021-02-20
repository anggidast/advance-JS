// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Anggi Dastariana'];

// // const [salam, satu, dua, nama] = perkenalan;

// // Melompati elemen untuk dipetakan sebagian saja
// const [salam, , , nama] = perkenalan;

// console.log(salam, nama);

// // Swap items

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return value pada function
// function mengembalikan array, array langsung ditangkap oleh destructuring var

// function coba() {
//     return [1, 2]
// }

// // const [a, b] = coba();
// // console.log(a, b); // 1 2

// // Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);

// // Destructuring Object

// const mhs = {
//     nama: 'Anggi Dastariana',
//     umur: 25
// }

// // nama variabel harus sama dengan property pada object
// const {nama, umur} = mhs;
// console.log(nama); // Anggi Dastariana

// // Assignmnet tanpa deklarasi

// ({nama, umur} = {
//     nama: 'Anggi Dastariana',
//     umur: 25
// });
// console.log(nama); // Anggi Dastariana

// // Assign ke variabel baru, untuk var beda dengan properti

// const mhs = {
//     nama: 'Anggi Dastariana',
//     umur: 25
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n, u); // Anggi Dastariana 25

// // Memberikan default value

// const mhs = {
//     nama: 'Anggi Dastariana',
//     umur: 25,
//     // jika email ada:
//     email: 'anggidast@gmail.com'
// }

// const {
//     nama: n,
//     umur: u,
//     // jika email tidak ada:
//     email: e = 'email@default.com'
// } = mhs;
// console.log(e); // anggidast@gmail.com

// // Rest parameter
// const mhs = {
//     nama: 'Anggi Dastariana',
//     umur: 25,
//     email: 'anggidast@gmail.com'
// }

// const {
//     nama: n,
//     ...values
// } = mhs;
// console.log(n, values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Anggi Dastariana",
  umur: 25,
  email: "anggidast@gmail.com",
};

// cara normal:
function getIdMhs(mhs) {
  return mhs.id;
}

console.log(getIdMhs(mhs));

// dengan destructuring:
function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
