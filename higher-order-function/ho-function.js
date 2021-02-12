let total = 0,
    count = 1;
while (count <= 10) {
    total += count;
    count++
}
console.log(total);

// tanpa function, jika ingin diubah harus mengubah loopingnya
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// dengan function, cukup memanggil functionnya dan masukkan parameter pengulangannya
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
repeatLog(10);

// dengan function 2 argumen
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(10, console.log);
repeat(3, alert);