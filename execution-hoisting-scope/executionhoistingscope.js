// console.log(nama); /* output console undefined */
// var nama = 'Anggi';

// creation phase pada Global Context
// secara default jika ada var = undefined, dan jika ada function = fn(), sebelum program dieksekusi
// hal tersebut dinamakan hoisting
// window = global object
// this = window

// execution phase
// proses eksekusi code
// line 1 dieksekusi, jika ada variabel (line 2) nama sudah berisi undefined, dan akan diconsole
// line 2 nama didefinisi, berisi 'Anggi', namun sudah terlanjur diconsole
// jika nama tidak didefinisi, maka program akan mendeteksi bahwa nama belum dideklarasi dan output error


// console.log(sayHello); /* akan tampil keseluruhan functionnya */
// console.log(sayHello()); /* ekseskusi function, akan tampil return dari function dengan variabel undefined karena hoisting */

// var nama = 'Anggi';
// var umur = 25;

// console.log(sayHello()); /* eksekusi function, akan tampil sesuai yang diharapkan (ditulis sebelum functionnya tidak masalah) */

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }


// function akan membuat Local Execution Context (di luar Global)
// yang di dalamnya ada creation dan execution
// bedanya dengan global selain dapat mengakses window juga dapat mengakses arguments (parameter lokal default)
// terdapat hoisting lokal juga

// var nama = 'Anggi Dastariana';
// var username = '@anggidast';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));
// console.log(cetakURL('@emaherviana')); /* output akan menjadi @emaherviana sebagai argument yang dikirim ke parameter username, maka username yang di dalam function akan menggunakan argumennnya dari parameter (berhubungan dengan scope) username argumen sebagai lokal akan dicek terlebih dahulu, jika tidak ada baru dicari di global*/

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a(); /* output abc */
// sebelum console.log, setiap functionnya akan hoisting isi functionnya, setelah itu baru eksekusi console.log

function satu() {
    var nama = 'Anggi';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Kuang';
satu();
dua('Jong');
console.log(nama);