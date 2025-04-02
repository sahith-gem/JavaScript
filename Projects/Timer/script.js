  
  function updateClock(){
    const date = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const currentTime = date.getHours() % 12 || 12 ;
    const currentMinutes = date.getMinutes().toString().padStart(2, '0');
    const currentSeconds = date.getSeconds().toString().padStart(2, '0');
    const amPm = date.getHours() >=12 ? 'PM' : 'AM';

    const options ={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    }

    const currentDate = date.toLocaleDateString(undefined, options);

    timeElement.textContent = `${currentTime} : ${currentMinutes} :${currentSeconds} ${amPm}`;
    dateElement.textContent = currentDate ;

  }

  setInterval(updateClock , 1000); 
 

  