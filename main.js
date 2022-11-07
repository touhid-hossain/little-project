var ownerName = document.getElementById("owner_name");
var flatNumber = document.getElementById("flat_number");
var currentDate = document.getElementById("date");

const ownerNameTwo = document.querySelector("[data-owner-name]");
const flatNumberTwo = document.querySelector("[data-flat-number]");

var houseBill = document.querySelector("[data-houseBill-amount]");
var serviceBill = document.querySelector("[data-serviceBill-amount]");
var waterBill = document.querySelector("[data-waterBill-amount]");
var totalAmount = document.querySelector("[data-total-amount]");
var gasBill = document.getElementById("gas_bill");
var electricityBill = document.getElementById("electricity_bill");

var total = houseBill + serviceBill;
console.log(total);

gasBill.addEventListener("blur", function () {
  gasBill.innerText = this.value;
});

ownerName.addEventListener("keyup", function () {
  ownerNameTwo.innerText = this.value;
});

flatNumber.addEventListener("keyup", function () {
  flatNumberTwo.innerText = this.value;
});

// star here

// let $el = document.querySelector('.electricity-bill');
// if( $el ) {
//     $el.addEventListener('blur', function() {
//         let $HouseBill = document.getElementsByClassName("house-bill").textContent;
//         console.log('HouseBill', $HouseBill);
//         let $ServiceBill = '';
//         let $WaterBill = '';
//     });
// }
