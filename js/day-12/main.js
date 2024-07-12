function submit_form(){
    const fullname=document.getElementById("fullname").value;
    const course=document.getElementById("course").value;
    const v_date=document.getElementById("v_date").value;
    const y_question=document.getElementById("y_question").value;
   
    const gender = document.getElementsByName("gender");
    for(i=0;i<gender.length;i++){
        if(gender[i].checked){

            console.log(gender[i].value);
        }
    }
    
}