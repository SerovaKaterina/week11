const shopCartInfo1 = document.querySelector('.shop__cart_info1').textContent;
const shopCartInfo2 = document.querySelector('.shop__cart_info2').textContent;
const shopCartInfo3 = document.querySelector('.shop__cart_info3').textContent;
const shopCartInfo4 = document.querySelector('.shop__cart_info4').textContent;
const sum = +shopCartInfo1 + +shopCartInfo2 + +shopCartInfo3 + +shopCartInfo4;
console.log(sum);
const resultPrice = document.querySelector('.result__price');
resultPrice.textContent = sum;

const newPrice = () => {
    resultPrice.textContent = sum *0.8;
};

