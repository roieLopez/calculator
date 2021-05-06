let input = document.querySelector('input');
let btn17 = document.querySelector('.btnOne');
let btn25 = document.querySelector('.btnTwo');
let message = document.querySelector('.message');


let calc17 = () => input.value * 0.17;
let calc25 = () => input.value * 0.25;
let amountCalc = () => calc17() + Number(input.value);


btn17.addEventListener('click', function () {
    if (input.value = input.value) {
        message.innerHTML = `

        <div>  סכום לפני מע"מ :
         ${new Intl.NumberFormat({style: 'decimal'}).format(input.value)} &#8362 
         </div>

        <div class="result"> 
        סכום מע"מ :  ${new Intl.NumberFormat({style: 'decimal'}).format(calc17())} &#8362
         </div> 

         <div>
         סכום אחרי מע"מ : ${new Intl.NumberFormat({style: 'decimal'}).format(amountCalc())} &#8362 
         </div>`
    } else {
        console.log('error')
    }
});

btn25.addEventListener('click', function () {
    if (input.value = input.value) {
        message.innerHTML = `
    
        <div> 
         ערך הנכס : ${new Intl.NumberFormat({style: 'decimal'}).format(input.value)} &#8362
         </div>

        <div class="result"> 
        הון עצמי נדרש : ${new Intl.NumberFormat({style: 'decimal'}).format(calc25())} &#8362
         </div> `
    } else {
        console.log('error')
    }
});