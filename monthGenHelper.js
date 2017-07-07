let previous = function() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; //January is 0!
    var year = today.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currentDay = [];
    
    //INPUT THE NUMBER OF MONTHS DAYS YOU WANT TO GENERATE MONTHS FOR.
    for (let i = 0; i < 65; i++) {
        if (day > 0) {
            day--;
            if (day == 0) {
                continue;
            }
            // console.log(month);
            currentDay.push(`${year}-${month}-${day}`);
        }
        if (day == 0) {
            month--;
            // console.log(month);
            day = months[month - 1];
            // console.log(day = months[month - 1]);
            // console.log(month);
            currentDay.push(`${year}-${month}-${day}`);
            continue;
            // currentDay.push(`${year}-${month}-${day}`);
        }
    }
    return currentDay;
}
previous();
