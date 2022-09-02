document.addEventListener("DOMContentLoaded", () => {
            var date = new Date();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            var year = date.getUTCFullYear();
            var month = months[date.getMonth()];
            var today = date.getDate();
            var day = days[date.getDay()];
            x = day + ", " + month + " " + today + ", " + year;
            document.getElementById('date').innerHTML = x;
        })
   
  