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
var cdiCounter = 1;

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

    div.innerHTML = `
                <p class="contact-details"></p>
                <p class="contact-details">${cdiCounter}</p>
                <p class="contact-details">${stateValue.value}</p>
                <p class="contact-details">${nameValue.value}</p>
                <p class="contact-details">${roleValue.value}</p>
                <p class="contact-details">${cityValue.value}</p>
                <p class="contact-details">${emailValue.value}</p>
                <p class="contact-details">${contactValue.value}</p>
            `;

    /* Close the modal after submitting contact information  */
    document.getElementById("test-id").appendChild(div);
    $('#exampleModal').modal('hide');

    /* Create modal form input values */
    for (i = 0; i < valueArray.length; ++i) {
        valueArray[i].value = "";
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
    $("#dl-courier-btn").addClass("pds-ds-active");
    $("#dl-courier").addClass("dl-active");
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

//converting default checbox value to true/false - to understand checkbox checked and unchecked values
$('.custom-checkbox').on('click', function () {
    $(this).val(this.checked ? true : false);
});
