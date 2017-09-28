window.addEventListener("load", init);
var box;
function init() {
 
       document.getElementById("name").addEventListener("keyup", name_val);
    document.getElementById("pass").addEventListener("keyup", pass_val);
    document.getElementById("confirm").addEventListener("keyup", confirm_val);
     box = document.getElementsByClassName("box");
    for(var i = 0; i<box.length; i++){
        box[i].addEventListener("blur", required);
//         box[i].addEventListener("keyup", validate);
    }
    
}

function name_val(event) {
    var a=event.srcElement.value;
      if(a.length>=1&&a.length<4){
         document.getElementById("name_span").innerHTML = "minimum 4 characters required";
     } 
    else if(a.length>=4){
        document.getElementById("name_span").innerHTML = "ok";
    }
     else {
        document.getElementById("name_span").innerHTML = "";
 
    }
}
function pass_val(event) {
   var a=event.srcElement.value;
      if(a.length>=1&&a.length<4){
         document.getElementById("pass_span").innerHTML =   "Weak";
     } 
    else if(a.length>=4&&a.length<8){
        document.getElementById("pass_span").innerHTML =   "Good";
 
    }
     else if(a.length>=8){
        document.getElementById("pass_span").innerHTML =   "Strong";
 
    }
    else {
        document.getElementById("pass_span").innerHTML =   "";
 
    }
    

}

function confirm_val(event) {
   var a = event.srcElement.value;
    
    var b = document.getElementById("pass").value;
      if(a==b&&a!=""){
         document.getElementById("confirm_span").innerHTML = "confirm";
      }
    else if(a==""){
        document.getElementById("confirm_span").innerHTML = "";
    }
    else {
        document.getElementById("confirm_span").innerHTML = "invalid";
 
    }

}

function required(event) {
    if(this.value==""){
    
    if(this==document.getElementById("name")){
    document.getElementById("name_span2").innerHTML = "!Required";
    document.getElementById("name").style.border = "1px solid darkgoldenrod";
    
}
    else if(this==document.getElementById("email")) {
        
         document.getElementById("email_span").innerHTML = "!Required";
    document.getElementById("email").style.border = "1px solid darkgoldenrod";
   
    }
      if(this==document.getElementById("pass")){
    document.getElementById("pass_span2").innerHTML = "!Required";
    document.getElementById("pass").style.border = "1px solid darkgoldenrod";
    
}
      if(this==document.getElementById("confirm")){
    document.getElementById("confirm_span2").innerHTML = "!Required";
    document.getElementById("confirm").style.border = "1px solid darkgoldenrod";
    
        }
   }
}

//function validate() {
//    if(this==document.getElementById("name")){
//        var a=event.srcElement.value;
//      if(a.length>=1&&a.length<4){
//         document.getElementById("name_span").innerHTML = "minimum 4 characters required";
//     } 
//    else if(a.length>=4){
//        document.getElementById("name_span").innerHTML = "ok";
//    }
//     else {
//        document.getElementById("name_span").innerHTML = "";
// 
//    }
//
//    }
//    if(this==document.getElementById("pass")){
//        var a=event.srcElement.value;
//      if(a.length>=1&&a.length<4){
//         document.getElementById("pass_span").innerHTML =   "Weak";
//     } 
//    else if(a.length>=4&&a.length<8){
//        document.getElementById("pass_span").innerHTML =   "Good";
// 
//    }
//     else if(a.length>=8){
//        document.getElementById("pass_span").innerHTML =   "Strong";
// 
//    }
//    else {
//        document.getElementById("pass_span").innerHTML =   "";
// 
//    }
//
//    }
//}

