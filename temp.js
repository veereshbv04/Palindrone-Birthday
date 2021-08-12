function reverseStr(str){
    var listOfCharacters = str.split("");
    var reversedChars = listOfCharacters.reverse();
    var reverseCharStr = reversedChars.join("");
   
    return reverseCharStr
}

function isPalindrome(str){
    var reverse = reverseStr(str);

    return str === reverse
}

var date = {
    day :13,
    month :9,
    year : 2011
};

function convertDateToString(date){
    var datestr = { day: " ", month:" ", year:""};

    // for  day
    if(date.day < 10){
        // when you add string to number the whole thing get converted to string
        datestr.day = "0" + date.day;
    }
    else{
        datestr.day = date.day.toString()   
    }


    // for month
    if(date.month < 10){
        
        datestr.month = "0" + date.month;
    }
    else{
        datestr.month = date.month.toString()   
     }


    // for year
    datestr.year = date.year.toString();

    return datestr;

}

// function to take date and return all variations of it
function getAllDateFormats(date){

    var datestr = convertDateToString(date);
    console.log(datestr)

    var ddmmyyyy = datestr.day + datestr.month + datestr.year;
    var mmddyyyy = datestr.month + datestr.day + datestr.year;
    var yyyymmdd = datestr.year + datestr.month + datestr.day;
    var ddmmyy = datestr.day + datestr.month + datestr.year.slice(-2);
    var mmddyy = datestr.month + datestr.day + datestr.year.slice(-2);
    var yymmdd = datestr.year.slice(-2) + datestr.month + datestr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}

// checking for palindrome for all available date formats
function checkPalindromeForAllDateFormats(date){
    var listOfPalindrome = getAllDateFormats(date);
    var flag = false;
    for(let i=0; i<listOfPalindrome.length; i++){
        if(isPalindrome(listOfPalindrome[i])){
            flag = true;
            break;
        }
     
    }
    return flag;
}

console.log(checkPalindromeForAllDateFormats(date))
