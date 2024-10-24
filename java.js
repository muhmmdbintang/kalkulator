// Mendapatkan elemen display
const display = document.getElementById("display");

// Menambahkan karakter ke display
function appendCharacter(character) {
  display.value += character;
}

// Menghapus isi display
function clearDisplay() {
  display.value = "";
}

// Menghapus karakter terakhir
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Menghitung hasil
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
