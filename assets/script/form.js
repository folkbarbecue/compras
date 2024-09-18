var cel = 599
var ccel = 0
var itens = 0
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
    itens += 1;
    ccel += 1;
    document.querySelector(".quantidade").textContent = "Itens no carrinho: " + itens;
}

function con1() {
    itens += 1;
    ffone += 1;
    document.querySelector(".quantidade").textContent = "Itens no carrinho: " + itens;
}

function con2() {
    itens += 1;
    rrelogio += 1;
    document.querySelector(".quantidade").textContent = "Itens no carrinho: " + itens;
}

function con3() {
    itens += 1;
    ttablet += 1;
    document.querySelector(".quantidade").textContent = "Itens no carrinho: " + itens;
}

function conf() {
    var total = (ccel * cel) + (ffone * fone) + (rrelogio * relogio) + (ttablet * tablet);
    document.querySelector(".quantidade1").textContent = "O valor total é de: " + total + " você tem certeza?"
}