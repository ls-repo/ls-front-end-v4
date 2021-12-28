// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

// Import firebase authentication 
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

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
let generalBtn = document.getElementById("sp-save-general");

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
}

generalBtn.addEventListener("click", sendData);

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

