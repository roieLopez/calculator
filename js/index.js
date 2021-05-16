let hourWage = document.querySelector('.hourWage'); // hourPay
let hoursDay = document.querySelector('.hoursDay'); // payDay
let days = document.querySelector('.days');
let btn = document.querySelector('.btn');
let message2 = document.querySelector('.message2');
let msgerror = document.querySelector('.msgerrorContainer');

let pay10 = 6290;
let pay14 = 9030;
let pay20 = 14490;
let pay31 = 20140;
let pay35 = 41910;
let pay47 = 53970;
let pay50 = 53971;

btn.addEventListener('click', function () {
    let sum = hourWage.value * hoursDay.value * days.value;
   
    if ((hourWage.value = hourWage.value) && (hoursDay.value = hoursDay.value) && (days.value = days.value)) {
        msgerror.classList.remove("msgerror");
       
        if (sum <= pay10) {
           
            let x = sum * 0.10;
            let y = sum * 0.035;
            let r = sum - x - y;

            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
             </div>`;
            return
        }

        if (sum <= pay14) {
            let x = sum * 0.14;
            let y = sum * 0.035;
            let r = sum - x - y;

            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
             </div>`;
            return
        }
        if (sum <= pay31) {
            let x = sum * 0.31;
            let y = sum * 0.035;
            let r = sum - x - y;

            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
             </div>`;
            return
        }
        if (sum <= pay35) {
            let x = sum * 0.35;
            let y = sum * 0.035;
            let r = sum - x - y;

            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
             </div>`;
            return
        }
        if (sum >= 44020) {
            let x = sum * 0.47;
            let y = sum * 0.12;
            let r = sum - x - y;

            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
             </div>`;
            return
        }
        if (sum <= pay47) {
            let x = sum * 0.47;
            let r = sum - x;
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
             </div>`;
            return
        }
        if (sum <= pay50) {
            let x = sum * 0.50;
            let r = sum - x;
            message2.innerHTML = `
    
            <div>  שכר ברוטו :
             ${new Intl.NumberFormat({style: 'decimal'}).format(sum)} &#8362 
             </div>
    
            <div class="result"> 
            מס הכנסה :  ${new Intl.NumberFormat({style: 'decimal'}).format(x)} &#8362
             </div> 
    
    
             <div class="result"> 
             ביטוח לאומי :  ${new Intl.NumberFormat({style: 'decimal'}).format(y)} &#8362
              </div> 
    
             <div>
             שכר נטו : ${new Intl.NumberFormat({style: 'decimal'}).format(r)} &#8362 
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