function irparaaUpa() {
    window.location.href = "upa.html";
}
let form = document.getElementById("formulario");

let fila_espera = [];

let resultado_espera = document.getElementById("resultado_espera");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    let nome = document.getElementById("nome").value;

    fila_espera.push(nome)
    console.log(fila_espera)
});

function adicionar(nome_parametro){
    fila_espera.push(nome_parametro);

    listar();
};

function listar(){
    resultado_espera.innerHTML = ""; 
    for(let i = 0; i < fila_espera.length; i++){
        resultado_espera.innerHTML += 
        `ficha: ${i} -  Paciente: ${fila_espera[i]}<br>`;
    } 
}

function atender(){
    fila_espera.shift();
    listar();
}