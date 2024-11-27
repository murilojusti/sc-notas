function calcular1() {
    let p1txt = document.getElementById("p1");
    let res = document.getElementById("res");

    if (p1txt.value.trim() === "") {
        res.innerHTML = "Digite uma nota!";
        return; 
    }

    let p1 = Number(p1txt.value);

    if (p1 > 10 || p1 < 0 || isNaN(p1)) {
        res.innerHTML = "As notas devem estar entre 0 e 10!";
    } else {
        let p2 = (30 - 2 * p1) / 3;
        res.innerHTML = `A nota necessária na P2 é <strong>${p2.toFixed(2)}</strong>`;
    }
}

function calcular2() {
    let pUmtxt = document.getElementById("pUm");
    let pDoistxt = document.getElementById("pDois");
    let res2 = document.getElementById("res2");

    if (pUmtxt.value.trim() === "" || pDoistxt.value.trim() === "") {
        res2.innerHTML = "Digite uma nota!";
        return;
    }

    let pUm = Number(pUmtxt.value);
    let pDois = Number(pDoistxt.value);

    if (
        pUm > 10 || pUm < 0 || isNaN(pUm) ||
        pDois > 10 || pDois < 0 || isNaN(pDois)
    ) {
        res2.innerHTML = "As notas devem estar entre 0 e 10!";
    } else {
        let mediaFinal = ((pUm * 2) + (pDois * 3)) / 5;
        res2.innerHTML = `Sua média final será <strong>${mediaFinal.toFixed(2)}</strong>`;
    }
}
