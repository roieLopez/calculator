let hourWage = document.querySelector('.hourWage'); // hourPay
let hoursDay = document.querySelector('.hoursDay'); // payDay
let days = document.querySelector('.days');
let points = document.querySelector('.points');
let btn = document.querySelector('.btn');
let message2 = document.querySelector('.message2');
let msgerror = document.querySelector('.msgerrorContainer');


// console.log(aa);



let pay10 = 6290;
let pay14 = 9030;
let pay20 = 14490;
let pay31 = 20140;
let pay35 = 41910;
let pay47 = 53970;
let pay50 = 53971;

btn.addEventListener('click', function () {
    let total = hourWage.value * hoursDay.value * days.value; // sum = total
   
    if ((hourWage.value = hourWage.value) && (hoursDay.value = hoursDay.value) && (days.value = days.value)) {
        msgerror.classList.remove("msgerror");
       
        if (total <= pay10) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.10; // x = national insurance
            let incomeTax = total * 0.035; // y = Income Tax
            let result = total - nationalInsurance - incomeTax + totalPricePoints; // r = result 
            
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(total)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(nationalInsurance)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(incomeTax)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }

        if (total <= pay14) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.14; // x = national insurance
            let incomeTax = total * 0.035; // y = Income Tax
            let result = total - nationalInsurance - incomeTax + totalPricePoints; // r = result 
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(total)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(nationalInsurance)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(incomeTax)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }
        if (total <= pay20) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.20; // x = national insurance
            let incomeTax = total * 0.035; // y = Income Tax
            let result = total - nationalInsurance - incomeTax + totalPricePoints; // r = result 
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(total)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(nationalInsurance)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(incomeTax)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }
        if (total <= pay31) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.31;
            let incomeTax = total * 0.035; 
            let result = total - nationalInsurance - incomeTax + totalPricePoints;  
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(total)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(nationalInsurance)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(incomeTax)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }
        if (total <= pay35) {

            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.35;
            let incomeTax = total * 0.035; 
            let result = total - nationalInsurance - incomeTax + totalPricePoints;  
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(total)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(nationalInsurance)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(incomeTax)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }


        ////////////////////////
        if (total >= 44020) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.47;
            let incomeTax = total * 0.12;
            let result = total - nationalInsurance - incomeTax;


            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }
        if (total <= pay47) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.47;
            let incomeTax = total * 0.12;
            let result = total - nationalInsurance - incomeTax;


            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }
        if (sum <= pay50) {
            let totalPricePoints = points.value * 218;
            let nationalInsurance = total * 0.50;
            let incomeTax = total * 0.12;
            let result = total - nationalInsurance - incomeTax;


            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
              <div> 
             נקודות זיכוי :  ${new Intl.NumberFormat({style: 'decimal'}).format(totalPricePoints)} &#8362
               </div> 

             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(result)} &#8362 
             </div>`;
            return
        }
        
    }else{
        msgerror.classList.add("msgerror");
        // <div class="">אחד השדות ריק ! <br />
        // בכדי להמשיך אנא מלא/י את השדות במלואם!</div>`;
    }

   

    // alert(`
    //                                      אחד השדות ריק !
    //             בכדי להמשיך אנא מלא/י את השדות במלואם!`);

})


let input = document.querySelector('.CountInput');
let btn17 = document.querySelector('.btnOne');
let btn25 = document.querySelector('.btnTwo');
let message = document.querySelector('.message');



let calc17 = () => input.value * 0.17;
let calc25 = () => input.value * 0.25;
let amountCalc = () => calc17() + Number(input.value);


btn17.addEventListener('click', function () {
    if (input.value = input.value) {
        msgerror.classList.remove("msgerror");
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
        msgerror.classList.add("msgerror");
        // alert(`
        //                     הכנס נתונים לשדה בבקשה!`);
    }
});

btn25.addEventListener('click', function () {
    if (input.value = input.value) {
        msgerror.classList.remove("msgerror");
        message.innerHTML = `
    
        <div> 
         ערך הנכס : ${new Intl.NumberFormat({style: 'decimal'}).format(input.value)} &#8362
         </div>

        <div class="result"> 
        הון עצמי נדרש : ${new Intl.NumberFormat({style: 'decimal'}).format(calc25())} &#8362
         </div> `
    } else {
        msgerror.classList.add("msgerror");
    }
});