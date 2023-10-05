
function calculateDiff() {
    var FromYear = parseInt(document.getElementById("FromYear").value);
    var FromMonth = parseInt(document.getElementById("FromMonth").value);
    var FromDay = parseInt(document.getElementById("FromDay").value);


    //current date
    var today = new Date();
    var ToYear = today.getFullYear();
    var ToMonth = today.getMonth() + 1;
    var ToDay = today.getDay()
    var years, months, days;

    //months
    months = ToMonth - FromMonth;
    if (ToDay < FromDay) {
        months = months - 1;
    }


    //years
    years = ToYear - FromYear;
    if (ToMonth < FromMonth) {
        years = years - 1;
        months = months + 12;
    }

    //days
    days = Math.floor(31 - (FromYear + years, FromMonth + months - 1, FromDay));

    //answer order
    var answer = years + " years, " + months + " months, and " + days + " days.";

    //post answer
    document.getElementById("result").textContent = answer;
    return { years: years, months: months, days: days };
}