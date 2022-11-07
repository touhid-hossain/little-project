// var ownerName = document.getElementById("owner_name");
// var flatNumber = document.getElementById("flat_number");
// var currentDate = document.getElementById("date");


// const ownerNameTwo = document.querySelector('[data-owner-name]')
// const flatNumberTwo = document.querySelector('[data-flat-number]')




// var houseBill = document.querySelector('[data-housebill-amount]')
// var serviceBill = document.querySelector('[data-servicebill-amount]')
// var waterBill = document.querySelector('[data-waterbill-amount]')
// var totalAmount = document.querySelector('[data-total-amount]')
// var gasBill = document.getElementById('gas_bill')
// var electricityBill = document.getElementById('electricity_bill')


// var totalBill = parseInt(houseBill.value + serviceBill.value + waterBill.value) 

//  console.log(totalBill);
// totalAmount.innerText = totalBill;
// console.log(totalAmount)


// ownerName.addEventListener("keyup", function () {
//     var value = this.value;
//     console.log(value);
//     ownerNameTwo.innerText = this.value;
// }); 


// flatNumber.addEventListener("keyup", function () {
//     var value = this.value;
//     console.log(value);
//     flatNumberTwo.innerText = this.value;
// }); 


// star here

let $el = document.querySelector('.electricity-bill');
if( $el ) {
    $el.addEventListener('blur', function() {
        let $HouseBill = document.getElementsByClassName("house-bill").textContent;
        console.log('HouseBill', $HouseBill);
        let $ServiceBill = '';
        let $WaterBill = '';
    });
}


