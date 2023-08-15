
var firstname=document.getElementById("finame").value;
var lastname=document.getElementById("laname").value;
var contact=document.getElementById("phonenumber").value;
var mailid=document.getElementById("emailid").value;
//let optedfor=document.getElementsByName("select");
function getlocation(){
    if(navigator.getlocation){
        navigator.getlocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Invalid location");
    }
}
function showPosition(position){
    document.getElementById("latitude").innerHTML=position.coords.latitude;
    document.getElementById("longitude").innerHTML=position.coords.longitude;
}
function confirmed(){
if(firstname==''){
    alert("please enter name");
}
else if(lastname==''){
    alert("please enter name");
}
else if(contact==''){
    alert("please enter a  correct phone number");
    
}
else if(mailid==''){
    alert("enter mail");
}
else{
    //const fs= require('fs');
    const data={
        "FirstName ":document.getElementById("finame").value,
        "LastName  ":document.getElementById("laname").value,
        "Emailid   ":document.getElementById("phonenumber").value,
        "Contact   ":document.getElementById("emailid").value,
    }
    const finished = (error)=>{
        if(error){
            console.error(error);
            return;
        }
    }
const obj = JSON.stringify(data);
//fs.writeFile("file1.txt",obj,finished);
alert("your details saved as"+obj);
}   
}
function clicked(){
    var email=document.getElementById("mailid").value;
    var password=document.getElementById("pswd").value;
    if(email=='livhope@gmail.com' && password=='livhope'){
        window.location.href="home1.html";
    }
    else{
        window.location.href="index.html";
        alert("Please enter correct email or password");
    }
}