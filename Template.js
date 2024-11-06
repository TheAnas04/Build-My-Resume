function showTemplates(){
    let mainDiv = document.getElementById('main');
    let templateArea = document.createElement('div');
    templateArea.setAttribute('style','background-color: #1a4a9f; width: 90%; margin: auto');

    let heading = document.createElement('h3');
    heading.setAttribute('style','color: #0ff0ff; padding: 0.4%');
    heading.innerText = "Resume Templates";

    templateArea.appendChild(heading);

    let row = document.createElement('div');
    row.setAttribute('style','backgroud-color: aqua; display: flex; flex-wrap: wrap; justify-content: center');
    addTemplates(row);    

    templateArea.appendChild(row);

    mainDiv.appendChild(templateArea);
}  

function addTemplates(row){

    let template1 = document.createElement('div');
    template1.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template1.setAttribute('onclick','showResume()');
    row.appendChild(template1);


    let template2 = document.createElement('div');
    template2.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template2.setAttribute('onclick','showResume()');

    row.appendChild(template2);


    let template3 = document.createElement('div');
    template3.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template3.setAttribute('onclick','showResume(this)');

    row.appendChild(template3);


    let template4 = document.createElement('div');
    template4.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template4.setAttribute('onclick','showResume()');
    row.appendChild(template4);


    let template5 = document.createElement('div');
    template5.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template5.setAttribute('onclick','showResume()');
    row.appendChild(template5);


    let template6 = document.createElement('div');
    template6.setAttribute('style','background-color: white; width: 30%; height: 400px; margin: 1%');
    template6.setAttribute('onclick','showResume()');
    row.appendChild(template6);

}

function showResume(){
    let mainDiv = document.getElementById('main');
    mainDiv.remove();
    let resumeDiv = document.createElement('div');
    resumeDiv.id = "resume";
    resumeDiv.setAttribute('style','width: 80%; height: 90vh; margin: auto')
    let body = document.getElementById('body');
    body.appendChild(resumeDiv);
    resume1(resumeDiv);

    // console.log(e);    
}

function resume1(resumeDiv){
    resumeDiv.setAttribute('style','background-color: white; padding: 2%; width: 65%; margin: auto;border: 1px solid gray')
    let header = document.createElement('div');
    let name = document.createElement('h1');
    name.innerText = "Anas Shaikh";
    // name.setAttribute('style','background-color: gray; border-radius: 10px; padding-left: 1%');
    header.appendChild(name);

    let add = document.createElement('div');
    add.setAttribute('style','display: flex;')
    let address = document.createElement('p');
    address.innerText = "Indore |";
    add.appendChild(address);
    let mail = document.createElement('p');
    mail.innerText = "demo@gmail.com";
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
    sumDesc.innerText = "Hello this is Anas Shaikh i am seeking a position where i can learn new skills and update the level of my own and be in the class of my own. And also looking to work with a company who aim is to develop."
    summary.appendChild(sumDesc);
    resumeDiv.appendChild(summary);

    let skill = document.createElement('div');
    let skillHead = document.createElement('h3');
    skillHead.innerText = "Skills";
    skillHead.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    skill.appendChild(skillHead);

    let skillList = document.createElement('ul');
    skillList.setAttribute('style','text-decoration: none');
    let li1 = document.createElement('li');
    li1.innerText = "Skill one";
    skillList.appendChild(li1);
    skill.appendChild(skillList);

    let li3 = document.createElement('li');
    li3.innerText = "Skill two";
    skillList.appendChild(li3);
    resumeDiv.appendChild(skill);

    let exp = document.createElement('div');
    let expHead  = document.createElement('h3');
    expHead.innerText = "Professional Experience";
    expHead.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    exp.appendChild(expHead);

    let list = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = "I worked as an intern in xyz company";
    list.appendChild(li);
    let li2 = document.createElement('li');
    li2.innerText = "I worked as a junior software developer in xyz2 company";
    list.appendChild(li2);
    exp.appendChild(list);
    resumeDiv.appendChild(exp);

    let education = document.createElement('div');
    let edHead = document.createElement('h3');
    edHead.innerText = "Education";
    edHead.setAttribute('style','background-color: gray; border-radius: 30px; padding: 0.7%');
    education.appendChild(edHead);
    
    let edDesc = document.createElement('ul');
    let one = document.createElement('li');
    one.innerText = "I have done B.tech in CSE ";
    edDesc.appendChild(one);
    let two = document.createElement('li');
    two.innerText = "I have done M.tech in CSE ";
    edDesc.appendChild(two);
    education.appendChild(edDesc);
    resumeDiv.appendChild(education);

}