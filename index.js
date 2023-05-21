let shopCartInfo1 = document.querySelector('.shop__cart_info1').textContent;
let shopCartInfo2 = document.querySelector('.shop__cart_info2').textContent;
let shopCartInfo3 = document.querySelector('.shop__cart_info3').textContent;
let shopCartInfo4 = document.querySelector('.shop__cart_info4').textContent;

let resultPrice =  document.querySelector('#result__price');

 resultPrice = +shopCartInfo1 + +shopCartInfo2 + +shopCartInfo3 + +shopCartInfo4;
console.log(resultPrice);
let discountPrice = resultPrice * 0.8;

const newPrice = () => {
    resultPrice.textContent = Math.round(discountPrice);
};

