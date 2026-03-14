const readline = require("readline-sync");

// class kendaraan
class Kendaraan {
    constructor(id, nama, harga) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
    }
}

// class pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }
}

// data kendaraan
let daftarKendaraan = [
    new Kendaraan(1, "Toyota Avanza", 300000),
    new Kendaraan(2, "Daihatsu Xenia", 250000),
    new Kendaraan(3, "Toyota Innova", 350000),
    new Kendaraan(4, "Suzuki Ertiga", 450000),
    new Kendaraan(5, "Toyota Alphard", 550000)
];

let daftarPelanggan = [];

// tampilkan kendaraan
function tampilkanKendaraan() {
    console.log("\n===== DAFTAR KENDARAAN =====");
    console.log("ID | Nama Kendaraan | Harga Sewa");
    daftarKendaraan.forEach(k => {
        console.log(`${k.id} | ${k.nama} | Rp${k.harga}`);
    });
}

// pesan kendaraan
function pesanKendaraan() {
    console.log("--- Pesan Kendaraan ---");

    let nama = readline.question("Nama Pelanggan: ");
    let nomor = readline.question("Nomor Telepon: ");

    tampilkanKendaraan();

    let pilih = parseInt(readline.question("Pilih ID Kendaraan: "));
    let kendaraan = daftarKendaraan.find(k => k.id == pilih);

    if (!kendaraan) {
        console.log("Mobil yang anda pilih tidak ada");
        return;
    }

    let pelanggan = new Pelanggan(nama, nomor);
    pelanggan.sewaKendaraan(kendaraan);
    daftarPelanggan.push(pelanggan);

    cetakStruk(pelanggan);
}

// cetak struk
function cetakStruk(pelanggan) {
    console.log("\n--- STRUK PENYEWAAN ---");
    console.log("Nama Pelanggan :", pelanggan.nama);
    console.log("Nomor Telepon  :", pelanggan.nomorTelepon);
    console.log("Kendaraan      :", pelanggan.kendaraanDisewa.nama);
    console.log("Harga Sewa     : Rp" + pelanggan.kendaraanDisewa.harga);
    console.log("------------------------");
}
5
// tampilkan pelanggan
function tampilkanPelanggan() {
    console.log("\n===== DAFTAR PELANGGAN MENYEWA =====");

    if (daftarPelanggan.length === 0) {
        console.log("Belum ada pelanggan.");
        return;
    }

    daftarPelanggan.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nama} | ${p.nomorTelepon} | ${p.kendaraanDisewa.nama}`);
    });
}

// menu
while (true) {
    console.log("\n===== SISTEM TRANSPORTASI =====");
    console.log("1. Lihat Daftar Kendaraan");
    console.log("2. Pesan Kendaraan");
    console.log("3. Daftar Pelanggan");
    console.log("4. Keluar");

    let menu = readline.question("Pilih menu: ");

    if (menu == 1) tampilkanKendaraan();
    else if (menu == 2) pesanKendaraan();
    else if (menu == 3) tampilkanPelanggan();
    else if (menu == 4){
        console.log("Terima kasih!"); break; } else { console.log("Menu tidak tersedia"); }
}