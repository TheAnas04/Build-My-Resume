function head(){
    let body = document.getElementById('body');
    body.setAttribute('style', 'background-color: #2C3E50');
    let mainDiv = document.getElementById('main');
    let heading = document.createElement('h1');
    heading.setAttribute('style', 'text-align: center; color: #4ECC96;margin-top: 5vh; font-size: 7vh');
    heading.innerText = "Build My Resume";
    mainDiv.appendChild(heading);
}

function getDetails(){
    let mainDiv = document.getElementById('main');

    let formDiv = document.createElement('div');
    // formDiv.setAttribute('style','margin: auto; width: 800px')
    formDiv.setAttribute('style', 'margin: auto; width: 65%; padding: 2%; background-color: #34495E; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0,0,0,0.2);');
    let form = document.createElement('form');
    form.setAttribute('style','display: flex; flex-direction: column; gap: 2vh')

    // ============== personal details ======================= 
    personalDetails = document.createElement('div');
    personalDetails.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; backgroud-color: #2E4053; box-shadow: 0px 4px 6px rgba(0,0,0,0.2); padding: 2%; width: 40vw');
    personalDetails.innerHTML = "<h3>Personal Details</h3>";
    let labelName = document.createElement('label');
    labelName.setAttribute('for','name');
    labelName.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    labelName.innerText = "Full name: "
    personalDetails.appendChild(labelName);
    let name = document.createElement('input');
    name.id = "name";
    name.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%;border-radius: 4px; border: none');
    name.setAttribute('onkeyup','validateName()')
    personalDetails.appendChild(name);
    let nameError = document.createElement('small');
    nameError.id = "nameError";
    nameError.setAttribute('style','color: red')
    personalDetails.appendChild(nameError);


    let phoneNumberLabel = document.createElement('label');
    phoneNumberLabel.setAttribute('for','phoneNumber');
    phoneNumberLabel.innerText = "Phone Number: ";
    phoneNumberLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    personalDetails.appendChild(phoneNumberLabel);
    let phoneNumber = document.createElement('input');
    phoneNumber.id = "phoneNumber";
    phoneNumber.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%;border-radius: 4px; border: none')
    phoneNumber.setAttribute('onkeyup','validatePhoneNumber()')
    personalDetails.appendChild(phoneNumber);
    let phoneNumberError = document.createElement('small');
    phoneNumberError.id = "phoneNumberError";
    phoneNumberError.setAttribute('style','color: red')
    personalDetails.appendChild(phoneNumberError);

    let mailLabel = document.createElement('label');
    mailLabel.setAttribute('for','mail');
    mailLabel.innerText = "E-mail: ";
    mailLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    personalDetails.appendChild(mailLabel);
    let mail = document.createElement('input');
    mail.type = "mail";
    mail.id = "mail";
    mail.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%;border-radius: 4px; border: none')
    mail.setAttribute('onkeyup','validateMail()')
    personalDetails.appendChild(mail);
    let mailError = document.createElement('small');
    mailError.id = "mailError";
    mailError.setAttribute('style','color: red')
    personalDetails.appendChild(mailError);

    let locationLabel = document.createElement('label');
    locationLabel.setAttribute('for','location');
    locationLabel.innerText = "Location: ";
    locationLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    personalDetails.appendChild(locationLabel);
    let location = document.createElement('input');
    location.id = "location";
    location.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none')
    personalDetails.appendChild(location);
    let locationError = document.createElement('small');
    locationError.id = "locationError";
    locationError.setAttribute('style','color: red')
    personalDetails.appendChild(locationError);

    form.appendChild(personalDetails);

    // ========= Education ==================
    education = document.createElement('div');
    education.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; backgroud-color: #2E4053; box-shadow: 0px 4px 6px rgba(0,0,0,0.2); padding: 2%; width: 40vw');
    education.innerHTML = "<h3>Educational Details</h3>"

    let tenthLabel = document.createElement('label');
    tenthLabel.setAttribute('for','tenth');
    tenthLabel.innerText = "10th: ";
    tenthLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    education.appendChild(tenthLabel);
    let tenth = document.createElement('input');
    tenth.id = "tenth";
    tenth.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none');
    tenth.setAttribute('onkeyup','validateTenth()');
    education.appendChild(tenth);
    let tenthError = document.createElement('small');
    tenthError.id = "tenthError";
    tenthError.setAttribute('style','color: red');
    education.appendChild(tenthError);

    let twelveLabel = document.createElement('label');
    twelveLabel.setAttribute('for','twelve');
    twelveLabel.innerText = "12th: ";
    twelveLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    education.appendChild(twelveLabel);
    let twelve = document.createElement('input');
    twelve.id = "twelve";
    twelve.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none');
    twelve.setAttribute('onkeyup','validateTwelve()');
    education.appendChild(twelve);
    let twelveError = document.createElement('small');
    twelveError.id = "twelveError";
    twelveError.setAttribute('style','color: red')
    education.appendChild(twelveError);

    let bchlrLabel = document.createElement('label');
    bchlrLabel.setAttribute('for','bchlr');
    bchlrLabel.innerText = "Bachelor Degree : ";
    bchlrLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    education.appendChild(bchlrLabel);
    let bchlr = document.createElement('input');
    bchlr.id = "bchlr";
    bchlr.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none')
    education.appendChild(bchlr);
    let bchlrError = document.createElement('small');
    bchlrError.id = "bchlrError";
    bchlrError.setAttribute('style','color: red')
    education.appendChild(bchlrError);

    let masterLabel = document.createElement('label');
    masterLabel.setAttribute('for', 'master');
    masterLabel.innerText = "Master Degree : ";
    masterLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    education.appendChild(masterLabel);
    let master = document.createElement('input');
    master.id = "master";
    master.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none');
    education.appendChild(master);
    let masterError = document.createElement('small');
    masterError.id = "masterError";
    masterError.setAttribute('style','color: red')
    education.appendChild(masterError);

    form.appendChild(education);


    // ============ SKILLS =============
    let other = document.createElement('div');
    other.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; backgroud-color: #2E4053; box-shadow: 0px 4px 6px rgba(0,0,0,0.2); padding: 2%;  width: 40vw');
    other.innerHTML = "<h3>Skills</h3>";

    let skillLabel = document.createElement('label');
    skillLabel.setAttribute('for','skill');
    skillLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    other.appendChild(skillLabel);

    let skills = document.createElement('div');
    skills.id = "skills";
    skills.setAttribute('onclick','validateSkills()');
    skills.setAttribute('style','display: flex; flex-wrap: wrap; width: 75%; color: #ECF0F1; font-weight: bold');
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="C">C'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="C++">C++'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Java">Java'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Leadership">Leadership'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Communication Skills">Communication Skills'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Python">Python'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="HTML">HTML'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="CSS">CSS'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="JavaScript">javaScript'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Git">Git'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="React">React'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Angular">Angular'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="DevOps">DevOps'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Adaptable">Adaptable'
    skills.innerHTML += '<input style="margin: 0% 28% ; " type="checkbox" name="skill" value="Team Player">Team Player'
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


    // ============= Experience ==============
    let exp = document.createElement('div');
    exp.id = "exp";
    exp.setAttribute('style','display: flex; flex-direction: column; align-items: center; margin: 7vh auto; color: lightgreen; backgroud-color: #2E4053; box-shadow: 0px 4px 6px rgba(0,0,0,0.2); padding: 2%;  width: 40vw');
    exp.innerHTML = "<h3>Experience</h3>";

    let optLabel = document.createElement('label');
    optLabel.setAttribute('for','opt');
    optLabel.innerText = "Experience: ";
    optLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    exp.appendChild(optLabel);

    let opt = document.createElement('select');
    opt.id = "options";
    opt.setAttribute('style', 'margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none');
    let option1 = document.createElement('option');
    option1.innerText = "Fresher";
    opt.appendChild(option1);

    let option2 = document.createElement('option');
    option2.innerText = "Experienced";
    opt.appendChild(option2);
    opt.setAttribute('onchange','showExperienceInput()');
    exp.appendChild(opt);


    // ============== Summary/Objective ===================
    let summaryLabel = document.createElement('label');
    summaryLabel.setAttribute('for','summary');
    summaryLabel.setAttribute('id','summaryLabel');
    summaryLabel.innerText = "Summary/Objective: ";
    summaryLabel.setAttribute('style','width: 10vw; margin-right: 14vw;margin-top: 3vh; color: #ECF0F1; font-weight: bold;');
    exp.appendChild(summaryLabel);
    
    let summary = document.createElement('input');
    summary.id = "summary";
    summary.setAttribute('style','margin: 0.5% 0 0% 2%; width: 50%; padding: 2%; border-radius: 4px; border: none');
    exp.appendChild(summary);

    form.appendChild(exp);

    btn = document.createElement('button');
    btn.setAttribute('type','submit');
    btn.setAttribute('style', 'padding: 2%; width: 50%; margin: auto; background-color: #3498DB; border: none; border-radius: 6px; color: white; font-weight: bold;');
    btn.innerText = "Generate Resume";

    btn.onmouseover = () => {
        btn.style.backgroundColor = "#2980B9";
    };

    btn.onmouseleave = () => {
        btn.style.backgroundColor = "#3498DB";
    };

    form.onsubmit = ()=>{
        validateInformation();
        return false;
    }
    

    form.appendChild(btn);
    formDiv.appendChild(form);
    mainDiv.appendChild(formDiv);
}