const readline = require("readline");

// Interface input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Menampilkan daftar produk
function tampilkanProduk() {
    console.log("\n    Produk Toko    ");
    console.log("----------------------------------");
    console.log("ID | Nama Produk | Harga | Stok");
    console.log("----------------------------------");

    produkToko.forEach(p => {
        console.log(p.id + " | " + p.nama + " | " + p.harga + " | " + p.stok);
    });

    console.log("----------------------------------");
}

// Struk pembelian
function cetakStruk(nama, harga, jumlah) {
    let total = harga * jumlah;

    console.log("\n     STRUK PEMBELIAN     ");
    console.log("----------------------------------");
    console.log("Nama Barang : " + nama);
    console.log("Harga       : " + harga);
    console.log("Jumlah      : " + jumlah);
    console.log("Total       : " + total);
    console.log("----------------------------------");
    console.log("Terima kasih telah berbelanja\n");
}

// Proses pembelian
function beliProduk() {

    tampilkanProduk();

    rl.question("Masukkan nama barang yang ingin dibeli (ketik 'keluar' untuk selesai): ", function(namaBarang) {

        if (namaBarang.toLowerCase() === "keluar") {
            console.log("\nTerima Kasih Telah Berbelanja Semoga Harimu Menyenangkan!!.");
            rl.close();
            return;
        }

        let produk = produkToko.find(p => p.nama.toLowerCase() === namaBarang.toLowerCase());

        if (!produk) {
            console.log("Barang yang anda cari tidak ada");
            return beliProduk();
        }

        rl.question("Masukkan jumlah yang ingin dibeli: ", function(jumlahInput) {

            let jumlah = parseInt(jumlahInput);

            if (jumlah > produk.stok) {
                console.log("Maaf Stok Sedang Habis");
                return beliProduk();
            }

            produk.stok -= jumlah;

            cetakStruk(produk.nama, produk.harga, jumlah);

            beliProduk();
        });

    });
}

// Menjalankan program
console.log("-----TOKO ELEKTRONIK-----");
beliProduk();