function validateInformation(){
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let mail = document.getElementById('mail').value;
    let address = document.getElementById('location').value;
    let tenth = document.getElementById('tenth').value;
    let twelve = document.getElementById('twelve').value;
    let bchlr = document.getElementById('bchlr').value;
    let master = document.getElementById('master').value;
    
    vName = validateName();
    vPhoneNumber = validatePhoneNumber();
    vMail = validateMail();
    vTenth = validateTenth();
    vTwleve = validateTwelve();
    vSkills = validateSkills();
    // console.log(vName);
    // console.log(vPhoneNumber);
    // console.log(vMail);
    // console.log(vTenth);
    // console.log(vTwleve);

    // let flag = false;
    if( vName && vPhoneNumber && vMail && vTenth && vTwleve && vSkills){
        // flag = true;
        addTemplates();
    }

    return false;
}

function validateName(){
    let nameError = document.getElementById('nameError');
    let name = document.getElementById('name').value;
    if( name=="" ){
        nameError.innerText = "*Please Enter name"
        return false;
    }
    else {
        nameError.innerText = "";
    }
    return true
}

function validatePhoneNumber(){
    let phoneNumberError = document.getElementById('phoneNumberError');
    let phoneNumber = document.getElementById('phoneNumber').value;
    if( phoneNumber=="" ){
        phoneNumberError.innerText = "*Please Enter Phone Number";
        return 0;
    }
    else if( phoneNumber.length!=10 ){
        phoneNumberError.innerText = "*Invalid Phone Number";
        return 0;
    }
    else if( checkDigit(phoneNumber) ){
        phoneNumberError.innerText = "*Invalid Phone Number";
        return 0;
    }
    else {
        phoneNumberError.innerText = "";
    }

    return true;
}

function checkDigit(num){
    for( let i=0 ; i<num.length ; i++ ){
        if( !(num.charCodeAt(i)>=48 && num.charCodeAt(i)<=57) ){
            return true;
        }
    }
    return false;
}

function validateMail(){
    let mail = document.getElementById('mail').value;
    let mailError = document.getElementById('mailError');
    str = "@gmail.com"
    if( mail=="" ){
        mailError.innerText = "*Please Enter E-mail";
        return 0;
    }
    else if( mail.length<=10 ){
        mailError.innerText = "*Invalid E-mail";
        return 0;
    }
    else if( extentionCheck(mail) ){
        mailError.innerText = "*Invalid E-mail";
        return 0;
    }
    else {
        mailError.innerText = "";
        return true;
    }
}

function extentionCheck(mail){
    for( let i=mail.length-10,j=0 ; i<mail.length ; i++, j++ ){
        if( str.charAt(j)!= mail.charAt(i)){
            return true;
        }
    }
    return false;
}

function validateTenth(){
    let tenth = document.getElementById('tenth').value;
    let tenthError = document.getElementById('tenthError');
    if( tenth=="" ){
        tenthError.innerText = "*You Should Fill this";
    }
    else if( validatePercentage(tenth) ){
        tenthError.innerText = "Invalid percentage";
        return 0;
    }
    else {
        tenthError.innerText = "";
        return true;
    }
}

function validatePercentage(num){
    if( checkDigit(num) ){
        return true;
    }
    else if( num>100 || num<33 ){
        return true;
    }
    else {
        return false;
    }
}

function validateTwelve(){
    let twelve = document.getElementById('twelve').value;
    let twelveError = document.getElementById('twelveError');
    if( twelve=="" ){
        twelveError.innerText = "*You Should Fill this";
    }
    else if ( validatePercentage(twelve) ){
        twelveError.innerText = "Invalid Percentage";
        return 0;
    }
    else {
        twelveError.innerText = "";
        return true
    }
}

function validateSkills(){
    let skills = document.getElementById('skills');
    let skillErr = document.getElementById('skillError');
    let count = 1;
    
    for( let i=0 ; i<skills.children.length ; i++ ){
        if(skills.children[i].checked){
            count++;
        }
    }

    if( count<3 ){
        skillErr.innerText = "*You should select at least 3";
        return false;
    }
    else if ( count>5 ){
        skillErr.innerText = "*5 skills are Enough";
        return false;
    }
    else {
        skillErr.innerText = "";
        return true;
    }
}

function showExperienceInput(){
    let selectedOption = document.getElementById('options').value;
    // console.log('event triggered')
    if( selectedOption=="Experienced" ){
        let exp = document.getElementById('exp');

        let ExperienceLabel = document.createElement('label');
        ExperienceLabel.id = "expId";
        ExperienceLabel.setAttribute('for','desc');
        ExperienceLabel.innerText = "Previous work: ";
        ExperienceLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
        exp.appendChild(ExperienceLabel);

        let desc = document.createElement('input');
        desc.id = "desc";
        desc.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%')
        exp.appendChild(desc);

        let descError = document.createElement('small');
        descError.id = "descError";
        descError.setAttribute('style','color: red')
        exp.appendChild(descError);

    }
    else if ( selectedOption=="Fresher" ) {
        let explabel = document.getElementById('expId');
        let ip = document.getElementById('desc');
        let err = document.getElementById('descError');
        explabel.remove();
        ip.remove();
        err.remove();
        // console.log(explabel);
        // console.log(ip);
        // console.log(err);
    }
}