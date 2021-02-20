// Destructur function return

function kalkulasi(a, b) {
   return [a + b, a - b, a * b, a / b];
}

// normal
const jumlah = penjumlahanPerkalian(2, 3)[0];
const kali = penjumlahanPerkalian(2, 3)[1];
console.log(jumlah, kali); // 5 6

// dengan destructuring
// urutannya harus sesuai dengan function
const [tambah, kurang, kali, bagi, modulus = 'tidak ada'] = kalkulasi(2, 3);
console.log(modulus); // tidak ada 

// jika ingin penggunaannya acak (tidak urut):
function kalkulasi(a, b) {
   return {
      tambah: a + b,
      kurang: a - b,
      kali: a * b,
      bagi: a / b
   }
}
const { bagi, tambah, kurang, kali, modulus = 'tidak ada' } = kalkulasi(2, 3);
console.log(bagi); //0,66666
console.log(modulus); // tidak ada


// Destructur function arguments
const mhs1 = {
   nama: 'Anggi Dastariana',
   umur: 25,
   email: 'anggidast@gmail.com',
   nilai: {
      tugas: 90,
      uts: 75,
      uas: 80
   }
}

// cara normal:
function cetakMhs(nama, umur) {
   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
}

console.log(cetakMhs(mhs1.nama, mhs1.umur)); // Halo, nama saya Anggi Dastariana, saya berumur 25 tahun

// atau:
function cetakMhs(mhs) {
   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
}

console.log(cetakMhs(mhs1)); // Halo, nama saya Anggi Dastariana, saya berumur 25 tahun

// dengan destructuring dan bersarang:
function cetakMhs({ nama, umur, nilai: { uas } }) {
   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, nilai UAS saya ${uas}`;
}

console.log(cetakMhs(mhs1)); //Halo, nama saya Anggi Dastariana, saya berumur 25 tahun, nilai UAS saya 80