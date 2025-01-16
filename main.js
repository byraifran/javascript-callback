//Callback (cb) sincrono. Executa imediatamente.
function saudacao(nome) {
    alert("Olá, " + nome);
}

//Função somar
function nomeDeUsuario(callback) {
    let nome = prompt("Por favor, insira seu primeiro nome.");
    callback(nome);
}

//Chamando a função, passsando os valores.
nomeDeUsuario(saudacao);

//Callback assicrono. Não executa imediatamente, são executadas em um tempo pré-determinado.
//3000 é o número de milissegundos, 3s. Ao passar uma função como argumento, lembre-se de não usar parênteses.
setTimeout(() => alert("Você executou uma callback assícrono.", 3000));
