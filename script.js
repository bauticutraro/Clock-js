(() => {
    let date,
        timeItem = document.getElementById('time-item'),
        dateItem = document.getElementById('date-item');
        
    
    let arrayDay = ['Domingo', 'Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'],
        arrayMonth = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'];    

    let time = () => {
        date = new Date();

        dateItem.textContent = `${arrayDay[date.getDay()]} ${date.getDate()} de ${arrayMonth[date.getMonth()]} del ${date.getFullYear()}`
        timeItem.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        if (date.getSeconds() < 10) {
            timeItem.textContent = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
        }
    }

    time();

    setInterval(time, 10);
    
    

})();