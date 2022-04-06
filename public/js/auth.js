$("#repassword").on("input", function() {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if (password != repassword && repassword != "") {
        $("#message-password").show();
        $("#repassword").css("outline-color", "red");
        $("#repassword").css("border", "1px red solid");
        $("#btn_register").addClass('disabled');
    } else {
        $("#message-password").hide();
        $("#repassword").css("outline-color", "black");
        $("#repassword").css("border", "1px #d8c3c3 solid");
        $("#btn_register").removeClass('disabled');
    }
});
$("#password").on("change", function() {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if (password != repassword && repassword != "") {
        $("#message-password").show();
        $("#repassword").css("outline-color", "red");
        $("#repassword").css("border", "1px red solid");
        $("#btn_register").addClass('disabled');
    } else {
        $("#message-password").hide();
        $("#repassword").css("outline-color", "black");
        $("#repassword").css("border", "1px #d8c3c3 solid");
        $("#btn_register").removeClass('disabled');
    }
});
$("[name~=form-register]").submit(function() {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if (password != repassword) {
        return false;
    }
});

