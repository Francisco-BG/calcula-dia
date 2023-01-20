function getDate() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("months").value;
    let year = document.getElementById("year").value;
return new Date(year, month, day);
}
function calculate(){
    dayWeek = getDate();
    //if getDate() {
    theDayIs = dayWeek.getDay();
    let tipo;
    switch(theDayIs){
        case 0:
        case 6:
            tipo = "no laboral";
        default:
            tipo = "laboral";
    }
    daysOfTheWeek=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    document.getElementById("result").value = `${daysOfTheWeek[theDayIs]}. El día es ${tipo}.`;
}
//}