// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration'));

// pilih hanya 'JAVASCRIPT LANJUTAN'
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing-masing video
    .map(item => item.dataset.duration)

    // ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // "10:30" -> ["10", "30"] dengan menggunakan split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })

    // jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan -= jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;

// console.log(jsLanjutan);




// let iAm,
//     yourOnly = 1,
//     iDont = `I don't want to be your ${typeof(yourOnly)} `;
// if (iAm != yourOnly) {
//     yourOnly++;
//     console.log(iDont + yourOnly);
// }