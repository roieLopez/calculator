"use strict";

let input = document.querySelector('input');
let btn17 = document.querySelector('.btnOne');
let btn25 = document.querySelector('.btnTwo');
let btn30 = document.querySelector('.btnThree');
let message = document.querySelector('.message');


Number.prototype.format = function (d, w, s, c) {
    var re = '\\d(?=(\\d{' + (w || 3) + '})+' + (d > 0 ? '\\b' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~d));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

btn17.addEventListener('click', function () {
    let x = input.value;
    if (x) {
        let amountCalc = x * 0.17;
        let amount = input.value;
        var r = amountCalc + Number(amount);
        message.innerHTML = `
        <div>  סכום לפני מע"מ : ${Number(amount).format()} &#8362 </div>
        <div class="result"> סכום מע"מ : ${amountCalc.format()} 
        <span class="resultICon">&#8362</span>
         </div> 
         <div>סכום אחרי מע"מ : ${r.format()} &#8362 </div>`;
         console.log(amount);
    } else {
        console.log('err')
    }
})


btn25.addEventListener('click', function () {
    let x = input.value;
    if (x) {
        let amountCalc = x * 0.25;
        let amount = input.value;
        var r = amountCalc + Number(amount);
        message.innerHTML = `
        <div>  ערך הנכס : ${Number(amount).format()} &#8362 </div>
        <div class="result"> הון עצמי נדרש : ${amountCalc.format()} 
        <span class="resultICon">&#8362</span>
         </div> `;
        console.log(amount);
    } else {
        console.log('err')
    }
})