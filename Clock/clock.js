    window.onload = function() {
        function SetTime() {
            const date = new Date();
            document.getElementById("Time").innerHTML = date.toLocaleTimeString();
            setTimeout(SetTime, 1000);
            }
            SetTime();
        
    }