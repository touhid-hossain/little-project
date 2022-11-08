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
var form = document.querySelector(".form");

// console.log(form);

// gasBill.addEventListener("input", calculate);
// electricityBill.addEventListener("input", calculate);
form.addEventListener("input", calculate);
console.log(form);

function calculate(e) {
  console.log(e);
  var house = parseInt(houseBill.dataset.housebillAmount);
  var service = parseInt(serviceBill.dataset.servicebillAmount);
  var water = parseInt(waterBill.dataset.waterbillAmount);

  var gas = gasBill.value ? parseInt(gasBill.value) : 0;

  var electricity = electricityBill.value ? parseInt(electricityBill.value) : 0;

  var total = house + service + water + gas + electricity;
  totalAmount.innerText = "$" + total;
}







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
