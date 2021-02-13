console.log(`${1+1}`);
// console.log(`${alert('halo!')}`); //alert sebagai function

const x = 10;
console.log(`${(x%2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Anggi Dastariana',
    umur: 25,
    NIM: '01035180005',
    email: 'anggidast@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="NIM">${mhs.NIM}</span>
</div>`;

console.log(el);