// Cara membuat object pada Javascript
// 1. Object literal
// PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Anggi',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Dastariana',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration
// Masih melakukan duplikasi semua methode dibelakang layar setiap instansiasi variabel
// Kekurangan, kurang efektif meskipun menggunakan Object.create()
// Di bawah ini object dipisah untuk menghindari duplikasi
const methodeMahasiswa = {
    makan: function (porsi) {
        this.energi = +porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
}

function Mahasiswa(nama, energi) {
    // let mahasiswa = {};
    // Penggunaan Object.create() untuk menghubungkan object function dengan object literal yang berhubungan
    let mahasiswa = Object.create(methodeMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // Dengan Object.create() pemanggilan di bawah ini tidak diperlukan
    // Setiap methode dari object yang terpisah dibuat maka harus didaftarkan di dalam object function utama
    // mahasiswa.makan = methodeMahasiswa.makan;
    // mahasiswa.main = methodeMahasiswa.main;

    // 2 methode di bawah ini akan diduplikasi setiap instansiasi
    // mahasiswa.makan = function (porsi) {
    //     this.energi = +porsi;
    //     console.log(`Halo ${this.nama}, selamat makan!`);
    // }

    // mahasiswa.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`Halo ${this.nama}, selamat bermain!`);
    // }

    return mahasiswa;
}

let anggi = Mahasiswa('Anggi', 10);
let dastariana = Mahasiswa('Dastariana', 20);

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