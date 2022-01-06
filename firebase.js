// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

// Import firebase authentication 
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

// Import firebase storage
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-fnBa0BkVFiNwSN1i2DBrVmoep7WoN2Y",
    authDomain: "learning-firebase-578cf.firebaseapp.com",
    projectId: "learning-firebase-578cf",
    storageBucket: "learning-firebase-578cf.appspot.com",
    messagingSenderId: "416747081500",
    appId: "1:416747081500:web:3d93e98c80de69797974d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore, collection, doc, setDoc, addDoc, getDoc, query, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
const db = getFirestore();

//variables to store form values

//general information variables
let spNameRegistered = document.getElementById("sp-company-name-reg");
let spName = document.getElementById("sp-company-name");
let spContactFirstName = document.getElementById("sp-contact-first");
let spContactLastName = document.getElementById("sp-contact-last");
let spEmail = document.getElementById("sp-email");
let spNumber = document.getElementById("sp-contact-number");
let spRegisteredAddress = document.getElementById("sp-regd-address");
let spWebsite = document.getElementById("sp-company-website");
let spCompanyRegisteredNumber = document.getElementById("sp-regd-number");
let spServiceBike = document.getElementById("sp-service-bike");
let spServiceCourier = document.getElementById("sp-service-courier");
let spServiceWarehouse = document.getElementById("sp-service-warehouse");
let spServiceFullfillment = document.getElementById("sp-service-fullfillment");
let spServiceHirefleet = document.getElementById("sp-service-hirefleet");
let btnSaveGeneral = document.getElementById("sp-save-general");

//kyc documents variables
let spSmallCompanyGST = document.getElementById("sp-company-gst");
let spSmallCompanyBank = document.getElementById("sp-company-bank");
let spSmallCompanyIFSC = document.getElementById("sp-company-ifsc");
let spSmallBtn = document.getElementById("sp-save-small-kyc");
let spLargeCompanyGST = document.getElementById("sp-large-company-gst");
let spLargeCompanyBank = document.getElementById("sp-large-company-bank");
let spLargeCompanyIFSC = document.getElementById("sp-large-company-ifsc");
let spSmallCompanyAadhar = document.getElementById("sp-small-company-aadhar");
let splargeBtn = document.getElementById("sp-save-large-kyc");

//function to add data from form

async function sendData() {
    await setDoc(doc(db, "user-list", spNameRegistered.value + spCompanyRegisteredNumber.value), {
        spNameRegistered: spNameRegistered.value,
        spName: spName.value,
        spContactFirstName: spContactFirstName.value,
        spContactLastName: spContactLastName.value,
        spEmail: spEmail.value,
        spNumber: spNumber.value,
        spRegisteredAddress: spRegisteredAddress.value,
        spWebsite: spWebsite.value,
        spCompanyRegisteredNumber: spCompanyRegisteredNumber.value,
        spServiceBike: spServiceBike.value,
        spServiceCourier: spServiceCourier.value,
        spServiceWarehouse: spServiceWarehouse.value,
        spServiceFullfillment: spServiceFullfillment.value,
        spServiceHirefleet: spServiceHirefleet.value
    });
    // set atleast one checkboxes set to required
    jQuery(function ($) {
        var requiredCheckboxes = $(':checkbox[required]');
        requiredCheckboxes.on('change', function (e) {
            var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
            var isChecked = checkboxGroup.is(':checked');
            checkboxGroup.prop('required', !isChecked);
        });
        requiredCheckboxes.trigger('change');
    });
}

btnSaveGeneral.addEventListener("click", sendData);
//event listeners for service provide next buttons
let spNextGeneral = document.getElementById("sp-next-general");
spNextGeneral.addEventListener("click", function () {
    sendData()
        .then(result => openKYC())
        .then(console.log("A"))
        .catch(console.log("B"))
});

async function updateKYCData1() {
    await updateDoc(doc(db, "user-list", spNameRegistered.value + spCompanyRegisteredNumber.value), {
        spSmallCompanyGST: spSmallCompanyGST.value,
        spSmallCompanyBank: spSmallCompanyBank.value,
        spSmallCompanyIFSC: spSmallCompanyIFSC.value,
        spSmallCompanyAadhar: spSmallCompanyAadhar.value
    });
}

async function updateKYCData2() {
    await updateDoc(doc(db, "user-list", spNameRegistered.value + spCompanyRegisteredNumber.value), {
        spLargeCompanyGST: spLargeCompanyGST.value,
        spLargeCompanyBank: spLargeCompanyBank.value,
        spLargeCompanyIFSC: spLargeCompanyIFSC.value
    });
}

spSmallBtn.addEventListener("click", updateKYCData1);

splargeBtn.addEventListener("click", updateKYCData2);

// upload images to storage giving an error
async function fireStorage() {
    for (var k = 0; k < spSmallFiles[k]; k++) {
        var imgtoupload = spSmallFiles[k];
    }

    var imgName = spSmallFiles[k].name + spSmallFiles[k].type;

    const storage = getStorage();
    const storageRef = sRef(storage, "Images/" + imgName);
    const UploadTask = uploadBytesResumable(storageRef, imgtoupload);
}

//variable for payment-type tab - sp page
let spPymntPrepaid = document.getElementById("pymnt-prepaid");
let spPymntCOD = document.getElementById("pymnt-cod");
let spPymntPaytm = document.getElementById("pymnt-paytm");
let spPymntGPAY = document.getElementById("pymnt-gpay");
let spPymntPhonepe = document.getElementById("pymnt-phonepe");
let spPymntUPI = document.getElementById("pymnt-upi");
let spPymntVisa = document.getElementById("pymnt-visa");
let spPymntAmazonPay = document.getElementById("pymnt-amazonpay");
let spPymntMobikwik = document.getElementById("pymnt-mobikwik");
let spPymntFreecharge = document.getElementById("pymnt-freecharge");
let spPymntDebit = document.getElementById("pymnt-debit");
let spPymntCredit = document.getElementById("pymnt-credit");
let spPymntATM = document.getElementById("pymnt-atm");
let spSavePayment = document.getElementById("sp-save-payment");

async function updatePayment() {
    await updateDoc(doc(db, "user-list", spNameRegistered.value + spCompanyRegisteredNumber.value), {
        spPymntPrepaid: spPymntPrepaid.value,
        spPymntCOD: spPymntCOD.value,
        spPymntPaytm: spPymntPaytm.value,
        spPymntGPAY: spPymntGPAY.value,
        spPymntPhonepe: spPymntPhonepe.value,
        spPymntUPI: spPymntUPI.value,
        spPymntVisa: spPymntVisa, value,
        spPymntAmazonPay: spPymntAmazonPay.value,
        spPymntMobikwik: spPymntMobikwik.value,
        spPymntFreecharge: spPymntFreecharge.value,
        spPymntDebit: spPymntDebit.value,
        spPymntCredit: spPymntCredit.vlaue,
        spPymntATM: spPymntATM.value
    });
    jQuery(function ($) {
        var requiredCheckboxes = $(':checkbox[required]');
        requiredCheckboxes.on('change', function (e) {
            var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
            var isChecked = checkboxGroup.is(':checked');
            checkboxGroup.prop('required', !isChecked);
        });
        requiredCheckboxes.trigger('change');
    });
}
spSavePayment.addEventListener("click", updatePayment);
