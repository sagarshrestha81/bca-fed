function submit_form() {
    let validate=true;
    const fullname = document.getElementById("fullname").value;
    const course = document.getElementById("course").value;
    const v_date = document.getElementById("v_date").value;
    const y_question = document.getElementById("y_question").value;
    const tnc = document.getElementById("tnc").checked;

    let gender = document.getElementsByName("gender");
    let choosedGender = '';
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            choosedGender = gender[i].value;
            break;
        }
    }
    let err_fullname = document.getElementById("err_fullname");
    err_fullname.innerText = "";
    let err_course = document.getElementById("err_course");
    err_course.innerText = "";
    let err_v_date = document.getElementById("err_v_date");
    err_v_date.innerText = "";
    let err_y_question = document.getElementById("err_y_question");
    err_y_question.innerText = "";
    let err_gender = document.getElementById("err_gender");
    err_gender.innerText = "";



    if (!fullname) {
        err_fullname.innerText = "please enter your name";
        validate=false;
    }
    if (!course) {
        err_course.innerText = "please select your course";
        validate=false;
    }
    if (!choosedGender) {
        err_gender.innerText = "please choose your gender";
        validate=false;
    }
    if (!v_date) {
        err_v_date.innerText = "please choose visit date";
        validate=false;
    }
    if (!y_question) {
        err_y_question.innerText = "Ask question";
        validate=false;
    }
    if (!tnc) {
        err_tnc.innerText = "Please tick agree to send message";
        validate=false;
    }
    return validate;
}