
function submit_form() {
    let validate = false;
 

    // const fullname = $("#fullname").val();
    // const course = $("#course").val();
    // const v_date = $("#v_date").val();
    // const y_question = $("#y_question").val();
    // const tnc = $("input[type=checkbox][name=tnc]:checked").val();
    // const gender = $("input[type=radio][name=gender]:checked").val();


  

    let err_fullname = $("#err_fullname");
    err_fullname.text("");
    let err_course = $("#err_course");
    err_course.text("");
    let err_v_date = $("#err_v_date");
    err_v_date.text("");
    let err_y_question = $("#err_y_question");
    err_y_question.text("");
    let err_tnc = $("#err_tnc");
    err_tnc.text("");
    let err_gender = $("#err_gender");
    err_gender.text("");
    if (!fullname) {
        err_fullname.text("please enter your name");
        validate=false;
    }
    if (!course) {
        err_course.text("please select your course");
        validate=false;
    }
    if (!gender) {
        err_gender.text("please choose your gender");
        validate=false;
    }
    if (!v_date) {
        err_v_date.text("please choose visit date");
        validate=false;
    }
    if (!y_question) {
        err_y_question.text("Ask question");
        validate=false;
    }
    if (!tnc) {
        err_tnc.text("Please tick agree to send message");
        validate=false;
    }
    return validate;
}

