
        let userInput = document.getElementById("date");
        userInput.max = new Date().toISOString().split("T")[0];
        let output = document.getElementById("output")
        function calculateage(){
            let dob = new Date(userInput.value);
            let date1 = dob.getDate();
            let month1 = dob.getMonth()+1;
            let year1 = dob.getFullYear();

            let today = new Date ();

            let date2 = today.getDate();
            let month2 = today.getMonth()+1;
            let year2 = today.getFullYear();

            let date3, month3, year3;
            year3 = year2 - year1

            if( month2 >= month1){
            month3 = month2- month1;}
            else{year3 --;
                month3 = 12 + month2 -month1;}
                if (date2 >= date1){
            date3 = date2 - date1;}
            else{
                month3--;
                date3 = getDaysInMonth(year1, month1) + date2 - date1;
            }
if (month3<0){month3 = 11;
    year3--;
}

output.innerHTML = `you are ${year3} years, ${month3} months and ${date3} days old`
        
        }
        function getDaysInMonths(year, month){
            return new Date (year, month, 0).getDate();
        }
    
