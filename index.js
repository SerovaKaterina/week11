const shopCartInfo1 = document.querySelector('shop__cart_info1').textContent;
const shopCartInfo2 = document.querySelector('shop__cart_info2').textContent;
const shopCartInfo3 = document.querySelector('shop__cart_info3').textContent;
const shopCartInfo4 = document.querySelector('shop__cart_info4').textContent;

let resultPrice =  document.getElementById('result__price');

resultPrice.textContent =(shopCartInfo1 + shopCartInfo2 + shopCartInfo3 + shopCartInfo4);
console.log(resultPrice);

let discountPrice = resultPrice * 0.8;
const newPrice = () => {
    resultPrice.textContent = discountPrice;
};

