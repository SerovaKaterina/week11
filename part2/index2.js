const yourNumber = document.getElementById('container__input1');
let resultNumber = document.getElementById('container__input2');
const button = document.getElementById('container__btn');

const squeryNumber =  () => {
    let firstNumber = yourNumber.value;
    let secondNumber = (firstNumber * firstNumber);
    resultNumber.value = secondNumber;
    console.log(resultNumber);
};

button.onclick = squeryNumber;