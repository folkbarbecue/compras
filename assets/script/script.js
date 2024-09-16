var ccel = 0;
var itens = 0;
var cel = 2499;
var ffone = 0;
var fone = 599;
var relogio = 1299;
var rrelogio = 0;
var tablet = 899;
var ttablet = 0;
var precoLiquidificador = 249;
var precoCafeteira = 499;
var precoVentilador = 179;
var precoMicroondas = 399;
var liquidificador = 0;
var cafeteira = 0;
var ventilador = 0;
var microondas = 0;

function con() {
    var prnome = document.getElementById('prnome').value;
    itens += 1;
    document.querySelector(".quantidade").textContent = `${itens}`;
    if (prnome === "celular") {
        ccel += 1;
    }
    if (prnome === "fone") {
        ffone += 1;
    }
    if (prnome === "relogio") {
        rrelogio += 1;
    }
    if (prnome === "tablet") {
        ttablet += 1;
    }
    if (prnome === "liquidificador") {
        liquidificador += 1;
    }
    if (prnome === "cafeteira") {
        cafeteira += 1;
    }
    if (prnome === "ventilador") {
        ventilador += 1;
    }
    if (prnome === "microondas") {
        microondas += 1;
    }
}

function conf() {
    var total = (ccel * cel) + (ffone * fone) + (rrelogio * relogio) + (ttablet * tablet) + (liquidificador * precoLiquidificador) + (cafeteira * precoCafeteira) + (ventilador * precoVentilador) + (microondas * precoMicroondas);
    alert("O valor total é de: " + total);
}
