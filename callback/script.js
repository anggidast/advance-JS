// Synchronous Callback

// function tampilkanPesan(callback) {
//    const nama = prompt('Masukkan Nama: ');
//    callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// Synchronous Callback
const mhs = [{
      'nama': 'Sandhika Galih',
      'nrp': '04300000',
      'email': 'sandhika@unpas.ac.id'
   },
   {
      'nama': 'Doddy Ferdiansyah',
      'nrp': '04300001',
      'email': 'doddy@unpas.ac.id'
   },
   {
      'nama': 'Erik',
      'nrp': '04300002',
      'email': 'erik@unpas.ac.id'
   }
];

// synchronous:
// jika sebelum selesai terdapat tugas yang belum selesai, maka selesai tidak akan dicetak
console.log('mulai');
mhs.forEach(m => console.log(m.nama));
console.log('selesai');

// ascynchronous
// dilakukan dengan mengambil data mhs dari sebuah API AJAX
// atau dengan memanfaatkan jQuery
console.log('mulai');
$.ajax({
   url: 'data/mahasiswa.json',
   success: (mhs) => {
      mhs.forEach(m => console.log(m.nama));
   },
   error: (e) => { console.log(e.responseText); }
});
console.log('selesai');