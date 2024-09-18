var cel = 249
var ccel = 0
var itens = 0
var ffone = 0
var fone = 499
var relogio = 179
var rrelogio = 0
var tablet = 399
var ttablet = 0

function con() {
    itens += 1;
    ccel += 1;
    document.querySelector(".quantidade").textContent =  "Itens no carrinho: " + itens;
    }
    function con1() {
        itens += 1;
        ffone += 1;
        document.querySelector(".quantidade").textContent =  "Itens no carrinho: " + itens;
        }
        function con2() {
            itens += 1;
            rrelogio += 1;
            document.querySelector(".quantidade").textContent =  "Itens no carrinho: " + itens;
            }
            function con3() {
                itens += 1;
               ttablet += 1;
                document.querySelector(".quantidade").textContent =  "Itens no carrinho: " + itens;
                }
function conf(){
    var total = (ccel * cel) + (ffone * fone) + (rrelogio * relogio) + (ttablet * tablet)
    document.querySelector(".quantidade1").textContent = "O valor total é de: " + total + " você tem certeza?"
}