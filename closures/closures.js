function init() {
    let nama = 'Anggi';

    // function tampilNama(nama) {
    //     console.log(nama);
    // }
    // console.log(tampilNama()); /* output: Anggi dan undefined karena hoisting */
    // tampilNama(); /* output: Anggi */
    // return tampilNama; /* mengembalikan function, tanpa menjalankannya, output kosong, function baru jalan sebagian, functionnya harus disimpan ke dalam variabel */

    // Program di atas dapat diperingkas dengan (anonymous function):
    return function (nama) {
        console.log(nama);
    }

}
// init();
let panggilNama = init(); /* simpan function ke dalam variabel */
panggilNama('Asta'); /* lalu panggil variabel yg berisi function tsb untuk menjalankan functionnya */




// Function Factories
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Anggi');
// selamatMalam('Dastariana');


// Private Methode
let add = function () {
    let counter = 0; /* counter menjadi private, tidak bisa diakses dari luar, tetepi nilai dipertahankan karena menjadi closure */
    return function () {
        return ++counter;
    }
}

let a = add();
console.log(a());
console.log(a());
console.log(a());

// tanpa masukkan function ke variabel
// function dibungkus ke dalam immediately invoked function
let add = (function () {
    let counter = 0; /* counter menjadi private, tidak bisa diakses dari luar, tetepi nilai dipertahankan karena menjadi closure */
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());