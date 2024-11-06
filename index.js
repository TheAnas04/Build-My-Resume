function head(){
    // console.log("Sucessful")
    let body = document.getElementById('body');
    // console.log(body)
    body.setAttribute('style', 'background-color: teal');
    let mainDiv = document.getElementById('main');
    let heading = document.createElement('h1');
    heading.setAttribute('style', 'text-align: center; color: rgb(77,198,270)');
    heading.innerText = "Build My Resume";
    mainDiv.appendChild(heading);
}

function getDetails(){
    mainDiv = document.getElementById('main');

    formDiv = document.createElement('div');
    formDiv.setAttribute('style','margin: auto;')
    form = document.createElement('form');
    form.setAttribute('style','display: flex; flex-direction: column')

    // personal details 
    personalDetails = document.createElement('div');
    personalDetails.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; box-shadow: 0px 5px 6px black; width: 70%; padding: 2%');
    personalDetails.innerHTML = "<h3>Personal Details</h3>";
    let labelName = document.createElement('label');
    labelName.setAttribute('for','name');
    labelName.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: aliceblue');
    labelName.innerText = "Full name: "
    personalDetails.appendChild(labelName);
    let name = document.createElement('input');
    name.id = "name";
    name.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%');
    name.setAttribute('onkeyup','validateName()')
    personalDetails.appendChild(name);
    let nameError = document.createElement('small');
    nameError.id = "nameError";
    nameError.setAttribute('style','color: red')
    personalDetails.appendChild(nameError);


    let phoneNumberLabel = document.createElement('label');
    phoneNumberLabel.setAttribute('for','phoneNumber');
    phoneNumberLabel.innerText = "Phone Number: ";
    phoneNumberLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    personalDetails.appendChild(phoneNumberLabel);
    let phoneNumber = document.createElement('input');
    phoneNumber.id = "phoneNumber";
    phoneNumber.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%')
    phoneNumber.setAttribute('onkeyup','validatePhoneNumber()')
    personalDetails.appendChild(phoneNumber);
    let phoneNumberError = document.createElement('small');
    phoneNumberError.id = "phoneNumberError";
    phoneNumberError.setAttribute('style','color: red')
    personalDetails.appendChild(phoneNumberError);

    let mailLabel = document.createElement('label');
    mailLabel.setAttribute('for','mail');
    mailLabel.innerText = "E-mail: ";
    mailLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    personalDetails.appendChild(mailLabel);
    let mail = document.createElement('input');
    mail.type = "mail";
    mail.id = "mail";
    mail.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%')
    mail.setAttribute('onkeyup','validateMail()')
    personalDetails.appendChild(mail);
    let mailError = document.createElement('small');
    mailError.id = "mailError";
    mailError.setAttribute('style','color: red')
    personalDetails.appendChild(mailError);

    let locationLabel = document.createElement('label');
    phoneNumberLabel.setAttribute('for','location');
    locationLabel.innerText = "Location: ";
    locationLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    personalDetails.appendChild(locationLabel);
    let location = document.createElement('input');
    location.id = "location";
    location.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%')
    personalDetails.appendChild(location);
    let locationError = document.createElement('small');
    locationError.id = "locationError";
    locationError.setAttribute('style','color: red')
    personalDetails.appendChild(locationError);

    form.appendChild(personalDetails);

    // Education
    education = document.createElement('div');
    education.setAttribute('style','display: flex; flex-direction: column;color: lightgreen; align-items: center; margin: 7vh auto; box-shadow: 0px 5px 6px black; width: 70%; padding: 2%');
    education.innerHTML = "<h3>Educational Details</h3>"

    let tenthLabel = document.createElement('label');
    tenthLabel.setAttribute('for','tenth');
    tenthLabel.innerText = "10th: ";
    tenthLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    education.appendChild(tenthLabel);
    let tenth = document.createElement('input');
    tenth.id = "tenth";
    tenth.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%');
    tenth.setAttribute('onkeyup','validateTenth()');
    education.appendChild(tenth);
    let tenthError = document.createElement('small');
    tenthError.id = "tenthError";
    tenthError.setAttribute('style','color: red');
    education.appendChild(tenthError);

    let twelveLabel = document.createElement('label');
    twelveLabel.setAttribute('for','twelve');
    twelveLabel.innerText = "12th: ";
    twelveLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    education.appendChild(twelveLabel);
    let twelve = document.createElement('input');
    twelve.id = "twelve";
    twelve.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%');
    twelve.setAttribute('onkeyup','validateTwelve()');
    education.appendChild(twelve);
    let twelveError = document.createElement('small');
    twelveError.id = "twelveError";
    twelveError.setAttribute('style','color: red')
    education.appendChild(twelveError);

    let bchlrLabel = document.createElement('label');
    bchlrLabel.setAttribute('for','bchlr');
    bchlrLabel.innerText = "Bachelor Degree : ";
    bchlrLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    education.appendChild(bchlrLabel);
    let bchlr = document.createElement('input');
    bchlr.id = "bchlr";
    bchlr.setAttribute('style','margin: 0.5% 0 0% 2%; width: 30%')
    education.appendChild(bchlr);
    let bchlrError = document.createElement('small');
    bchlrError.id = "bchlrError";
    bchlrError.setAttribute('style','color: red')
    education.appendChild(bchlrError);

    let masterLabel = document.createElement('label');
    masterLabel.setAttribute('for', 'master');
    masterLabel.innerText = "Master Degree : ";
    masterLabel.setAttribute('style','width: 10vw; margin-right: 14vw; margin-top: 3vh; color: aliceblue');
    education.appendChild(masterLabel);
    let master = document.createElement('input');
    master.id = "master";
    master.setAttribute('style', 'margin: 0.5% 0 0% 2%; width: 30%');
    education.appendChild(master);
    let masterError = document.createElement('small');
    masterError.id = "masterError";
    masterError.setAttribute('style','color: red')
    education.appendChild(masterError);

    form.appendChild(education);


    // Skills
    let other = document.createElement('div');
    other.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; box-shadow: 0px 5px 6px black; width: 70%; padding: 2%');
    other.innerHTML = "<h3>Skills</h3>";

    let skillLabel = document.createElement('label');
    skillLabel.setAttribute('for','skill');
    other.appendChild(skillLabel);

    let skills = document.createElement('div');
    skills.id = "skills";
    skills.setAttribute('onmouseover','validateSkills()');
    skills.setAttribute('style','display: flex; flex-wrap: wrap; width: 50%; color: black; font-weight: bold');
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="C">C'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="C++">C++'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Java">Java'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Python">Python'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="CSS">CSS'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="JavaScript">javaScript'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Communication Skills">Communication Skills'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Git">Git'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'  
    other.appendChild(skills);

    let skillError = document.createElement('small');
    skillError.id = "skillError";
    skillError.setAttribute('style','color: red')
    other.appendChild(skillError);

    form.appendChild(other);


    // Experience
    let exp = document.createElement('div');
    exp.id = "exp";
    exp.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; box-shadow: 0px 5px 6px black; width: 70%; padding: 2%');
    exp.innerHTML = "<h3>Experience</h3>";

    let opt = document.createElement('select');
    opt.id = "options";
    let option1 = document.createElement('option');
    option1.innerText = "Fresher";
    opt.appendChild(option1);

    let option2 = document.createElement('option');
    option2.innerText = "Experienced";
    opt.appendChild(option2);
    opt.setAttribute('onchange','showExperienceInput()');

    exp.appendChild(opt);

    form.appendChild(exp);

    btn = document.createElement('button');
    btn.setAttribute('type','submit');
    btn.setAttribute('style','margin-top: 2vh; padding: 1vh; width: 30%; margin: auto; color: white; background-color: #0000a0; border-radius: 6px; border: 1px solid white; box-shadow: 2px 2px 2px skyblue');
    btn.innerText = "Generate Resume"

    form.onsubmit = ()=>{
        return validateInformation();
    }

    form.appendChild(btn);
    formDiv.appendChild(form);
    mainDiv.appendChild(formDiv);
}

// function assembleInformation(){
//     let name = document.getElementById('name').value;
//     console.log(name);

//     let phoneNumber = document.getElementById('phoneNumber').value;
//     console.log(phoneNumber);

//     let mail = document.getElementById('mail').value;
//     console.log(mail);

//     let address = document.getElementById('location').value;
//     console.log(address);

//     let tenth = document.getElementById('tenth').value;
//     console.log(tenth);

//     let twelve = document.getElementById('twelve').value;
//     console.log(twelve);

//     let bchlr = document.getElementById('bchlr').value;
//     console.log(bchlr);

//     let master = document.getElementById('master').value;
//     console.log(master);
//     return false;
// }
