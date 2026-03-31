const readline = require("readline-sync");

// Data awal
let produk = [
    { id: 1, nama: "Laptop", harga: 7000000 },
    { id: 2, nama: "Mouse", harga: 150000 },
    { id: 3, nama: "Keyboard", harga: 300000 },
    { id: 4, nama: "Monitor", harga: 2000000 },
    { id: 5, nama: "Printer", harga: 1200000 }
];

// FUNCTION tampilkan produk
function tampilkanProduk() {
    console.log("\n📦 ===== DAFTAR PRODUK =====");

    if (produk.length === 0) {
        console.log("Produk kosong!");
        return;
    }

    produk.forEach(({ nama, harga }, index) => {
        console.log(`${index + 1}. ${nama} - Rp ${harga.toLocaleString()}`);
    });
}

// FUNCTION tambah produk
function tambahProduk() {
    console.log("\n➕ ===== TAMBAH PRODUK =====");

    const nama = readline.question("Nama Produk: ");
    const harga = readline.questionInt("Harga: ");

    const produkBaru = {
        id: produk.length + 1,
        nama,
        harga
    };

    // spread operator
    produk = [...produk, produkBaru];

    console.log("\n=================================");
    console.log(`✅ Produk "${nama}" berhasil ditambahkan!`);
    console.log("=================================");
}

// FUNCTION hapus produk
function hapusProduk() {
    tampilkanProduk();

    if (produk.length === 0) return;

    const index = readline.questionInt("\nMasukkan nomor produk yang ingin dihapus: ");

    if (index < 1 || index > produk.length) {
        console.log("❌ Produk tidak ditemukan!");
        return;
    }

    const { nama } = produk[index - 1]; // destructuring

    produk = produk.filter((_, i) => i !== index - 1);

    console.log("\n=================================");
    console.log(`🗑️ Produk "${nama}" berhasil dihapus!`);
    console.log("=================================");
}

// MENU
function menu() {
    while (true) {
        console.log("\n===== MENU TOKO ONLINE =====");
        console.log("1. Tampilkan Produk");
        console.log("2. Tambah Produk");
        console.log("3. Hapus Produk");
        console.log("4. Keluar");

        const pilihan = readline.questionInt("Pilih menu: ");

        switch (pilihan) {
            case 1:
                tampilkanProduk();
                break;
            case 2:
                tambahProduk();
                break;
            case 3:
                hapusProduk();
                break;
            case 4:
                console.log("\n👋 Terima kasih telah menggunakan program!");
                return;
            default:
                console.log("❌ Pilihan tidak valid!");
        }
    }
}

// Jalankan
menu();