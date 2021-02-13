// 1. HTML Fragments
// const mhs = {
//     nama: 'Anggi Dastariana',
//     umur: 25,
//     NIM: '01035180005',
//     email: 'anggidast@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="NIM">${mhs.NIM}</span>
// </div>`;


// 2. Looping
// const mhs = [{
//         nama: 'Anggi Dastariana',
//         email: 'anggidast@gmail.com'
//     },
//     {
//         nama: 'Kuang Jong',
//         email: 'kuangjong@gmail.com'
//     },
//     {
//         nama: 'Asta Rian',
//         email: 'astarian@gmail.com'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// 4. Nested
// HTML Fragments Bersarang

const mhs = {
    nama: 'Anggi Dastariana',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan',
        'Sinyal dan Sistem',
        'Komunikasi Seluler'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;