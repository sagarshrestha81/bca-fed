// function submitBtn(){
//     fullName=document.getElementById("fullname").value;
//     console.log(fullName);
// }
message=document.getElementById("message");
function count(){
    fullName=document.getElementById("fullname").value;
    if(fullName.length < 8){
        message.innerText="you are unsecure";
    }else{        
        message.innerText="you are secure";
    }
}