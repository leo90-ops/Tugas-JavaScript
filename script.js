function prosesData() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;

    if (nama === "" || jumlah === "") {
        alert("Harap isi semua field!");
    } else if (isNaN(jumlah) || jumlah <= 0) {
        alert("Jumlah Pilihan harus berupa angka positif!");
    } else {
        alert("Nama: " + nama + "\nJumlah Pilihan: " + jumlah);
    }
}