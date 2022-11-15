var ownerName = document.getElementById("owner_name");
var flatNumber = document.getElementById("flat_number");
var currentDate = document.getElementById("date");

var ownerNameTwo = document.querySelector("[data-owner-name]");
var flatNumberTwo = document.querySelector("[data-flat-number]");
var currentDateTwo = document.querySelector("[data-current-date]");

var houseBill = document.querySelector("[data-houseBill-amount]");
var serviceBill = document.querySelector("[data-serviceBill-amount]");
var waterBill = document.querySelector("[data-waterBill-amount]");
var totalAmount = document.querySelector("[data-total-amount]");
var gasBill = document.getElementById("gas_bill");
var electricityBill = document.getElementById("electricity_bill");
var form = document.querySelector(".form");

var passName = document.querySelector("[data-select-name]");
var passFlatNumber = document.querySelector("[data-select-flatNumber]");
var passDate = document.querySelector("[data-select-date]");

// Flat owners Data.
const inputs = {
  Touhid: {
    id: 1,
    name: "Touhid",
    flat: "A-5",
    HouseBill: 200,
    ServiceCharge: 400,
    WaterBill: 600,
  },

  Mohit: {
    id: 2,
    name: "mohit",
    flat: "B-5",
    HouseBill: 300,
    ServiceCharge: 500,
    WaterBill: 700,
  },

  Yamin: {
    id: 3,
    name: "Yamin",
    flat: "C-5",
    HouseBill: 100,
    ServiceCharge: 150,
    WaterBill: 300,
  },

  Riju: {
    id: 4,
    name: "Riju",
    flat: "D-5",
    HouseBill: 250,
    ServiceCharge: 500,
    WaterBill: 550,
  },

  Mendi: {
    id: 5,
    name: "Mendi",
    flat: "E-5",
    HouseBill: 600,
    ServiceCharge: 200,
    WaterBill: 150,
  },
};

// fetching Data from Array ==>
var dataStorage = Object.keys(inputs);
for (var i = 0; i < dataStorage.length; i++) {
  const optionOne = document.createElement("option");
  // const optionTwo = document.createElement("option");
  optionOne.id = i;
  optionOne.innerText = dataStorage[i];
  // optionTwo.id = i;
  // optionTwo.innerText = inputs[i].flat;
  ownerName.append(optionOne);
  // flatNumber.append(optionTwo);
}

// Bill Date Selection ==>
currentDate.addEventListener("change", function (e) {
  date = e.target.value;
  currentDateTwo.innerText = date;
});

// AutoFill_function ==>
passName.addEventListener("change", function (e) {
  currentValue = e.target.value;
  // console.log(currentValue);
  var selectData = inputs[currentValue];
  // console.log(selectData);
  if (selectData != null && selectData != undefined) {
    ownerNameTwo.innerText = selectData.name;
    var change = (passFlatNumber.value = selectData.flat);
    flatNumberTwo.innerHTML = change;

    houseBill.innerText = "$" + selectData.HouseBill;
    serviceBill.innerText = "$" + selectData.ServiceCharge;
    waterBill.innerText = "$" + selectData.WaterBill;

    // Bill calculation ==>
    // form.addEventListener("input", calculate);
    gasBill.addEventListener("input", calculate);
    electricityBill.addEventListener("input", calculate);

    function calculate(e) {
      // console.log(e);
      const houseOne = selectData.HouseBill;
      const serveOne = selectData.ServiceCharge;
      const waterOne = selectData.WaterBill;

      var statTotal = houseOne + serveOne + waterOne;
      // console.log(stateTotal);
      var gas = gasBill.value ? parseInt(gasBill.value) : 0;
      var electricity = electricityBill.value
        ? parseInt(electricityBill.value)
        : 0;
      var total = statTotal + gas + electricity;
      console.log(total);
      totalAmount.innerText = "$ " + total;
      console.log(typeof totalAmount);
    }
  }
});

// Form-Page Validation
function emailValidate() {
  var email = document.querySelector("[data-mail-input]").value;
  var passWord = document.querySelector("[data-password-input]").value;
  var wrongMailText = document.getElementById("validationMailText");
  var wrongPassText = document.getElementById("validationPassText");
  var fetch = /\S+@\S+\.\S+/.test(email);
  var borderAtMail = document.getElementById("email");
  var borderAtPass = document.getElementById("password");

  if (email == "touhid.dev@gmail.com" && fetch) {
    wrongMailText.style.visibility = "hidden";
    borderAtMail.style.border = "hidden";
  } else {
    wrongMailText.style.visibility = "visible";
    borderAtMail.style.border = "2px solid hsl(0, 94%, 66%)";
  }
  // Password
  if (passWord == "Touhid_80584756") {
    wrongPassText.style.visibility = "hidden";
    borderAtPass.style.border = "hidden";
  } else {
    wrongPassText.style.visibility = "visible";
    borderAtPass.style.border = "2px solid hsl(0, 94%, 66%)";
  }
  // Double check
  email == "touhid.dev@gmail.com" && passWord == "Touhid_80584756"
    ? (window.location.href = "Page-02.html") + alert("Login Successfully")
    : alert("Invalid Information, Please try again");
}

// UTILITY STUFFS
// for (const [key, value] of Object.entries(touhid)) {
// console.log(`key => ${key} \ value => ${value}`);
// }
