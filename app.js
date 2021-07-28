const userDate = document.querySelector("#userbirthdate");
const submit = document.querySelector("#submit");
const mainDiv = document.querySelector("#main-div");
const outputDiv = document.querySelector("#outputdiv");
console.log("Js file is connected");



submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Submite button pressed");
    const dateArray = String(userDate.value).split("-");
    console.log(dateArray.value);
  
       
      
 
        const year =dateArray[0];
        const month = dateArray[1];
        const date = dateArray[2];
        obtainDifferentFormate(year,month,date);
   

   
})

function obtainDifferentFormate(year,month,date){

    const dateFormate1 = year+month+date;
    const dateFormate2 = date + month + year;
    const dateFormate3 = month+date+year.substring(2);
    const dateFormate4 = Number(month)+date+year;
    console.log(dateFormate1,dateFormate2,dateFormate3,dateFormate4);

    if (isPalindrome(dateFormate1)){
        console.log("in dateformate1");
        return outputDiv.innerHTML= "It is palindrome";
        
    }else if(isPalindrome(dateFormate2)){
        console.log("in dateformate2");
        return outputDiv.innerHTML="It is palindrome"
    }else if(isPalindrome(dateFormate3)){
        console.log("in dateformat3");
        return outputDiv.innerHTML= "It is palindr";
    }else if(isPalindrome(dateFormate4)){
        console.log("in dateformat4");
        return outputDiv.innerHTML="It is palindrome";
    }
    else{
        return outputDiv.innerHTML="Not palindrone";
    }

}


function isPalindrome(dateToCheck){
    console.log("in ispalindrome");
    const max=Math.floor(dateToCheck.length/2);
    for(let i=0; i<max; i++){
        if(dateToCheck[i]!= dateToCheck[dateToCheck.length-i-1]){
            return false;
        }
    }
    return true;
}