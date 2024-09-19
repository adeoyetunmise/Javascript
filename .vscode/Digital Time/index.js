
    function typeDate() {
        const now = new Date();  
        const date = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }); 
        
        const dateElement = document.getElementById("date")
        const timeElement = document.getElementById("time");
        let index = 0;
    
        function typeNextCharacter() {
            if (index < date.length) {
                dateElement.textContent += date.charAt(index);
                index++;
                setTimeout(typeNextCharacter, 100); // Adjust typing speed here (100ms per character)
            } else {
                // Once done, update the time every second
                setInterval(updateTime, 1000);
            }
        }
    
        // Start typing
        typeNextCharacter();

    

    function updateTime() {
        const now = new Date()
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        timeElement.textContent = ` ${hours}:${minutes}:${seconds}`;
        
       
    }
    updateTime(); 
    setInterval(updateTime, 1000);
}

window.onload = typeDate;
