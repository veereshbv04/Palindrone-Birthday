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
    day :11,
    month :2,
    year : 2020
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
            console.log("palindrome is " + listOfPalindrome[i]);
            flag = true;
            break;
        }
     
    }
    return flag;
}

function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year%4 === 0){
        return true;
    }

    return false;

}


function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30,31,30,31,31,30,31,30,31];

    if(month === 2){
        // check for leap year
        if(isLeapYear(year)){
            if(day > 29){
                day =1;
                month = month +1;
            }
        }
        else{
            if(day > 28){
                day = 1;
                month = month + 1;
            }
        }
    }else{
        if(day> daysInMonth[month - 1]){
            day =1;
            month =month+1;
        }
    }

    if(month>12){
        month =1;
        year = year +1;
    }

    return {
        day : day,
        month : month,
        year : year
    };


}


function getNextPalindromeDate(date){
    var count =0;
    var nextDate = getNextDate(date);

    while(1){
        count++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [count, nextDate];

}


console.log(getNextPalindromeDate(date));



