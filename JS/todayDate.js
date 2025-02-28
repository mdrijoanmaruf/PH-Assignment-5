const today = new Date();
const day = today.toLocaleString('en-US', { weekday: 'short' });  
const date = today.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });  

console.log("Day:", day);  
console.log("Date:", date);



window.onload = function() {
    document.getElementById("showTodayDate").innerText = date;
    document.getElementById("todayDay").innerText = `${day} ,`;
  };
