(() => {
    let date,
        timeItem = document.getElementById('time-item'),
        dateItem = document.getElementById('date-item');
        
    
    let arrayDay = ['Domingo', 'Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'],
        arrayMonth = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'];    

    let time = () => {
        date = new Date();
        let hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();  
            
         if (hours < 10) 
            hours = `0${hours}`;
            
        if (minutes < 10) 
            minutes = `0${minutes}`;

        if (seconds < 10) 
            seconds = `0${seconds}`;      

        dateItem.textContent = `${arrayDay[date.getDay()]} ${date.getDate()} de ${arrayMonth[date.getMonth()]} del ${date.getFullYear()}`
        timeItem.textContent = `${hours}:${minutes}:${seconds}`;

  
    }

    time();

    setInterval(time, 10);
    
    

})();