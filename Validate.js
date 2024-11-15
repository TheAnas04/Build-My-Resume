function validateInformation() {
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let mail = document.getElementById('mail').value;
    let address = document.getElementById('location').value;
    let tenth = document.getElementById('tenth').value;
    let twelve = document.getElementById('twelve').value;
    let bchlr = document.getElementById('bchlr').value;
    let master = document.getElementById('master').value;

    try{

        vName = validateName();
        vPhoneNumber = validatePhoneNumber();
        vMail = validateMail();
        vTenth = validateTenth();
        vTwleve = validateTwelve();
        vSkills = validateSkills();
        vExp = validateExperience();
        
        
        if (vName && vPhoneNumber && vMail && vTenth && vTwleve && vSkills && vExp ) {
            showTemplates(document.getElementById('main'));
        }
        
    }
    catch(err){
        console.log(err);
    }
    return false;
}

function validateName() {
    let nameError = document.getElementById('nameError');
    let name = document.getElementById('name').value;
    if (name == "") {
        nameError.innerText = "*Please Enter name";
        return false;
    }
    else {
        nameError.innerText = "";
    }
    return true;
}

function validatePhoneNumber() {
    let phoneNumberError = document.getElementById('phoneNumberError');
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber == "") {
        phoneNumberError.innerText = "*Please Enter Phone Number";
        return false;
    }
    else if (phoneNumber.length != 10) {
        phoneNumberError.innerText = "*Invalid Phone Number";
        return false;
    }
    else if (checkDigit(phoneNumber)) {
        phoneNumberError.innerText = "*Invalid Phone Number";
        return false;
    }
    else {
        phoneNumberError.innerText = "";
    }

    return true;
}

function checkDigit(num) {
    for (let i = 0; i < num.length; i++) {
        if (!(num.charCodeAt(i) >= 48 && num.charCodeAt(i) <= 57)) {
            return true;
        }
    }
    return false;
}

function validateMail() {
    let mail = document.getElementById('mail').value;
    let mailError = document.getElementById('mailError');
    str = "@gmail.com"
    if (mail == "") {
        mailError.innerText = "*Please Enter E-mail";
        return 0;
    }
    else if (mail.length <= 10) {
        mailError.innerText = "*Invalid E-mail";
        return 0;
    }
    else if (extentionCheck(mail)) {
        mailError.innerText = "*Invalid E-mail";
        return 0;
    }
    else {
        mailError.innerText = "";
        return true;
    }
}

function extentionCheck(mail) {
    for (let i = mail.length - 10, j = 0; i < mail.length; i++, j++) {
        if (str.charAt(j) != mail.charAt(i)) {
            return true;
        }
    }
    return false;
}

function validateTenth() {
    let tenth = document.getElementById('tenth').value;
    let tenthError = document.getElementById('tenthError');
    if (tenth == "") {
        tenthError.innerText = "*You Should Fill this";
    }
    else if (validatePercentage(tenth)) {
        tenthError.innerText = "Invalid Percentage";
        return 0;
    }
    else {
        tenthError.innerText = "";
        return true;
    }
}

function validatePercentage(num) {
    if (checkDigit(num)) {
        return true;
    }
    else if (num > 100 || num < 33) {
        return true;
    }
    else {
        return false;
    }
}

function validateTwelve() {
    let twelve = document.getElementById('twelve').value;
    let twelveError = document.getElementById('twelveError');
    if (twelve == "") {
        twelveError.innerText = "*You Should Fill this";
    }
    else if (validatePercentage(twelve)) {
        twelveError.innerText = "Invalid Percentage";
        return 0;
    }
    else {
        twelveError.innerText = "";
        return true
    }
}

function validateSkills() {
    let skills = document.getElementById('skills');
    let skillErr = document.getElementById('skillError');
    let count = 0;

    for (let i = 0; i < skills.children.length; i++) {
        if (skills.children[i].checked) {
            count++;
        }
    }

    if (count < 3) {
        skillErr.innerText = "*You should select at least 3";
        return false;
    }
    else if (count > 5) {
        skillErr.innerText = "*5 skills are Enough";
        return false;
    }
    else {
        skillErr.innerText = "";
        return true;
    }
}

function showExperienceInput() {
    let selectedOption = document.getElementById('options').value;
    if (selectedOption == "Experienced") {
        let exp = document.getElementById('exp');


        let experienceDiv = document.createElement('div');
        experienceDiv.id = 'experienceDiv';

        experienceDiv.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; margin: 0vh auto; color: lightgreen; width: 100%');

        let buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('style','display: flex')
        let addButton = document.createElement('button');
        addButton.innerText = "Add";
        addButton.id = "btn";

        addButton.setAttribute('onclick', `addExperience(${this.id})`);
        addButton.setAttribute('style', 'background-color: #218838; color: white; border: none; padding: 10% 20%; border-radius: 5px; cursor: pointer;font-weight: bold; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);');
        buttonDiv.appendChild(addButton);

        let removeButton = document.createElement('button');
        removeButton.innerText = "Remove";

        removeButton.setAttribute('onclick', 'removeField()');
        removeButton.setAttribute('style', 'background-color: #dc3545; color: white; border: none; padding: 10% 20%; border-radius: 5px; cursor: pointer; font-weight: bold; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);');
        buttonDiv.appendChild(removeButton);
        experienceDiv.appendChild(buttonDiv);

        let sum = document.getElementById('summaryLabel');
        exp.insertBefore(experienceDiv, sum);
        addExperience(experienceDiv);
        // validateExperience();

    }
    else if (selectedOption == "Fresher") {
        let expDiv = document.getElementById('experienceDiv');
        if (expDiv) {
            expDiv.remove();
        }
    }
}

function removeField() {
    let inputs = document.getElementsByClassName('pastExperience');
    let count = 0;
    for (let i = inputs.length - 1; i > 0; i++) {
        if (!inputs[i].value) {
            inputs[i].remove();
        }
    }
}

function addExperience(div) {
    if (div) {
        let ExperienceLabel = document.createElement('label');
        ExperienceLabel.id = "expId";
        ExperienceLabel.setAttribute('for', 'desc');
        ExperienceLabel.innerText = "Previous work: ";
        ExperienceLabel.setAttribute('style', 'width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
        div.appendChild(ExperienceLabel);

        let desc = document.createElement('input');
        desc.id = "desc";
        desc.setAttribute('class', 'pastExperience')
        desc.setAttribute('onkeyup', 'validateExperience()');
        desc.setAttribute('style', 'margin: 0.5% 0 0% 2%; width: 30%; padding: 2%; border-radius: 4px; border: none')
        div.appendChild(desc);

        let descError = document.createElement('small');
        descError.id = "descError";
        descError.setAttribute('style', 'color: red')
        div.appendChild(descError);
    }
    else {
        let div1 = document.getElementById('experienceDiv');
        let desc = document.createElement('input');
        desc.setAttribute('class', 'pastExperience');
        desc.setAttribute('onkeyup', 'validateExperience()');
        desc.setAttribute('style', 'margin: 0.5% 0 0% 2%; width: 30%; padding: 2%; border-radius: 4px; border: none')
        div1.appendChild(desc);

        let descError = document.createElement('small');
        descError.id = "descError";
        descError.setAttribute('style', 'color: red')
        div1.appendChild(descError);
    }
}

function validateExperience() {

    let selectedOption = document.getElementById('options').value;
    if (selectedOption == "Experienced") {
        let data = document.getElementsByClassName('pastExperience');
        for (let e of data) {
            let descError = document.getElementById('descError');
            if (!e.value) {
                descError.innerText = "*Please fill this";
                return false;
            }
            else {
                descError.innerText = "";
            }
        }
        return true;
    }
    else {
        return true;
    }
}