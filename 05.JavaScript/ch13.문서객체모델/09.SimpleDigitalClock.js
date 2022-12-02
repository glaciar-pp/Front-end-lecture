function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

window.onload = function() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('date').innerHTML = myDatetime(now).substring(2,10);
        document.getElementById('time').innerHTML = myDatetime(now).substring(11);
    }, 1000);
}