function showTemplates(mainDiv){

    let templateArea = document.createElement('div');
    templateArea.id = "templateArea"
    templateArea.setAttribute('style','background-color: #1a4a9f; width: 90%; margin: 5% auto; border-radius: 5vh; padding: 1%');

    let heading = document.createElement('h2');
    heading.setAttribute('style','color: #0ff0ff; font-weight: bold; font-size: 5vh; margin-left: 5%');
    heading.innerText = "Resume Templates";

    templateArea.appendChild(heading);

    let row = document.createElement('div');
    row.setAttribute('style','display: flex; flex-wrap: wrap; justify-content: center');


    addTemplates(row);    

    templateArea.appendChild(row);

    let back = document.createElement('button');
    back.setAttribute('style','margin-left: 8%; font-weigth: bold; font-size: 4vh; border-radius: 8px; border: none; color: red')
    back.innerText = "Back";
    back.onclick = ()=>{
        goBack(mainDiv, templateArea);
    }
    templateArea.appendChild(back);

    mainDiv.appendChild(templateArea);
}  

function addTemplates(row){

    let template1 = document.createElement('div');
    template1.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template1.setAttribute('onclick','showResume(1, this.parentElement)');
    let img1 = document.createElement('img');
    // img1.setAttribute('src','img\\ResumeTemplate1.png');
    img1.setAttribute('style','width: 100%; height: 100%;')
    template1.appendChild(img1);
    row.appendChild(template1);


    let template2 = document.createElement('div');
    template2.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template2.setAttribute('onclick','showResume(2, this.parentElement)');
    let img2 = document.createElement('img');
    img2.setAttribute('src','https://3.bp.blogspot.com/-PDYDy_2Fpf8/VyrhNA5COhI/AAAAAAAAAgI/Ed4DJ-GhEMkvQ56BQ0pLSpvp7Bwku-9JwCLcB/s1600/Sample+of+Simple+Resume.png');
    img2.setAttribute('style','width: 100%; height: 100%;')
    template2.appendChild(img2);
    row.appendChild(template2);


    let template3 = document.createElement('div');
    template3.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template3.setAttribute('onclick','showResume(3, this.parentElement)');

    row.appendChild(template3);


    let template4 = document.createElement('div');
    template4.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template4.setAttribute('onclick','showResume(4, this.parentElement)');
    row.appendChild(template4);


    let template5 = document.createElement('div');
    template5.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template5.setAttribute('onclick','showResume(5, this.parentElement)');
    row.appendChild(template5);


    let template6 = document.createElement('div');
    template6.setAttribute('style','background-color: white; width: 30%; height: 68vh; margin: 1%');
    template6.setAttribute('onclick','showResume(6, this.parentElement)');
    row.appendChild(template6);

}

function goBack(main, tmp){
    tmp.remove();
    document.getElementById('resumeDiv').remove();
    main.children[0].setAttribute('style','display: block')
}