function addWeField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');
    let weOb= document.getElementById("We");
    let weAddButtonOb=document.getElementById('weAddButton');
    
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAq()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');
    let aqOb= document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addSButton()
{
    let newNode=document.createElement('textarea')
     newNode.classList.add('form-control');
     newNode.classList.add('sField');
     newNode.classList.add('mt-2');
     newNode.setAttribute('placeholder','Enter here');
     let skOb= document.getElementById("sk");
     let sAddButtonOb=document.getElementById('sAddButton');
    
     skOb.insertBefore(newNode, sAddButtonOb);
}

function pAddButton()
{
    let newNode=document.createElement('textarea')
     newNode.classList.add('form-control');
     newNode.classList.add('pField');
     newNode.classList.add('mt-2');
     newNode.setAttribute('placeholder','Enter here');
     let prOb= document.getElementById("pr");
     let pAddButtonOb=document.getElementById('pAddButton');
    
     prOb.insertBefore(newNode, pAddButtonOb);
}

function generateCV()
{
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("lId").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("gId").innerHTML=document.getElementById("gitField").value;
    document.getElementById("mId").innerHTML=document.getElementById("mailField").value;

    
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


    let wes= document.getElementsByClassName("weField")
    let str="";
    for(let e of wes)
    {
        str=str+ `<li> ${e.value}</li>`;
    }
    document.getElementById("wT").innerHTML=str;
     

    let aqs= document.getElementsByClassName("aqField")
    let str1="";
    for(let e of aqs)
    {
        str1=str1+ `<li> ${e.value}</li>`;
    }
    document.getElementById("at").innerHTML=str1;
    
    let sqt= document.getElementsByClassName("sField")
    let str2="";
    for(let e of sqt)
    {
        str2=str2+ `<li> ${e.value}</li>`;
    }
    document.getElementById("sT").innerHTML=str2;
    
    let pqs= document.getElementsByClassName("pField")
    let str3="";
    for(let e of pqs)
    {
        str3=str3+ `<li> ${e.value}</li>`;
    }
    document.getElementById("pT").innerHTML=str3;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printCV()
{
    window.print();
    document.getElementById("pcv").style.display="none";
}