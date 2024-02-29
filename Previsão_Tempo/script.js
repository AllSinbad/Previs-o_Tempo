const key = "2571be5242b46315a918f8de34c152e7"

const dadosCidade = (dados) => {
    document.querySelector(".city").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

const buscarCidade = async (cidade) => {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    dadosCidade(dados)
}

const botaoPesquisa = () => {
    const cidade = document.querySelector(".input-city").value
    buscarCidade(cidade)
}