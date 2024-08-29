async function getWeather() {
    //Conectar com a Api

    //Criando da variavel para pegar o valor do input cidade
    var cidade = document.getElementById('city').value 

    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);
    //Variavel para consumir o JSO do item temperatura

    var tempCelsious = resposta.data.main.temp;


    //Imprime o valor no frent End com concatenar jquery e dyas cadasd deciamais
    document.getElementById('temperatura').innerHTML = `a temperatura atual de ${cidade} é: ${tempCelsious.toFixed(2)} °C`;
}

//chamar a função
getWeather()
