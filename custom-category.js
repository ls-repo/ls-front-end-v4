// add custom category input functionality - SP page parcel type tab
// code forked from - https://codepen.io/iamqamarali/pen/qyawoR
(function () {

    "use strict"


    // Plugin Constructor
    var TagsInput = function (opts) {
        this.options = Object.assign(TagsInput.defaults, opts);
        this.init();
    }

    // Initialize the plugin
    TagsInput.prototype.init = function (opts) {
        this.options = opts ? Object.assign(this.options, opts) : this.options;

        if (this.initialized)
            this.destroy();

        if (!(this.orignal_input = document.getElementById(this.options.selector))) {
            console.error("tags-input couldn't find an element with the specified ID");
            return this;
        }

        this.arr = [];
        this.wrapper = document.createElement('div');
        this.input = document.createElement('input');
        init(this);
        initEvents(this);

        this.initialized = true;
        return this;
    }

    // Add Tags
    TagsInput.prototype.addTag = function (string) {

        if (this.anyErrors(string))
            return;

        this.arr.push(string);
        var tagInput = this;

        var tag = document.createElement('span');
        tag.className = this.options.tagClass;
        tag.innerText = string;

        var closeIcon = document.createElement('a');
        closeIcon.innerHTML = '&times;';

        // delete the tag when icon is clicked
        closeIcon.addEventListener('click', function (e) {
            e.preventDefault();
            var tag = this.parentNode;

            for (var i = 0; i < tagInput.wrapper.childNodes.length; i++) {
                if (tagInput.wrapper.childNodes[i] == tag)
                    tagInput.deleteTag(tag, i);
            }
        })


        tag.appendChild(closeIcon);
        this.wrapper.insertBefore(tag, this.input);
        this.orignal_input.value = this.arr.join(',');

        return this;
    }

    // Delete Tags
    TagsInput.prototype.deleteTag = function (tag, i) {
        tag.remove();
        this.arr.splice(i, 1);
        this.orignal_input.value = this.arr.join(',');
        return this;
    }

    // Make sure input string have no error with the plugin
    TagsInput.prototype.anyErrors = function (string) {
        if (this.options.max != null && this.arr.length >= this.options.max) {
            console.log('max tags limit reached');
            return true;
        }

        if (!this.options.duplicate && this.arr.indexOf(string) != -1) {
            console.log('duplicate found " ' + string + ' " ')
            return true;
        }

        return false;
    }

    // Add tags programmatically 
    TagsInput.prototype.addData = function (array) {
        var plugin = this;

        array.forEach(function (string) {
            plugin.addTag(string);
        })
        return this;
    }

    // Get the Input String
    TagsInput.prototype.getInputString = function () {
        return this.arr.join(',');
    }


    // destroy the plugin
    TagsInput.prototype.destroy = function () {
        this.orignal_input.removeAttribute('hidden');

        delete this.orignal_input;
        var self = this;

        Object.keys(this).forEach(function (key) {
            if (self[key] instanceof HTMLElement)
                self[key].remove();

            if (key != 'options')
                delete self[key];
        });

        this.initialized = false;
    }

    // Private function to initialize the tag input plugin
    function init(tags) {
        tags.wrapper.append(tags.input);
        tags.wrapper.classList.add(tags.options.wrapperClass);
        tags.orignal_input.setAttribute('hidden', 'true');
        tags.orignal_input.parentNode.insertBefore(tags.wrapper, tags.orignal_input);
    }

    // initialize the Events
    function initEvents(tags) {
        tags.wrapper.addEventListener('click', function () {
            tags.input.focus();
        });


        tags.input.addEventListener('keydown', function (e) {
            var str = tags.input.value.trim();

            if (!!(~[9, 13, 188].indexOf(e.keyCode))) {
                e.preventDefault();
                tags.input.value = "";
                if (str != "")
                    tags.addTag(str);
            }

        });
    }


    // Set All the Default Values
    TagsInput.defaults = {
        selector: '',
        wrapperClass: 'tags-input-wrapper',
        tagClass: 'tag',
        max: null,
        duplicate: false
    }

    window.TagsInput = TagsInput;

})();


//First Input
var tagInput1 = new TagsInput({
    selector: 'tag-input1',
    duplicate: false
});
tagInput1.addData(['add new tag here']);
// array to store checked values in SP page - parcel type
let ptApparelServices = [];

function ptApparelAdd() {
    // storing the custom tags from user in declared variable
    let ptApparelValues = document.getElementById("tag-input1").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptApparelValuesArray = ptApparelValues.split(",");
    //Reference the container with input tags
    let ptApparelTags = document.getElementById("pt-apparel-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (tagInput1.arr.length !== 0) {
        for (let m = 0; m < ptApparelValuesArray.length; m++) {
            console.log(ptApparelValuesArray[m]);
            ptApparelTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-apparel-label">
            <input class="cat-apparel" type="checkbox" name="" value="${ptApparelValuesArray[m]}" checked=""><span>${ptApparelValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    tagInput1.arr = [];
    // deleting the custom tags from the array
    ptApparelValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    tagInput1.deleteTag;
    tagInput1.orignal_input.value = "";
    let ptApparel = tagInput1.wrapper.childNodes;
    for (let i = 0; i < ptApparel.length - 1; i++) {
        tagInput1.wrapper.childNodes[i].innerHTML = "";
        tagInput1.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    tagInput1.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptApparelChecks = ptApparelTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptApparelChecks.length; i++) {
        if (ptApparelChecks[i].checked) {
            ptApparelServices.push(ptApparelChecks[i].value);
            console.log(ptApparelServices);
        }
    }
}

let ptApparelBtn = document.getElementById("pt-apparel-btn");
ptApparelBtn.addEventListener("click", ptApparelAdd);

//Second Input
var tagInput2 = new TagsInput({
    selector: 'tag-input2',
    duplicate: false
});
tagInput2.addData(['add new tag here']);

// array to store checked values in SP page - parcel type
let ptElectronicsServices = [];

function ptElectronicsAdd() {
    // storing the custom tags from user in declared variable
    let ptElectronicsValues = document.getElementById("tag-input2").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptElectronicsValuesArray = ptElectronicsValues.split(",");
    //Reference the container with input tags
    let ptElectronicsTags = document.getElementById("pt-electric-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (tagInput1.arr.length !== 0) {
        for (let m = 0; m < ptElectronicsValuesArray.length; m++) {
            console.log(ptElectronicsValuesArray[m]);
            ptElectronicsTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-apparel-label">
            <input class="cat-apparel" type="checkbox" name="" value="${ptElectronicsValuesArray[m]}" checked=""><span>${ptElectronicsValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    tagInput2.arr = [];
    // deleting the custom tags from the array
    ptElectronicsValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    tagInput2.deleteTag;
    tagInput2.orignal_input.value = "";
    let ptElectronics = tagInput2.wrapper.childNodes;
    for (let i = 0; i < ptElectronics.length - 1; i++) {
        tagInput2.wrapper.childNodes[i].innerHTML = "";
        tagInput2.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    tagInput2.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptElectronicsChecks = ptElectronicsTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptElectronicsChecks.length; i++) {
        if (ptElectronicsChecks[i].checked) {
            ptElectronicsServices.push(ptElectronicsChecks[i].value);
            console.log(ptElectronicsServices);
        }
    }
}

let ptElectronicsBtn = document.getElementById("pt-electric-btn");
ptElectronicsBtn.addEventListener("click", ptElectronicsAdd);

//Third Input
var tagInput3 = new TagsInput({
    selector: 'tag-input3',
    duplicate: false
});
tagInput3.addData(['add new tag here']);
// array to store checked values in SP page - parcel type
let ptAutomotiveServices = [];

function ptAutomotiveAdd() {
    // storing the custom tags from user in declared variable
    let ptAutomotiveValues = document.getElementById("tag-input3").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptAutomotiveValuesArray = ptAutomotiveValues.split(",");
    //Reference the container with input tags
    let ptAutomotiveTags = document.getElementById("pt-automotive-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (tagInput3.arr.length !== 0) {
        for (let m = 0; m < ptAutomotiveValuesArray.length; m++) {
            console.log(ptAutomotiveValuesArray[m]);
            ptAutomotiveTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-apparel-label">
            <input class="cat-apparel" type="checkbox" name="" value="${ptAutomotiveValuesArray[m]}" checked=""><span>${ptAutomotiveValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    tagInput3.arr = [];
    // deleting the custom tags from the array
    ptAutomotiveValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    tagInput3.deleteTag;
    tagInput3.orignal_input.value = "";
    let ptAutomotive = tagInput1.wrapper.childNodes;
    for (let i = 0; i < ptAutomotive.length - 1; i++) {
        tagInput3.wrapper.childNodes[i].innerHTML = "";
        tagInput3.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    tagInput3.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptAutomotiveChecks = ptAutomotiveTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptAutomotiveChecks.length; i++) {
        if (ptAutomotiveChecks[i].checked) {
            ptAutomotiveServices.push(ptAutomotiveChecks[i].value);
            console.log(ptAutomotiveServices);
        }
    }
}

let ptAutomotiveBtn = document.getElementById("pt-automotive-btn");
ptAutomotiveBtn.addEventListener("click", ptAutomotiveAdd);


//Input 4
var taginput4 = new TagsInput({
    selector: 'tag-input4',
    duplicate: false
});
taginput4.addData(['add new tag here']);
// array to store checked values in SP page - parcel type
let ptFreshServices = [];

function ptFreshAdd() {
    // storing the custom tags from user in declared variable
    let ptFreshValues = document.getElementById("tag-input4").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptFreshValuesArray = ptFreshValues.split(",");
    //Reference the container with input tags
    let ptFreshTags = document.getElementById("pt-fresh-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (taginput4.arr.length !== 0) {
        for (let m = 0; m < ptFreshValuesArray.length; m++) {
            console.log(ptFreshValuesArray[m]);
            ptFreshTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-fresh-label">
            <input class="cat-fresh" type="checkbox" name="" value="${ptFreshValuesArray[m]}" checked=""><span>${ptFreshValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    taginput4.arr = [];
    // deleting the custom tags from the array
    ptFreshValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    taginput4.deleteTag;
    taginput4.orignal_input.value = "";
    let ptFresh = taginput4.wrapper.childNodes;
    for (let i = 0; i < ptFresh.length - 1; i++) {
        taginput4.wrapper.childNodes[i].innerHTML = "";
        taginput4.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    taginput4.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptFreshChecks = ptFreshTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptFreshChecks.length; i++) {
        if (ptFreshChecks[i].checked) {
            ptFreshServices.push(ptFreshChecks[i].value);
            console.log(ptFreshServices);
        }
    }
}

let ptFreshBtn = document.getElementById("pt-fresh-btn");
ptFreshBtn.addEventListener("click", ptFreshAdd);


//input 5
var tagInput5 = new TagsInput({
    selector: 'tag-input5',
    duplicate: false
});
tagInput5.addData(['add new tag here']);
// array to store checked values in SP page - parcel type
let ptBooksServices = [];

function ptBooksAdd() {
    // storing the custom tags from user in declared variable
    let ptBooksValues = document.getElementById("tag-input5").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptBooksValuesArray = ptBooksValues.split(",");
    //Reference the container with input tags
    let ptBooksTags = document.getElementById("pt-books-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (tagInput5.arr.length !== 0) {
        for (let m = 0; m < ptBooksValuesArray.length; m++) {
            console.log(ptBooksValuesArray[m]);
            ptBooksTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-books-label">
            <input class="cat-books" type="checkbox" name="" value="${ptBooksValuesArray[m]}" checked=""><span>${ptBooksValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    tagInput5.arr = [];
    // deleting the custom tags from the array
    ptBooksValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    tagInput5.deleteTag;
    tagInput5.orignal_input.value = "";
    let ptBooks = tagInput5.wrapper.childNodes;
    for (let i = 0; i < ptBooks.length - 1; i++) {
        tagInput5.wrapper.childNodes[i].innerHTML = "";
        tagInput5.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    tagInput5.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptBooksChecks = ptBooksTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptBooksChecks.length; i++) {
        if (ptBooksChecks[i].checked) {
            ptBooksServices.push(ptBooksChecks[i].value);
            console.log(ptBooksServices);
        }
    }
}

let ptBooksBtn = document.getElementById("pt-books-btn");
ptBooksBtn.addEventListener("click", ptBooksAdd);


//Input 6
var tagInput6 = new TagsInput({
    selector: 'tag-input6',
    duplicate: false
});
tagInput6.addData(['add new tag here']);
// array to store checked values in SP page - parcel type
let ptEssentialsServices = [];

function ptEssentialsAdd() {
    // storing the custom tags from user in declared variable
    let ptEssentialsValues = document.getElementById("tag-input6").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptEssentialsValuesArray = ptEssentialsValues.split(",");
    //Reference the container with input tags
    let ptEssentialsTags = document.getElementById("pt-essentials-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (tagInput6.arr.length !== 0) {
        for (let m = 0; m < ptEssentialsValuesArray.length; m++) {
            console.log(ptEssentialsValuesArray[m]);
            ptEssentialsTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-books-label">
            <input class="cat-books" type="checkbox" name="" value="${ptEssentialsValuesArray[m]}" checked=""><span>${ptEssentialsValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    tagInput6.arr = [];
    // deleting the custom tags from the array
    ptEssentialsValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    tagInput6.deleteTag;
    tagInput6.orignal_input.value = "";
    let ptEssentials = tagInput6.wrapper.childNodes;
    for (let i = 0; i < ptEssentials.length - 1; i++) {
        tagInput6.wrapper.childNodes[i].innerHTML = "";
        tagInput6.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    tagInput6.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptEssentialsChecks = ptEssentialsTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptEssentialsChecks.length; i++) {
        if (ptEssentialsChecks[i].checked) {
            ptEssentialsServices.push(ptEssentialsChecks[i].value);
            console.log(ptEssentialsServices);
        }
    }
}

let ptEssentialsBtn = document.getElementById("pt-essentials-btn");
ptEssentialsBtn.addEventListener("click", ptEssentialsAdd);


//input 7
var tagInput7 = new TagsInput({
    selector: 'tag-input7',
    duplicate: false
});
tagInput7.addData(['add new tag here']);
// array to store checked values in SP page - parcel type
let ptHouseholdsServices = [];

function ptHouseholdsAdd() {
    // storing the custom tags from user in declared variable
    let ptHouseholdsValues = document.getElementById("tag-input7").value;
    // splitting custom tags stored in previous variable and storing in an Array 
    let ptHouseholdsValuesArray = ptHouseholdsValues.split(",");
    //Reference the container with input tags
    let ptHouseholdsTags = document.getElementById("pt-household-tags");
    //for loop to add the custom tags from user to existing div to showcase them as checked
    if (tagInput7.arr.length !== 0) {
        for (let m = 0; m < ptHouseholdsValuesArray.length; m++) {
            console.log(ptHouseholdsValuesArray[m]);
            ptHouseholdsTags.innerHTML += `<div class="cat-select-input">
            <label class="cat-household-label">
            <input class="cat-household" type="checkbox" name="" value="${ptHouseholdsValuesArray[m]}" checked=""><span>${ptHouseholdsValuesArray[m]}</span>
            </label>
        </div>`
        }
    }
    // deleting the custom tags from the array
    tagInput7.arr = [];
    // deleting the custom tags from the array
    ptHouseholdsValuesArray = [];
    // deleting the custom tags from html and setting the value to zero - also setting display none to the previous span tags creating
    tagInput7.deleteTag;
    tagInput7.orignal_input.value = "";
    let ptHouseholds = tagInput7.wrapper.childNodes;
    for (let i = 0; i < ptHouseholds.length - 1; i++) {
        tagInput7.wrapper.childNodes[i].innerHTML = "";
        tagInput7.wrapper.childNodes[i].style.display = "none";
    }
    // placeholder tag dor custom tag input
    tagInput7.addData(['add new tag here']);

    //Reference all the CheckBoxes in parent div
    let ptHouseholdsChecks = ptHouseholdsTags.getElementsByTagName("input");

    // for loop to push the checked CheckBox values in Array.
    for (var i = 0; i < ptHouseholdsChecks.length; i++) {
        if (ptHouseholdsChecks[i].checked) {
            ptHouseholdsServices.push(ptHouseholdsChecks[i].value);
            console.log(ptHouseholdsServices);
        }
    }
}

let ptHouseholdsBtn = document.getElementById("pt-household-btn");
ptHouseholdsBtn.addEventListener("click", ptHouseholdsAdd);
