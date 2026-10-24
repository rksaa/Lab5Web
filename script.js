// =========================================================
// Latihan 1 — Menampilkan output
// =========================================================

// Mengubah isi teks pada elemen HTML dengan id "pesan"
document.getElementById("pesan").textContent = "Hello World";

// Menampilkan pesan ke Console browser
console.log("Hello World");

// =========================================================
// Latihan 2 — Alert dan Prompt
// =========================================================

// Meminta masukan nama dari pengguna melalui dialog prompt
const namaPengguna = prompt("Masukkan nama Anda:", "");

// Memeriksa apakah nama diisi (tidak null dan bukan spasi kosong)
if (namaPengguna && namaPengguna.trim() !== "") {
  // Jika diisi: tampilkan alert sapaan dan ubah teks di halaman
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
  // Jika dibiarkan kosong atau menekan Cancel
  alert("Nama belum diisi.");
}

// Mengambil masukan dua angka dari prompt dan mengonversinya ke tipe Number
const input1 = prompt("Masukkan angka pertama:");
const input2 = prompt("Masukkan angka kedua:");

const num1 = Number(input1);
const num2 = Number(input2);

function operasiDasar(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
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
// Latihan 4 — Seleksi Kondisi If–Else
// =========================================================

// Meminta masukan nilai dari pengguna melalui prompt
const inputNilai = prompt("Masukkan nilai (0–100):");

// Konversi masukan string dari prompt menjadi tipe data Number
const nilaiMahasiswa = Number(inputNilai);

// Validasi masukan pengguna
if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  // Jika input null (dibatalkan), kosong, bukan angka, atau di luar 0–100
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  // Jika nilai valid dan minimal 60
  alert("Lulus");
} else {
  // Jika nilai valid dan di bawah 60
  alert("Belum lulus");
}

// =========================================================
// Latihan 5 — Seleksi Kondisi Switch
// =========================================================

// Meminta masukan angka 1–5 dari pengguna melalui prompt
const inputPilihan = prompt("Masukkan angka 1–5:");

// Memeriksa nilai masukan menggunakan struktur switch-case
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}


// =========================================================
// Latihan 6 — Form Bilangan Genap atau Ganjil
// =========================================================
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// =========================================================
// Latihan 7 — Mengubah Warna Halaman
// =========================================================
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}


// =========================================================
// Latihan 8 — DOM dan Checkbox Menu Makanan
// =========================================================

// Memilih seluruh elemen input checkbox yang memiliki class "menu"
const daftarMenu = document.querySelectorAll(".menu");

// Memasang event listener "change" pada setiap checkbox
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

// Fungsi untuk menghitung total harga pilihan menu yang dicentang
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
// Memasang event listener setelah DOM selesai dimuat sempurna
document.addEventListener("DOMContentLoaded", () => {
  const daftarMenu = document.querySelectorAll(".menu");

  daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
  });
});

// =========================================================
// MINI PROJECT — Kalkulator Nilai Mahasiswa
// =========================================================

// 1. Function memproses perhitungan nilai akhir (Tugas 30%, UTS 30%, UAS 40%)
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

// 2. Function menentukan predikat huruf
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// 3. Function utama untuk memproses input form dan memperbarui antarmuka HTML
function prosesHitung() {
  const inputTugas = document.getElementById("tugas").value.trim();
  const inputUts = document.getElementById("uts").value.trim();
  const inputUas = document.getElementById("uas").value.trim();

  const valTugas = Number(inputTugas);
  const valUts = Number(inputUts);
  const valUas = Number(inputUas);

  const errorDiv = document.getElementById("pesanError");
  const hasilDiv = document.getElementById("hasil");

  // Reset tampilan pesan
  errorDiv.textContent = "";
  hasilDiv.style.display = "none";

  // Validasi input: tidak boleh kosong, harus berupa angka, dan berada di rentang 0-100
  if (
    inputTugas === "" || inputUts === "" || inputUas === "" ||
    Number.isNaN(valTugas) || Number.isNaN(valUts) || Number.isNaN(valUas) ||
    valTugas < 0 || valTugas > 100 ||
    valUts < 0 || valUts > 100 ||
    valUas < 0 || valUas > 100
  ) {
    errorDiv.textContent = "Semua nilai harus diisi dengan angka antara 0 sampai 100!";
    return;
  }

  // Hitung Nilai Akhir & Predikat menggunakan function terpisah
  const akhir = hitungNilaiAkhir(valTugas, valUts, valUas);
  const predikat = tentukanPredikat(akhir);
  const lulus = akhir >= 60;

  // Tampilkan Hasil di HTML
  document.getElementById("outNilai").textContent = akhir.toFixed(2);
  document.getElementById("outPredikat").textContent = predikat;
  document.getElementById("outStatus").textContent = lulus ? "Lulus" : "Belum Lulus";

  // Atur gaya tampilan kotak hasil berdasarkan status kelulusan
  hasilDiv.className = lulus ? "lulus" : "gagal";
  hasilDiv.style.display = "block";
}

console.log("=== Tabel Perkalian 7 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

function cekGenap(angka) {
  return angka % 2 === 0;
}

// Contoh Pengujian:
console.log(cekGenap(4)); // Output: true
console.log(cekGenap(7)); // Output: false

function validasiKosong() {
  const input = document.getElementById("namaSiswa").value.trim();
  const pesan = document.getElementById("pesanForm");

  if (input === "") {
    pesan.textContent = "Kolom tidak boleh kosong!";
    pesan.style.color = "red";
  } else {
    pesan.textContent = "Data berhasil dikirim: " + input;
    pesan.style.color = "green";
  }
}