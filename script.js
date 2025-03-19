function prosesData(){
    let jumlah = document.getElementById("jumlah").value;
    let container = document.getElementById("inputContainer");
    container.innerHTML = ""; // Reset input container

    if (jumlah === "" || isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan jumlah pilihan yang valid!");
        return;
    }

    for (let i = 1; i <= jumlah; i++) {
        let label = document.createElement("label");
        label.innerText = "Pilihan " + i + " : ";

        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Teks Pilihan " + i;
        input.name = "pilihan" + i;

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }

    let submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = submitData;
    container.appendChild(submitButton);
}

function submitData() {
    let nama = document.getElementById("nama").value;
    let inputs = document.querySelectorAll("#inputContainer input");
    let data = "Nama: " + nama + "\n";

    inputs.forEach((input, index) => {
        data += "Pilihan " + (index + 1) + ": " + input.value + "\n";
    });

    alert(data);
}