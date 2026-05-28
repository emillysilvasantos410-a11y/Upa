let form = document.getElementById("formulario");

let fila_espera = [];

let resultado_espera = document.getElementById("resultado_espera");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let preferencia = document.querySelector('input[name = "preferencia"]:checked').value;

    adicionar(nome, preferencia);
    console.log(fila_espera);
});

function adicionar(nome_parametro, radio){
    if(radio === "Preferencial"){
        fila_espera.unshift(nome_parametro)
    }
    else{
    fila_espera.push(nome_parametro);
    };
    listar();
};

function listar(){
    resultado_espera.innerHTML = ""; 
    for(let i = 0; i < fila_espera.length; i++){
        resultado_espera.innerHTML += 
        `ficha: ${i} -  Paciente: ${fila_espera[i]}
        <input type="button" onclick="edit(${i})" value="Editar">
        <input type="button" onclick="deletindice(${i})" value="Deletar">
        <br>`;
    } 
};

function atender(){
    fila_espera.shift();
    listar();
};

function deletindice(indice){
    console.log(indice);
    fila_espera.splice(indice, 1);
    listar();
};

function edit(indice){
    console.log(indice);
    fila_espera[indice] = prompt("Digite o novo nome: ");
    listar();
}