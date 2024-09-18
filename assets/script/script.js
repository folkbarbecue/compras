var ccel = 0
var itens = 0
var cel = 2499
var ffone = 0
var fone = 599
var relogio = 1299
var rrelogio = 0
var tablet = 899
var ttablet = 0
var precoLiquidificador = 249
var precoCafeteira = 499
var precoVentilador = 179
var precoMicroondas = 399
var liquidificador = 0
var cafeteira = 0
var ventilador = 0
var microondas = 0
var camisa = 0
var calca = 0
var maquiagem = 0
var escova = 0
var precoCamisa = 89
var precoCalca = 129
var precoMaquiagem = 299
var precoEscova = 169
var toalha = 149
var ttoalha = 0
var abajur = 99
var aabajur = 0
var quadro = 179
var qquadro = 0
var almofada = 89
var aalmofada = 0
var carro = 149
var ccarro = 0
var puzzle = 79
var ppuzzle = 0
var boneca = 199
var bboneca = 0
var jogo = 129
var jjogo = 0
var livro = 59
var llivro = 0
var dvd = 39
var ddvd = 0
var cd = 39
var ccd = 0
var ebook = 49
var eebook = 0
var cesta = 89
var ccesta = 0
var vinho = 149
var vvinho = 0
var chocolate = 79
var cchocolate = 0

function con() {
    var prnome = document.getElementById('prnome').value
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
    if (prnome === "camisa") {
        camisa += 1;
    }
    if (prnome === "calca") {
        calca += 1;
    }
    if (prnome === "maquiagem") {
        maquiagem += 1;
    }
    if (prnome === "escova") {
        escova += 1;
    }
}

function conf() {
    var total = (ccel * cel) + (ffone * fone) + (rrelogio * relogio) + (ttablet * tablet) + (liquidificador * precoLiquidificador) + (cafeteira * precoCafeteira) + (ventilador * precoVentilador) + (microondas * precoMicroondas) + (camisa * precoCamisa) + (calca * precoCalca) + (maquiagem * precoMaquiagem) + (escova * precoEscova);
    alert("O valor total é de: " + total);
}
