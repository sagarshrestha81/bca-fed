box=document.getElementById("box");
function rectangle(){
    box.classList.remove("circle");
    box.classList.add("rectangle");
}
function circle(){
    box.classList.remove("rectangle");
    box.classList.add("circle");
}
function square(){
    box.classList.remove("rectangle");
    box.classList.remove("circle");
}
function toggle(){
    // if(box.classList.contains("circle")){
    //     box.classList.remove("circle");
    // }else{
    //     box.classList.add("circle");
    // }    
    box.classList.toggle("circle");
}
function passcheck(){
    len=document.getElementById("password").value.length;
if(len<8){
    document.getElementById("msg").innerText="poor password ";
    document.getElementById("msg").classList.remove("success");
    document.getElementById("msg").classList.add("danger");
    
}else{
    
    document.getElementById("msg").innerText="strong password ";
    document.getElementById("msg").classList.add("success");
    document.getElementById("msg").classList.remove("danger");
}

}