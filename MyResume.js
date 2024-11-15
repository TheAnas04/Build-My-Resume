function showResume(num, x){
    if( x ){
        x.parentElement.remove();
    }
    let mainDiv = document.getElementById('main');
    mainDiv.setAttribute('style','display: none');

    let toRemove = document.getElementById('resumeDiv');
    if( toRemove ){
        toRemove.remove();
        let temp = document.getElementById('templateArea');
        if( temp ){
            temp.setAttribute('style','display: none');
        }
    }

    let resumeDiv = document.createElement('div');
    resumeDiv.setAttribute('style','width: 80%; height: 90vh; margin: auto');
    resumeDiv.id = "resumeDiv";
    let body = document.getElementById('body');
    body.appendChild(resumeDiv);

    switch(num){
        case 1: resume1(resumeDiv);
            break;
        case 2: resume2(resumeDiv);
            break;
        case 3: resume3(resumeDiv);
            break;
        case 4: resume4(resumeDiv);
            break;
        case 5: resume5(resumeDiv);
            break;
        case 6: resume6(resumeDiv);
    }
    showTemplates(body);

}

function resume1(resumeDiv){
    resumeDiv.setAttribute('style','background-color: white; padding: 2%; width: 65%; margin: auto;border: 1px solid gray')
    let header = document.createElement('div');
    let name = document.createElement('h1');
    name.innerText = document.getElementById('name').value ;
    header.appendChild(name);

    let add = document.createElement('div');
    add.setAttribute('style','display: flex;')
    let address = document.createElement('p');
    address.innerText = `${document.getElementById('location').value} | `;
    add.appendChild(address);
    let mail = document.createElement('p');
    mail.innerText = document.getElementById('mail').value ;
    mail.setAttribute('style','margin-left: 1%')
    add.appendChild(mail);
    header.appendChild(add);
    resumeDiv.appendChild(header);

    let summary = document.createElement('div');
    let sumHeading = document.createElement('h3');
    sumHeading.innerText = "Summary";
    sumHeading.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    summary.appendChild(sumHeading);

    let sumDesc = document.createElement('p');
    sumDesc.innerText = document.getElementById('summary').value;
    summary.appendChild(sumDesc);
    resumeDiv.appendChild(summary);

    let skill = document.createElement('div');
    let skillHead = document.createElement('h3');
    skillHead.innerText = "Skills";
    skillHead.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    skill.appendChild(skillHead);

    let skillList = document.createElement('ul');
    skillList.setAttribute('style','text-decoration: none');

    let skills = document.getElementById('skills');
    
    addSkills(skills, skillList);
    
    skill.appendChild(skillList);
    resumeDiv.appendChild(skill);

    let exp = document.createElement('div');
    let expHead  = document.createElement('h3');
    expHead.innerText = "Professional Experience";
    expHead.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    exp.appendChild(expHead);

    let userExperience = document.getElementById('options').value;
    let list = document.createElement('ul');
    
    expFunction(userExperience, list);
    
    exp.appendChild(list);
    resumeDiv.appendChild(exp);

    let education = document.createElement('div');
    let edHead = document.createElement('h3');
    edHead.innerText = "Education";
    edHead.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    education.appendChild(edHead);
    
    let edDesc = document.createElement('ul');
    let one = document.createElement('li');
    one.innerText = `I have done ${document.getElementById('bchlr').value}.`;
    edDesc.appendChild(one);
    let two = document.createElement('li');
    two.innerText = `I have done ${document.getElementById('master').value}.`;
    edDesc.appendChild(two);
    education.appendChild(edDesc);
    resumeDiv.appendChild(education);
}


function resume2(resumeDiv){
    resumeDiv.setAttribute('style','background-color: white; padding: 2%; width: 65%; margin: auto;border: 1px solid gray');

    // HEADER
    let header = document.createElement('div');
    header.setAttribute('style','display: flex; justify-content: center; align-items: center; flex-direction: column;');
    let name = document.createElement('h1');
    name.innerText = document.getElementById('name').value;
    header.appendChild(name);
    
    let add = document.createElement('p');
    add.innerText = document.getElementById('location').value;
    header.appendChild(add);
    
    let no = document.createElement('p');
    no.innerText = document.getElementById('phoneNumber').value;
    header.appendChild(no);
    
    let mail = document.createElement('p');
    mail.innerText = document.getElementById('mail').value;
    header.appendChild(mail);
    resumeDiv.appendChild(header);
    
    let workExpDiv = document.createElement('div');
    let workHead = document.createElement('h3');
    workHead.innerText = "Work Experience";
    workExpDiv.appendChild(workHead);
    let line = document.createElement('hr');
    workHead.appendChild(line);
    
    let userInput = document.getElementById('options').value;
    let list = document.createElement('ul');
    
    expFunction(userInput, list);
    workExpDiv.appendChild(list);
    resumeDiv.appendChild(workExpDiv);
    
    let educationDiv = document.createElement('div');
    let educationHead = document.createElement('h3');
    educationHead.innerText = "Education";
    let line2 = document.createElement('hr');
    educationHead.appendChild(line2);
    educationDiv.appendChild(educationHead);
    
    let educationList = document.createElement('ul');
    let master = document.getElementById('master').value;
    if( master ){
        let li = document.createElement('li');
        li.innerText = "Master degree: "+master;
        educationList.appendChild(li);
    }
    let bchlr = document.getElementById('bchlr').value;
    if ( bchlr ){
        let li = document.createElement('li');
        li.innerText = "Bachelor degree: "+bchlr;
        educationList.appendChild(li);
    }
    
    let twelve = document.getElementById('twelve').value;
    if ( twelve ){
        let li = document.createElement('li');
        li.innerText = "12th: "+twelve;
        educationList.appendChild(li);
    }

    let tenth = document.getElementById('tenth').value;
    if ( tenth ){
        let li = document.createElement('li');
        li.innerText = "10th: "+tenth;
        educationList.appendChild(li);
    }
    educationDiv.appendChild(educationList);
    resumeDiv.appendChild(educationDiv);

    let skillDiv = document.createElement('div');
    let skillHead = document.createElement('h3');
    skillHead.innerText = "Skills";
    let line3 = document.createElement('hr');
    skillHead.appendChild(line3);
    skillDiv.appendChild(skillHead);
    
    let skillList = document.createElement('ul');
    let skills = document.getElementById('skills');
    addSkills(skills, skillList);
    skillDiv.appendChild(skillList);
    resumeDiv.appendChild(skillDiv);
}


function addSkills(skills, skillList){
    for( let i=0 ; i<skills.children.length ; i++ ){
        if(skills.children[i].checked){
            let li1 = document.createElement('li');
            li1.innerText = skills.children[i].value;
            skillList.appendChild(li1);
        }
    }
}

function expFunction(userExperience, list){
    if( userExperience=="Fresher" ){
        let li = document.createElement('li');
        li.innerText = "Fresher";
        list.appendChild(li);
    }
    else {
        let data = document.getElementsByClassName('pastExperience');
        for( let e of data ){
            let li = document.createElement('li');
            li.innerText = e.value;
            list.appendChild(li);
            
        }
    }
}