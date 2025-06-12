const soalContainer = document.getElementById("soal");
const jawabanContainer = document.getElementById("jawaban");
const submitButton = document.getElementById("submit");
const hasilContainer = document.getElementById("hasil");

const pertanyaan = [
    {
        soal: "Apa ibu kota Indonesia?",
        jawaban: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        jawabanBenar: "Jakarta"
    },
    {
        soal: "Apa ibu kota Jepang?",
        jawaban: ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"],
        jawabanBenar: "Tokyo",
    },
    // Tambahkan pertanyaan lain di sini
];

let skor = 0;
let soalSaatIni = 0;

function tampilkanSoal() {
    const soal = pertanyaan[soalSaatIni];
    soalContainer.textContent = soal.soal;

    jawabanContainer.innerHTML = "";
    soal.jawaban.forEach((jawaban) => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;
        tombol.addEventListener("click", () => cekJawaban(jawaban));
        jawabanContainer.appendChild(tombol);
    });
}

function cekJawaban(jawaban) {
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawabanBenar) {
        skor++;
    }

    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    hasilContainer.textContent = `Skor Anda: ${skor} dari ${pertanyaan.length}`;
}

tampilkanSoal();