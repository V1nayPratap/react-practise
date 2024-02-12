
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

    
        let ampm = hours >= 12 ? 'PM' : 'AM';
        let displayHours = hours % 12;
        displayHours = displayHours ? displayHours : 12;

     
        const time = `${displayHours}:${minutes}:${seconds} ${ampm}`;

     
        document.getElementById('clock').textContent = time;

    
        let greeting;
        if (hours >= 5 && hours < 12) {
            greeting = 'Good Morning';
        } else if (hours >= 12 && hours < 18) {
            greeting = 'Good Afternoon';
        } else if(hours >=18 && hours <22){
            greeting = 'Good Evening';
        }else{
            greeting = 'Good Night'
        }
        document.getElementById('greeting').textContent = greeting;
        document.getElementById('date').textContent = now.toISOString().slice(0, 10);;
    }
    updateClock();
