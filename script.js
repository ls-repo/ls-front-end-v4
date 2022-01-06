//Breadcrumbs based on URL location
/*if ($('#siteBreadcrumb ol.breadcrumb')) {
    var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);

    var parts = [{
        "text": 'Home',
        "link": '/'
  }];

    for (var j = 0; j < here.length; j++) {
        var part = here[j];
        var pageName = part.toLowerCase();
        pageName = part.charAt(0).toUpperCase() + part.slice(1);
        var link = '/' + here.slice(0, j + 1).join('/');
        $('#siteBreadcrumb ol.breadcrumb').append('<li><a href="' + link + '">' + pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '') + '</a></li>');
        parts.push({
            "text": pageName,
            "link": link
        });
    }
}*/

//Show password function for Service Provider Page - Settings Tab
function oldPass() {
    let showoldpass = document.getElementById("old-pass");
    if (showoldpass.type === "password") {
        showoldpass.type = "text";
    } else {
        showoldpass.type = "password";
    }
}

function newPass() {
    let showpass = document.getElementById("new-pass");
    let showpass2 = document.getElementById("new-pass-2");
    if (showpass.type === "password") {
        showpass.type = "text";
        showpass2.type = "text";
    } else {
        showpass.type = "password";
        showpass2.type = "password";
    }
}


//Set visibility for my-account tab sub-menu options - Displays .pds-document when my-account tab is active in service provider page
$('#account-tab').on('click', function () {
    $('.pds-document').addClass('sp-show');
});

$('.std-button').on('click', function () {
    $('.pds-document').removeClass('sp-show');
});


/* Function to add contact data to contact table in new row - For SP Page - Contacts Tab */
// counter for creating auto id's for contact rows
let cdiCounter = 0;

let contactArray = [];

function addContactRow() {
    let stateValue = document.getElementById("cdi-state");
    let nameValue = document.getElementById("cdi-name");
    let roleValue = document.getElementById("cdi-role");
    let cityValue = document.getElementById("cdi-city");
    let emailValue = document.getElementById("cdi-email");
    let contactValue = document.getElementById("cdi-contact");

    let valueArray = [stateValue, nameValue, roleValue, cityValue, emailValue, contactValue];

    /*Counter for adding new serial no for new rows*/
    ++cdiCounter;

    /* Pushing data from modal form to the contact-table div*/
    const div = document.createElement('div');
    div.className = "contact-details-wrapper";
    div.id = `contactNo${cdiCounter}`;

    div.innerHTML = `
                <p class="contact-details"></p>
                <p class="contact-details">${cdiCounter}</p>
                <p class="contact-details">${stateValue.value}</p>
                <p class="contact-details">${nameValue.value}</p>
                <p class="contact-details">${roleValue.value}</p>
                <p class="contact-details">${cityValue.value}</p>
                <p class="contact-details">${emailValue.value}</p>
                <p class="contact-details">${contactValue.value}</p>
                <input class="contact-details contact-details-input" type="checkbox">
            `;

    let contactobj = {};
    contactobj[`newNo${cdiCounter}`] = { state: `${stateValue.value}`, name: `${nameValue.value}`, role: `${roleValue.value}`, city: `${cityValue.value}`, email: `${emailValue.value}`, contact: `${contactValue.value}` };
    console.log(contactobj[`newNo${cdiCounter}`]);
    contactArray.push(contactobj[`newNo${cdiCounter}`]);

    /* Close the modal after submitting contact information  */
    $('#exampleModal').modal('hide');

    /* Create modal form input values */
    for (i = 0; i < valueArray.length; ++i) {
        valueArray[i].value = "";
    }
}

//function for deleting selected contacts row - contacts tab
function deleteContactsRow() {
    let contactsWrapper = document.getElementById("test-id");
    for (let i = 0; i < contactsWrapper.getElementsByTagName("input").length; i++) {
        if (contactsWrapper.getElementsByTagName("input")[i].checked == true) {
            contactsWrapper.getElementsByTagName("input")[i].parentElement.remove();
            contactArray.splice([i], 1);
        }
    }
}


/* Functions for individual and company buttons - SP page - my account tab - kyc documents sub-tab */
function pdsIndividual() {
    document.getElementById("pds-individual").style.display = "block";
    document.getElementById("pds-company").style.display = "none";
}

function pdsCompany() {
    document.getElementById("pds-individual").style.display = "none";
    document.getElementById("pds-company").style.display = "block";
}

$('#pds-ind-btn').on('click', function () {
    $('#pds-ind-btn').addClass('pds-ct-active');
    $('#pds-com-btn').removeClass('pds-ct-active');
});

$('#pds-com-btn').on('click', function () {
    $('#pds-ind-btn').removeClass('pds-ct-active');
    $('#pds-com-btn').addClass('pds-ct-active');
});


/* Functions for opening different tabs */
function openGeneral() {
    document.getElementById("general-info").style.display = "block";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsGeneral = document.getElementById("pds-general");
pdsGeneral.addEventListener("click", openGeneral);

function openKYC() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "block";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    $('#pds-ind-btn').addClass('pds-ct-active');
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsKYC = document.getElementById("pds-kyc");
pdsKYC.addEventListener("click", openKYC);

function paymentMethod() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "block";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsPayment = document.getElementById("pds-payment");
pdsPayment.addEventListener("click", paymentMethod);

function parcelType() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "block";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsParcel = document.getElementById("pds-parcel");
pdsParcel.addEventListener("click", parcelType);

function addContacts() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "block";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsContacts = document.getElementById("pds-contacts");
pdsContacts.addEventListener("click", addContacts);

function addPricing() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "block";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "block";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
}

let pdsPricing = document.getElementById("pds-pricing");
pdsPricing.addEventListener("click", addPricing);

function deliveryLocation() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "block";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName('pds-document-sub-outer')[0].style.display = "block";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsDelivery = document.getElementById("pds-delivery");
pdsDelivery.addEventListener("click", deliveryLocation);

function addAdvt() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "block";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsAdvt = document.getElementById("pds-advt");
pdsAdvt.addEventListener("click", addAdvt);

function addRequest() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "block";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsRequest = document.getElementById("pds-request");
pdsRequest.addEventListener("click", addRequest);

function addBusinessPartner() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "block";
    document.getElementById("business-opp").style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsPartner = document.getElementById("pds-biz-partner");
pdsPartner.addEventListener("click", addBusinessPartner);

function addBusinessOpp() {
    document.getElementById("general-info").style.display = "none";
    document.getElementById("kyc-docs").style.display = "none";
    document.getElementById("payment-method").style.display = "none";
    document.getElementById("parcel-type").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("pricing-model").style.display = "none";
    document.getElementById("delivery-location").style.display = "none";
    document.getElementById("upload-advt").style.display = "none";
    document.getElementById("requests-received").style.display = "none";
    document.getElementById("business-partners").style.display = "none";
    document.getElementById("business-opp").style.display = "block";
    document.getElementsByClassName("pds-document-sub-outer")[0].style.display = "none";
    document.getElementsByClassName("pds-document-sub-outer-1")[0].style.display = "none";
}

let pdsOpp = document.getElementById("pds-biz-opportunity");
pdsOpp.addEventListener("click", addBusinessOpp);


// select all categories listed in parcel-type tab - SP page - category - apparels
$('#select-all-app').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-apparel').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-apparel').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in parcel type tab in SP page
$("#select-all-1").on('click', function () {
    $('#select-all-1').addClass("hide");
    $("#select-all-1").removeClass("show");
    $("#unselect-all-1").addClass("show");
    $("#unselect-all-1").removeClass("hide");
});

$("#unselect-all-1").on("click", function () {
    $("#select-all-1").addClass("show");
    $("#select-all-1").removeClass("hide");
    $("#unselect-all-1").addClass("hide");
    $("#unselect-all-1").removeClass("show");
});

// select all categories listed in parcel-type tab - SP page - category - electronics
$('#select-all-electric').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-electric').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-electric').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in electric type tab in SP page
$("#select-all-2").on('click', function () {
    $('#select-all-2').addClass("hide");
    $("#select-all-2").removeClass("show");
    $("#unselect-all-2").addClass("show");
    $("#unselect-all-2").removeClass("hide");
});

$("#unselect-all-2").on("click", function () {
    $("#select-all-2").addClass("show");
    $("#select-all-2").removeClass("hide");
    $("#unselect-all-2").addClass("hide");
    $("#unselect-all-2").removeClass("show");
});


// select all categories listed in parcel-type tab - SP page - category - automotive
$('#select-all-automotive').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-automotive').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-automotive').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in automotive type tab in SP page
$("#select-all-3").on('click', function () {
    $('#select-all-3').addClass("hide");
    $("#select-all-3").removeClass("show");
    $("#unselect-all-3").addClass("show");
    $("#unselect-all-3").removeClass("hide");
});

$("#unselect-all-3").on("click", function () {
    $("#select-all-3").addClass("show");
    $("#select-all-3").removeClass("hide");
    $("#unselect-all-3").addClass("hide");
    $("#unselect-all-3").removeClass("show");
});


// select all categories listed in parcel-type tab - SP page - category - fresh
$('#select-all-fresh').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-fresh').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-fresh').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in automotive type tab in SP page
$("#select-all-4").on('click', function () {
    $('#select-all-4').addClass("hide");
    $("#select-all-4").removeClass("show");
    $("#unselect-all-4").addClass("show");
    $("#unselect-all-4").removeClass("hide");
});

$("#unselect-all-4").on("click", function () {
    $("#select-all-4").addClass("show");
    $("#select-all-4").removeClass("hide");
    $("#unselect-all-4").addClass("hide");
    $("#unselect-all-4").removeClass("show");
});

// select all categories listed in parcel-type tab - SP page - category - books
$('#select-all-books').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-books').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-books').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in books type tab in SP page
$("#select-all-5").on('click', function () {
    $('#select-all-5').addClass("hide");
    $("#select-all-5").removeClass("show");
    $("#unselect-all-5").addClass("show");
    $("#unselect-all-5").removeClass("hide");
});

$("#unselect-all-5").on("click", function () {
    $("#select-all-5").addClass("show");
    $("#select-all-5").removeClass("hide");
    $("#unselect-all-5").addClass("hide");
    $("#unselect-all-5").removeClass("show");
});

// select all categories listed in parcel-type tab - SP page - category - essential
$('#select-all-essential').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-essential').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-essential').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in essential type tab in SP page
$("#select-all-6").on('click', function () {
    $('#select-all-6').addClass("hide");
    $("#select-all-6").removeClass("show");
    $("#unselect-all-6").addClass("show");
    $("#unselect-all-6").removeClass("hide");
});

$("#unselect-all-6").on("click", function () {
    $("#select-all-6").addClass("show");
    $("#select-all-6").removeClass("hide");
    $("#unselect-all-6").addClass("hide");
    $("#unselect-all-6").removeClass("show");
});

// select all categories listed in parcel-type tab - SP page - category - essential
$('#select-all-household').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $('.cat-household').each(function () {
            this.checked = true;
        });
    } else {
        $('.cat-household').each(function () {
            this.checked = false;
        });
    }
});

// change text of select all to unselect all in essential type tab in SP page
$("#select-all-7").on('click', function () {
    $('#select-all-7').addClass("hide");
    $("#select-all-7").removeClass("show");
    $("#unselect-all-7").addClass("show");
    $("#unselect-all-7").removeClass("hide");
});

$("#unselect-all-7").on("click", function () {
    $("#select-all-7").addClass("show");
    $("#select-all-7").removeClass("hide");
    $("#unselect-all-7").addClass("hide");
    $("#unselect-all-7").removeClass("show");
});


//delivery-location tab sub tabs functionality - SP page
$("#dl-shipping-btn").on("click", function () {
    $("#dl-shipping-btn").addClass('pds-ds-active');
    $("#dl-courier-btn").removeClass("pds-ds-active");
    $("#dl-shipping").addClass("dl-active");
    $("#dl-courier").removeClass("dl-active");
});

$("#dl-courier-btn").on("click", function () {
    $("#dl-shipping-btn").removeClass('pds-ds-active');
    $("#dl-courier-btn").addClass("pds-ds-active");
    $("#dl-shipping").removeClass("dl-active");
    $("#dl-courier").addClass("dl-active");
});

//pricing-model tab sub tabs functionality - SP page
$("#dl-weight-btn").on("click", function () {
    $("#dl-weight-btn").addClass('pds-ds-active');
    $("#dl-distance-btn").removeClass("pds-ds-active");
    $("#dl-weight").addClass("dl-active");
    $("#dl-distance").removeClass("dl-active");
});

$("#dl-distance-btn").on("click", function () {
    $("#dl-weight-btn").removeClass('pds-ds-active');
    $("#dl-distance-btn").addClass("pds-ds-active");
    $("#dl-weight").removeClass("dl-active");
    $("#dl-distance").addClass("dl-active");
});

//converting default checbox value to true/false - to understand checkbox checked and unchecked values
$('.custom-checkbox').on('click', function () {
    $(this).val(this.checked ? true : false);
});

// upload files to fireabse storage - giving an error 
let spSmallFiles = [];
var reader = new FileReader();

var spSmallInput = document.getElementById("pds-upload-multiple-small");
spSmallInput.type = "file";

spSmallInput.onchange = e => {
    files = e.target.files;
    spSmallFiles = files;
    console.log(spSmallFiles);
    let htmlSmall = document.getElementById("pds-kyc-small-multiple");
    for (var i = 0; i < spSmallFiles.length; i++) {
        console.log(spSmallFiles[i]);
        htmlSmall.innerHTML +=
            `<div class="pds-kyc-add pds-kyc-upload-multiple">
                <p>
                <span>${new Date().toLocaleDateString()}</span>
                <span>${new Date().toLocaleTimeString()}</span>
                </p>
                <p>Uploaded By</p>
                <p>${spSmallFiles[i].name}</p>
                <p>${spSmallFiles[i].type}</p>
                <p>Sort By</p>
            </div>`;
    }
}

// prompt for missing fields
var once = false;
function prompt() {
    if (once == false) {
        alert('Check for missing required fields!');
        once = true;
    }
}


// Pricing Model Functions

// Pricing Model Bike Function
function addBikePricing() {
    let pmBikeRate = document.getElementById("pm-bike-rate-per-km");
    let pmBikeMinKm = document.getElementById("pm-bike-min-km");
    let pmBikeMaxKm = document.getElementById("pm-bike-max-km");
    let pmBikeMinWeight = document.getElementById("pm-bike-min-weight");
    let pmBikeMaxWeight = document.getElementById("pm-bike-max-weight");
    let pmBikeGST = document.getElementById("pm-bike-gst");

    document.getElementById("pm-bike-rate-value").innerHTML = `${pmBikeRate.value}`;
    document.getElementById("pm-bike-min-km-value").innerHTML = `${pmBikeMinKm.value}`;
    document.getElementById("pm-bike-max-km-value").innerHTML = `${pmBikeMaxKm.value}`;
    document.getElementById("pm-bike-min-weight-value").innerHTML = `${pmBikeMinWeight.value}`;
    document.getElementById("pm-bike-max-weight-value").innerHTML = `${pmBikeMaxWeight.value}`;
    document.getElementById("pm-bike-gst-value").innerHTML = `${pmBikeGST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-bike-modal').modal('hide');
}

// Pricing Model E-Rickshaw Function
function addRickshawPricing() {
    let pmRickshawRate = document.getElementById("pm-rickshaw-rate-per-km");
    let pmRickshawMinKm = document.getElementById("pm-rickshaw-min-km");
    let pmRickshawMaxKm = document.getElementById("pm-rickshaw-max-km");
    let pmRickshawMinWeight = document.getElementById("pm-rickshaw-min-weight");
    let pmRickshawMaxWeight = document.getElementById("pm-rickshaw-max-weight");
    let pmRickshawGST = document.getElementById("pm-rickshaw-gst");

    document.getElementById("pm-rickshaw-rate-value").innerHTML = `${pmRickshawRate.value}`;
    document.getElementById("pm-rickshaw-min-km-value").innerHTML = `${pmRickshawMinKm.value}`;
    document.getElementById("pm-rickshaw-max-km-value").innerHTML = `${pmRickshawMaxKm.value}`;
    document.getElementById("pm-rickshaw-min-weight-value").innerHTML = `${pmRickshawMinWeight.value}`;
    document.getElementById("pm-rickshaw-max-weight-value").innerHTML = `${pmRickshawMaxWeight.value}`;
    document.getElementById("pm-rickshaw-gst-value").innerHTML = `${pmRickshawGST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-rickshaw-modal').modal('hide');
}

// Pricing Model Tempo Function
function addTempoPricing() {
    let pmTempoRate = document.getElementById("pm-tempo-rate-per-km");
    let pmTempoMinKm = document.getElementById("pm-tempo-min-km");
    let pmTempoMaxKm = document.getElementById("pm-tempo-max-km");
    let pmTempoMinWeight = document.getElementById("pm-tempo-min-weight");
    let pmTempoMaxWeight = document.getElementById("pm-tempo-max-weight");
    let pmTempoGST = document.getElementById("pm-tempo-gst");

    document.getElementById("pm-tempo-rate-value").innerHTML = `${pmTempoRate.value}`;
    document.getElementById("pm-tempo-min-km-value").innerHTML = `${pmTempoMinKm.value}`;
    document.getElementById("pm-tempo-max-km-value").innerHTML = `${pmTempoMaxKm.value}`;
    document.getElementById("pm-tempo-min-weight-value").innerHTML = `${pmTempoMinWeight.value}`;
    document.getElementById("pm-tempo-max-weight-value").innerHTML = `${pmTempoMaxWeight.value}`;
    document.getElementById("pm-tempo-gst-value").innerHTML = `${pmTempoGST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-tempo-modal').modal('hide');
}

// Pricing Model Half-truck Pricing
function addHtruckPricing() {
    let pmHtruckRate = document.getElementById("pm-htruck-rate-per-km");
    let pmHtruckMinKm = document.getElementById("pm-htruck-min-km");
    let pmHtruckMaxKm = document.getElementById("pm-htruck-max-km");
    let pmHtruckMinWeight = document.getElementById("pm-htruck-min-weight");
    let pmHtruckMaxWeight = document.getElementById("pm-htruck-max-weight");
    let pmHtruckGST = document.getElementById("pm-htruck-gst");

    document.getElementById("pm-htruck-rate-value").innerHTML = `${pmHtruckRate.value}`;
    document.getElementById("pm-htruck-min-km-value").innerHTML = `${pmHtruckMinKm.value}`;
    document.getElementById("pm-htruck-max-km-value").innerHTML = `${pmHtruckMaxKm.value}`;
    document.getElementById("pm-htruck-min-weight-value").innerHTML = `${pmHtruckMinWeight.value}`;
    document.getElementById("pm-htruck-max-weight-value").innerHTML = `${pmHtruckMaxWeight.value}`;
    document.getElementById("pm-htruck-gst-value").innerHTML = `${pmHtruckGST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-htruck-modal').modal('hide');
}


// Pricing Model Full-truck Pricing
function addFtruckPricing() {
    let pmFtruckRate = document.getElementById("pm-ftruck-rate-per-km");
    let pmFtruckMinKm = document.getElementById("pm-ftruck-min-km");
    let pmFtruckMaxKm = document.getElementById("pm-ftruck-max-km");
    let pmFtruckMinWeight = document.getElementById("pm-ftruck-min-weight");
    let pmFtruckMaxWeight = document.getElementById("pm-ftruck-max-weight");
    let pmFtruckGST = document.getElementById("pm-ftruck-gst");

    document.getElementById("pm-ftruck-rate-value").innerHTML = `${pmFtruckRate.value}`;
    document.getElementById("pm-ftruck-min-km-value").innerHTML = `${pmFtruckMinKm.value}`;
    document.getElementById("pm-ftruck-max-km-value").innerHTML = `${pmFtruckMaxKm.value}`;
    document.getElementById("pm-ftruck-min-weight-value").innerHTML = `${pmFtruckMinWeight.value}`;
    document.getElementById("pm-ftruck-max-weight-value").innerHTML = `${pmFtruckMaxWeight.value}`;
    document.getElementById("pm-ftruck-gst-value").innerHTML = `${pmFtruckGST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-ftruck-modal').modal('hide');
}


// Pricing Model Container 20L Pricing
function addContainer20Pricing() {
    let pmContainer20Rate = document.getElementById("pm-container20-rate-per-km");
    let pmContainer20MinKm = document.getElementById("pm-container20-min-km");
    let pmContainer20MaxKm = document.getElementById("pm-container20-max-km");
    let pmContainer20MinWeight = document.getElementById("pm-container20-min-weight");
    let pmContainer20MaxWeight = document.getElementById("pm-container20-max-weight");
    let pmContainer20GST = document.getElementById("pm-container20-gst");

    document.getElementById("pm-container20-rate-value").innerHTML = `${pmContainer20Rate.value}`;
    document.getElementById("pm-container20-min-km-value").innerHTML = `${pmContainer20MinKm.value}`;
    document.getElementById("pm-container20-max-km-value").innerHTML = `${pmContainer20MaxKm.value}`;
    document.getElementById("pm-container20-min-weight-value").innerHTML = `${pmContainer20MinWeight.value}`;
    document.getElementById("pm-container20-max-weight-value").innerHTML = `${pmContainer20MaxWeight.value}`;
    document.getElementById("pm-container20-gst-value").innerHTML = `${pmContainer20GST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-container20-modal').modal('hide');
}

// Pricing Model Container 40L Pricing
function addContainer40Pricing() {
    let pmContainer40Rate = document.getElementById("pm-container40-rate-per-km");
    let pmContainer40MinKm = document.getElementById("pm-container40-min-km");
    let pmContainer40MaxKm = document.getElementById("pm-container40-max-km");
    let pmContainer40MinWeight = document.getElementById("pm-container40-min-weight");
    let pmContainer40MaxWeight = document.getElementById("pm-container40-max-weight");
    let pmContainer40GST = document.getElementById("pm-container40-gst");

    document.getElementById("pm-container40-rate-value").innerHTML = `${pmContainer40Rate.value}`;
    document.getElementById("pm-container40-min-km-value").innerHTML = `${pmContainer40MinKm.value}`;
    document.getElementById("pm-container40-max-km-value").innerHTML = `${pmContainer40MaxKm.value}`;
    document.getElementById("pm-container40-min-weight-value").innerHTML = `${pmContainer40MinWeight.value}`;
    document.getElementById("pm-container40-max-weight-value").innerHTML = `${pmContainer40MaxWeight.value}`;
    document.getElementById("pm-container40-gst-value").innerHTML = `${pmContainer40GST.value}`;

    /* Close the modal after submitting contact information  */
    $('#pm-container40-modal').modal('hide');
}
