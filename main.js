let lista = [];
const kaverit = document.getElementById("kaverilista");

document.getElementById("nappi1").addEventListener("click", lisaaListaan);
document.getElementById("nappi2").addEventListener("click", poistaKaveri);
document.getElementById("nappi3").addEventListener("click", jarjestaKaverit);

function lisaaListaan(event) {
    event.preventDefault()

    if (lista.length < 10 && document.querySelector("input").value != "") {
        lista.push(document.querySelector("input").value);
        naytaKaverit();
    }
}

function naytaKaverit() {
    kaverit.innerHTML = "";
    kaverit.classList.add("center");
    for (let i = 0; i < lista.length; i++) {
        const listaus = document.createElement("li");
        listaus.textContent = lista[i];
        kaverit.appendChild(listaus)
    }


}

function poistaKaveri(event) {
    event.preventDefault()
    let i = 0;
    while (i < lista.length) {
        if (lista[i]==(document.querySelector("input").value)) {
            lista.splice(i, 1);
        } else {
            i++;
        }
    }
    naytaKaverit();
}

function jarjestaKaverit(event) {
    event.preventDefault()
    lista.sort();
    naytaKaverit();
}















