const userDate = document.querySelector("#userbirthdate");
const submit = document.querySelector("#submit");
const mainDiv = document.querySelector("#main-div");
console.log("Js file is connected");



submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Submite button pressed");
    const dateArray = userDate.split("-");
    const year =dateArray[0];
    const month = dateArray[1];
    const date = dateArray[2];
    

})

function obtainDifferentFormate(year,month,date){

    const dateFormate1 = year + month + date;
    const dateFormate2 = date + month + year;
    const dateFormate3 = month+date+year.substring(2);
    const dateFormate4 = Number(month)+date+year;

    if (isPalindrome(dateFormate1)){

    }

}


function isPalindrome(dateToCheck){
    
}