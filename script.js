function prosesData() {
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
    let pilihanArray = [];

    if (nama.trim() === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            alert(`Pilihan ${index + 1} tidak boleh kosong!`);
            return;
        }
        pilihanArray.push(input.value);
    });

    if (pilihanArray.length !== inputs.length) {
        return; // Jika ada input kosong, hentikan proses
    }

    let container = document.getElementById("inputContainer");
    container.innerHTML = `<h3>Nama: ${nama}</h3><h4>Pilihan:</h4>`;

    // Tampilkan sebagai Radio Button
    let radioContainer = document.createElement("div");
    pilihanArray.forEach((pilihan, index) => {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "pilihanRadio";
        radio.id = `radio${index}`;
        radio.value = pilihan;

        let label = document.createElement("label");
        label.setAttribute("for", `radio${index}`);
        label.innerText = ` ${pilihan}`;

        radioContainer.appendChild(radio);
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br"));
    });

    // Tampilkan sebagai Dropdown
    let dropdown = document.createElement("select");
    dropdown.id = "dropdownPilihan";
    pilihanArray.forEach((pilihan) => {
        let option = document.createElement("option");
        option.value = pilihan;
        option.innerText = pilihan;
        dropdown.appendChild(option);
    });

    container.appendChild(radioContainer);
    container.appendChild(document.createElement("br"));

    // Tambahkan tombol untuk menampilkan dropdown
    let dropdownToggle = document.createElement("a");
    dropdownToggle.href = "#";
    dropdownToggle.innerText = "[Atau dalam bentuk Drop Down]";
    dropdownToggle.onclick = function () {
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    };
    container.appendChild(dropdownToggle);
    container.appendChild(document.createElement("br"));
    container.appendChild(dropdown);
    dropdown.style.display = "none";

    // Tambahkan tombol OK
    let okButton = document.createElement("button");
    okButton.innerText = "OK";
    okButton.onclick = function () {
        alert("Pilihan Anda telah disimpan!");
    };
    container.appendChild(document.createElement("br"));
    container.appendChild(okButton);
}
