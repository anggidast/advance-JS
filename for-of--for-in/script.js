// for..of
// Array
const mhs = ['Anggi', 'Asta', 'Kuang'];

// dengan for basic
for (let i = 0; i < mhs.length; i++) {
   console.log(mhs[i]);
}

// dengan forEach
mhs.forEach(m => console.log(m));

// dengan for..of
// tiap-tiap elemen direpresentasikan dengan m dari array mhs
for (const m of mhs) {
   console.log(m);
}


// String
// forEach tidak bisa digunakan untuk string
const nama = 'Dastariana';
for (const n of nama) {
   console.log(n);
}

const mhs = ['Anggi', 'Asta', 'Kuang'];
mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i+1}`));

// untuk mendapatkan index pada for..of gunakan methode entries() dan destruct var nya:
for (const [i, m] of mhs.entries()) {
   console.log(`${m} adalah mahasiswa ke-${i+1}`);
}


// NodeList
// looping NodeList dapat dilakukan dengan forEach pada browser terbaru
const liNama = document.querySelectorAll('.nama');

// dengan forEach
// liNama.forEach(n => console.log(n.textContent));

// dengan for..of
for (const n of liNama) {
   console.log(n.innerHTML); // innerHTML bisa diganti dengan textContent
}


// Arguments
// penampung untuk function dengan parameter kosong
// semua method array (reduce, forEach dll) tidak bisa digunakan pada arguments
function jumlahkanAngka() {
   let jumlah = 0;
   for (const a of arguments) {
      jumlah += a;
   }
   return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// for..in 
const mhs = {
   nama: 'Anggi',
   umur: 25,
   email: 'anggidast@gmail.com'
}

for (const m in mhs) {
   console.log(m);
}