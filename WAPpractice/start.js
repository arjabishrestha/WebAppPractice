console.log("Hello, This is Arjabi");
//window.alert("Are you sleepy?");
document.getElementById("topic").textContent="HELLO!";
document.getElementById("explain").textContent="Hi!This is my first webpage where I am starting Javascript.";
dob=window.prompt("Enter your dob");
console.log(dob)
dob=Number(dob)
let fullname=`Arjabi Shrestha`;
let age=2025-dob;
let student=true;
agenextyear=age+1;
document.getElementById("p1").textContent=`Your name is ${fullname}`
document.getElementById("p1").textContent=`I am ${age} years old now and will be ${agenextyear} soon.`;
document.getElementById("p2").textContent=`I am a student: ${student}`;
document.getElementById("submit").onclick=function(){
    let clgname=document.getElementById("clg").value
    document.getElementById("topic").textContent=`HELLO! to ${clgname}ian`;
}
let count=0
const label=document.getElementById("countlabel")
const increment=document.getElementById("inc");
const decrement=document.getElementById("dec");
const reset=document.getElementById("res");
increment.onclick=function(){
    count++
    label.textContent=count
}
decrement.onclick=function(){
    count--
    label.textContent=count
}
reset.onclick=function(){
    count=0
    label.textContent=count
}

let gpa;
let mygpa=document.getElementById("gpa");
let submit=document.getElementById("gpasubmit");
let result=document.getElementById("gradeshow");
submit.onclick=function(){
    gpa=mygpa.value
    if (gpa>=3.9 && gpa<=4.00)
        result.textContent=`A+`
    else if (gpa>=3.8 && gpa<3.9)
        result.textContent=`A`
    else if (gpa>=3.6 && gpa<3.8)
        result.textContent=`A-`
    else if (gpa>=3.2 && gpa<3.6)
        result.textContent=`B+`
    else if (gpa>=2.8 && gpa<3.2)
        result.textContent=`B`
    else if (gpa>=2.4 && gpa<2.8)
        result.textContent=`B-`
    else if (gpa>=2.00 && gpa<2.4)
        result.textContent=`C`
    else if (gpa>4.00)
        result.textContent=`invalid`
    else
        result.textContent=`failed`
}
const acstatus=document.getElementById("acstatus");
const enroll=document.getElementById("enroll");
const bct=document.getElementById("bct");
const bce=document.getElementById("bce");
const bar=document.getElementById("bar");
const bel=document.getElementById("bel");
const bei=document.getElementById("bei");
const enrollres=document.getElementById("enrollres");
const facultyres=document.getElementById("facultyres");

acstatus.onclick=function(){
    let clgname=document.getElementById("clg").value
    if (enroll.checked){
        enrollres.textContent=`You are enrolled in ${clgname} `;
        switch(true){
        case bct.checked:
            facultyres.textContent=`Enrolled in BCT`;
            break;
        case bce.checked:
            facultyres.textContent=`Enrolled in BCE`;
            break;
        case bar.checked:
            facultyres.textContent=`Enrolled in BAR`;
            break;
        case bel.checked:
            facultyres.textContent=`Enrolled in BEL`;
            break;
        case bei.checked:
            facultyres.textContent=`Enrolled in BEI`;
            break;
        default:
            facultyres=`You have not chosen your faculty`;
        }
    }
    else{
        enrollres.textContent=`You are not enrolled in ${clgname} `;
        facultyres.textContent=`You need to be enrolled to choose faculty`;
    }
}
let inputname="";
while (inputname===""|| inputname===null)
{
    inputname=window.prompt("Enter your name");
}
inputname=inputname.trim();
let letter=inputname.charAt(0);
letter=letter.toUpperCase();
let remaining=inputname.slice(1);
remaining=remaining.toLowerCase();
inputname=letter+remaining
username=document.getElementById("username")
username.textContent=inputname;

