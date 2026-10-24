// =========================================================
// 1. Ubah Latihan 3 agar menerima dua nilai dari prompt dan konversi ke number
// =========================================================
console.log("=== EKSPERIMEN 1 ===");
const input1 = prompt("Eksperimen 1 - Masukkan angka pertama:");
const input2 = prompt("Eksperimen 1 - Masukkan angka kedua:");

const num1 = Number(input1);
const num2 = Number(input2);

function operasiDasar(a, b) {
  if (input1 === null || input2 === null || input1.trim() === "" || input2.trim() === "" || Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Input harus berupa angka yang valid.");
    return;
  }
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

operasiDasar(num1, num2);


// =========================================================
// 7. Perulangan tabel perkalian angka 7 dari 1 sampai 10
// =========================================================
console.log("=== EKSPERIMEN 7 ===");
console.log("Tabel Perkalian 7:");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}


// =========================================================
// 8. Function cekGenap(angka) yang mengembalikan true jika angka genap
// =========================================================
console.log("=== EKSPERIMEN 8 ===");
function cekGenap(angka) {
  return angka % 2 === 0;
}

// Uji fungsi di console
console.log("Apakah 4 genap?", cekGenap(4)); // true
console.log("Apakah 7 genap?", cekGenap(7)); // false


// =========================================================
// 9. Validasi form agar kolom tidak boleh kosong
// =========================================================
function validasiKosong() {
  const input = document.getElementById("namaSiswa").value.trim();
  const pesan = document.getElementById("pesanForm");

  if (input === "") {
    pesan.textContent = "Kolom nama tidak boleh kosong!";
    pesan.className = "pesan-error";
  } else {
    pesan.textContent = "Data berhasil dikirim: " + input;
    pesan.className = "pesan-sukses";
  }
}


// =========================================================
// 10. Ubah Latihan 8 dengan menambah minimal dua pilihan menu dan harga
// =========================================================
function hitungTotal() {
  const daftarMenu = document.querySelectorAll(".menu");
  let total = 0;

  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Memasang event listener untuk checkbox menu
document.addEventListener("DOMContentLoaded", () => {
  const daftarMenu = document.querySelectorAll(".menu");
  daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
  });
});


// =========================================================
// 11. Tombol untuk menyembunyikan atau menampilkan elemen HTML
// =========================================================
function toggleElemen() {
  const elemen = document.getElementById("teksSembunyi");
  if (elemen.style.display === "none") {
    elemen.style.display = "block";
  } else {
    elemen.style.display = "none";
  }
}