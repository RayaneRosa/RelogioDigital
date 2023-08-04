function criarRelogio(){
    var dateTime = new Date();
    var horas = dateTime.getHours();
    var minutos = dateTime.getMinutes();
    var segundos = dateTime.getSeconds();
    var dia = dateTime.getDate();
    var mes = dateTime.getMonth() + 1;
    var ano = dateTime.getFullYear();

    if (horas < 10){
        horas = '0' + horas;
    }
    if (minutos < 10){
        minutos = '0' + minutos;
    }
    if (segundos < 10){
        segundos = '0' + segundos;
    }
    if (dia < 10){
        dia = '0' + dia;
    }
    if (mes < 10){
        mes = '0' + mes;
    }

    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
    document.getElementById('dia').innerHTML = dia;
    document.getElementById('mes').innerHTML = mes;
    document.getElementById('ano').innerHTML = ano;
}

setInterval(criarRelogio,10);