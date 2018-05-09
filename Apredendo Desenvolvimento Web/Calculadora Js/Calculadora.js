function botao(num) {
    var s = document.calc.visor.value;
    document.calc.visor.value = s + num;
}
function limpar() {
    document.getElementById("visor01").value = " ";
}
function limpar2() {
    document.getElementById("visor02").value = " ";
    document.getElementById("visor01").value = " ";
}
function resultado(){
    var resultado = 0;
    resultado = document.getElementById("visor01").value;
    document.getElementById("visor02").value = eval(resultado)
}