// 2. Function Declaration
// const methodeMahasiswa = {
//     makan: function (porsi) {
//         this.energi = +porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodeMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let anggi = Mahasiswa('Anggi', 10);
// let dastariana = Mahasiswa('Dastariana', 20);

// 3. Contructor Function
// function Mahasiswa(nama, energi) {
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi = +porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

// }

// let anggi = new Mahasiswa('Anggi', 10);
// let dastariana = new Mahasiswa('Dastariana', 20);




// Prototype
function Mahasiswa(nama, energi) {
    // * Di bawah ini dibuat untuk mengubungkan object Mahasiswa dengan object lain yang dijadikan sebagai parent:
    // let mahasiswa = Object.create(methodeMahasiswa);

    //* Saat menggunakan this di belakang layar terjadi:
    // let this = Object.create(Mahasiswa.prototype);
    // * Mahasiswa.prototype adalah parent yang secara default ada di dalam constructor function

    this.nama = nama;
    this.energi = energi;

    //* dan terjadi:
    // return this;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
}

let anggi = new Mahasiswa('Anggi', 10);
let dastariana = new Mahasiswa('Dastariana', 20);


// Dengan Menggunakan Class
// Di belakang layar, class menjalankan prototype
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let anggi = new Mahasiswa('Anggi', 10);
// let kuang = new Mahasiswa('Dastariana', 20);