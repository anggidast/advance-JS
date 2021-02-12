// // Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Anggi Dastariana'));

// // Arrow Function
// const tampilNama = nama => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Kuang Jong'));

// // Jika parameter lebih dari satu
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

// // bisa juga ditulis dengan implisit return:
// const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}`;
// console.log(tampilNama('Erik', 'Malam'));

// // Jika tanpa parameter, wajib menggunakan ()
// const tampilNama = () => 'Hello World!';
// console.log(tampilNama());


// // mengembalikan panjang ke dalam array
let mahasiswa = ['Anggi', 'Kuang', 'Dastariana'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Mengembalikan ke dalam object, tutup kurung kurawal dengan () => ({}) supaya terbaca sebagai object, bukan return
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama,
//     jmlHuruf: nama.length
// }));
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function

// Constructor Function, this di dalamnya mengacu kepada object pembungkusnya
// const Mahasiswa = function () {
//     this.nama = 'Anggi';
//     this.umur = 25;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const anggi = new Mahasiswa();

// Arrow Function, constructor function tidak bisa langsung diubah menjadi arrow function, jika method bisa
// tidak ada konsep this dalam arrow function
// const Mahasiswa = function () {
//     this.nama = 'Anggi';
//     this.umur = 25;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         return;
//     }
// }

// const anggi = new Mahasiswa();
// anggi.sayHello();

// Object Literal
// Pada object literal penggunaan this pada arrow function tidak bisa dilakukan
// const mhs1 = {
//     nama: 'Anggi',
//     umur: 25,
//     // sayHello: function () {
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// mhs1.sayHello(); // Halo, nama saya undefined, dan saya undefined tahun

const Mahasiswa = function () {
    this.nama = 'Anggi';
    this.umur = 25;

    // di bawah ini function expression, functionnya tidak kena hoisting, sehingga this akan mencari ke lexical 
    // this.sayHello = function () {
    //     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    // }

    // di bawah ini function declaration, kena hoisting, sehingga saat this dipanggil maka function akan mengecek ke global bukan ke lexical scopenya, mengatasinya bisa dengan menggunakan arrow function.
    // Saat arrow function dijalankan, karena tidak memiliki konsep this, maka akan mencari this ke lexical scopenya
    // setInterval(function () {
    setInterval(() => {
        console.log(this.umur++);
    }, 500)
}
const anggi = new Mahasiswa();

// Implementasi
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        // satu = temp;
        // satu = dua;
        // dua = temp;
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        // console.log(this);
        this.classList.toggle(dua);
    }, 600);
});