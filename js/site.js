

//get the values from the page
//program starts here, controller function 
function getValues(){
    //get values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check that inputs are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
         //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }

}

//generate numbers from start value to the end value 
//logic function
function generateNumbers(startValue, endValue){

    let numbers = [];

    //get all numbers from start to end 
    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }

    return numbers;
}

//display the numbers, mark even numbers in bold 
//display or view function
function displayNumbers(numbers){
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td><tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}