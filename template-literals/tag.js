const nama = 'Anggi Dastariana';
const umur = 25;

function highlight(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);
document.body.innerHTML = str;