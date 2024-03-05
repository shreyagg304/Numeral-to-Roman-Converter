let number =  document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = () => {
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numberValue = parseInt(number.value, 10);

    if (isNaN(numberValue) || number.value.trim() === ''){
        output.innerHTML="Please enter a valid number";
    }
    else if (numberValue < 0){
        output.innerHTML="Please enter a number greater than or equal to 1";
    }
    else if (numberValue >=4000){
        output.innerHTML="Please enter a number less than or equal to 3999";
    }
    else {
        let i = 0;
        let ans = "";
        while (numberValue > 0){
            if (numberValue >= values[i]){
                ans += roman[i];
                numberValue -= values[i];
            }
            else{
                i++;
            }
        }
        output.innerHTML= ans;
    }
};

const enter = (e) => {
    if (e.key === "Enter") {
        convert();
    }
};

convertButton.addEventListener('click', convert);
number.addEventListener('keypress', enter);