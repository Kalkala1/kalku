const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let nilai = "";
let operator = "";
let nilaiAwal = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const isi = button.textContent;

    if (!isNaN(isi)) {
      nilai += isi;
      display.textContent = nilai;
    }

    if (isi === "AC") {
      nilai = "";
      nilaiAwal = "";
      operator = "";
      display.textContent = "0";
    }

    if (isi === "+" || isi === "−" || isi === "×" || isi === "÷") {
      nilaiAwal = nilai;
      operator = isi;
      nilai = "";
    }

    if (isi === "=") {
      let hasil = 0;

      if (operator === "+") hasil = Number(nilaiAwal) + Number(nilai);
      if (operator === "−") hasil = Number(nilaiAwal) - Number(nilai);
      if (operator === "×") hasil = Number(nilaiAwal) * Number(nilai);
      if (operator === "÷") hasil = Number(nilaiAwal) / Number(nilai);

      display.textContent = hasil;
      nilai = hasil.toString();
    }
  });
});