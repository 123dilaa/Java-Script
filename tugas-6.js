const readline = require("readline-sync");


//data awal ((10 data))

let data = [
    { nama: "Ayu", umur: 20, alamat: "Jakarta", email: "ayu@gmail.com" },
    { nama: "Budi", umur: 22, alamat: "Bandung", email: "budi@gmail.com" },
    { nama: "Cici", umur: 19, alamat: "Surabaya", email: "cici@gmail.com" },
    { nama: "Dedi", umur: 23, alamat: "Medan", email: "dedi@gmail.com" },
    { nama: "Eka", umur: 21, alamat: "Bekasi", email: "eka@gmail.com" },
    { nama: "Fajar", umur: 24, alamat: "Bogor", email: "fajar@gmail.com" },
    { nama: "Gina", umur: 20, almat: "Depok", emai: "gina@gmail.com" },
    { nama: "Hadi", umur: 25, alamat: "Tanggerang", email: "hadi@gmail.com "},
    { nama: "Indah", umur: 22, alamat: "Semarang", email: "indah@gmail.com" },
    { nama: "joko", umur: 23, alamat: "Yogyakarta", email: "joko@gmail.com" }
]

module.exports = data;

//// menu
function menu() {
    console.log("\n == MENU === ");
    console.log("1. Lihat Data");
    console.log("2. Tambah Data");
    console.log("3. Hapus Data");
    console.log("4. Keluar");

    const readline = require("readline-sync");

    let pilihan = readline.question("Pilih menu: ");
    console.log("Kamu pilih:", pilihan);

    switch (pilihan) {
        case "1" :
            lihatData();
            break;
        case "2" :
            tambahData();
            break;
        case "3" :
            hapusData();
            break;
        case "4" :
            console.log("Program Selesai.");
            return;
        default:
            console.log("Pilihan tidaj valid!");
    }
    menu(); // ulang ke menu
}
 // LIHAT data (pakai map)
function lihatData() {
    console.log("\n=== DATA USER ===");

    data.map((item, index) => {
        console.log(
        `${index + 1}. ${item.nama} | ${item.umur} tahun | ${item.alamat} | ${item.email}`
        );
    });
}

// tambah data
function tambahData() {
    console.log("\n=== TAMBAH DATA ===");

    let nama = readline.question("Nama: ");
    let umur = readline.question("Umur: ");
    let alamat = readline.question("Alamat: ");
    let email = readline.question("Email: ");

    data.push({ nama, umur, alamat, email });

    console.log("✅ Data berhasil ditambahkan!");
}

// HAPUS DATA
function hapusData() {
    lihatData();
        let index = readline.question("Masukkan nomor yang ingin dihapus: ");
        data.splice(index - 1, 1);

    console.log("❌ Data berhasil dihapus!");
}

menu()