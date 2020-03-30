// Write your JavaScript code.


var targetWin;
var geography;
var level;
var geographyId;
var roles;
var userId;
var userName;
var popUrl;
var ZoneGroup;
var Zone;
var Dist;
var Subdivision;


function validationMessage(statusCode, successMessage, data) {
    var alertClass;
    var message = "";
    var msg = "";
    if (statusCode == 'success') {
        alertClass = 'alert-success';
        msg = successMessage;
    }
    else if (statusCode == 'fail') {
        alertClass = 'alert-danger';
        if (typeof data.responseJSON === "string") {
            msg += data.responseJSON + "<br/>";
            message += data.responseJSON;
        }
        else {
            for (var x in data.responseJSON) {
                console.log("validationMessage: This is the key:" + x + "Value is:" + JSON.stringify(data.responseJSON[x]));
                msg += JSON.stringify(data.responseJSON[x]) + "<br/>";
            }
        }
    }

    var alert_div = '<div class="alert ' + alertClass + ' alert-dismissible fade show" role= "alert">' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<div id="status">' + msg + '</div></div>';

    console.log("This is the alert:" + alert_div)

    $("#alertStatus").html(alert_div);
    //$('#lblDeactivate').text(message);
    //$('#lblDeactivate').css("color", "red");
    //$('#Label12').css("color", "red");
    //$("#status").html(msg);
    $("#alertStatus").css("display", "block");
}

getCaptcha = function () {
    $.ajax({
        url: "/api/captcha/?captchaName=myCaptchaName",
        type: "GET",
        success: function (data, textStatus, jqXhr) { },
        async: false
    })
        .done(function (data, textStatus, jqXhr) {
            //data contains the captcha base64 string, do something with it!
            console.log("This is the data:" + JSON.stringify(data));
            $(".captcha").removeClass("hidden");
            $('#captchaImg').html('<img class="img-thumbnail img-responsive img-captcha" src="' + data + '" />');
        })
        .fail(function (jqXhr, textStatus, errorThrown) {

        })
        .always(function (data, textStatus, jqXhr) {

        });
};


function getPopURLParameter(name) {
    console.log("viewMembersList:::PopUrl:" + popUrl);
    var value = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(popUrl) || [, ""])[1].replace(/\+/g, '%20')) || ''
    console.log("This is the value for param::: " + name + ", value:::" + value);
    return value;
}

function popUpWindowOpen(url, w, h, top, left) {
    popUrl = url;  //popUrl global variable declared in /Home/Index.cshtml

    console.log("popUpWindowOpen:::PopUrl:" + popUrl);
    $('.modal-body').load(url, function (result) {
        $('#myModal').modal({ show: true });
    });
}

    /**
    function popUpWindowOpen(path, w, h, top, left) {
        if (targetWin != null && targetWin.closed == false)
            targetWin.close();

        targetWin = window.open(path, 'popup', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        targetWin.focus();
    }
    **/




$(document).ready(function () {
    var ui_view = $('#ui-view');
    console.log("This is the ui-view:" + ui_view);

    if (ui_view.length === 0) {
        console.log("This is the ui-view is empty");
    }
    else {
        $('#ui-view').ajaxLoad();

        $("#myModal").draggable({
            handle: ".x-modal-header"
        });      
    }
    
    $(document).ajaxComplete(function () {
        Pace.restart()
    });

    if ($("#indexPage").val() == "true") {
        geography = $("#geography").val();
        level = $("#level").val();
        geographyId = $("#geographyId").val();
        roles = $("#roles").val();
        userId = $("#userId").val();
        userName = $("#userName").val();
        popUrl = $("#popUrl").val();
        ZoneGroup = $("#ZoneGroup").val();
        Zone = $("#Zone").val();
        Dist = $("#Dist").val();
        Subdivision = $("#Subdivision").val();
        
        $("#indexPage").val("false");
    }
    

    $(document).ajaxError(function (event, jqxhr, settings, exception) {
        console.log("$(document).ajaxError: Reached here." + jqxhr.status + "::: message:" + exception)
        if (jqxhr.status === 401) {
            window.location = '/Account/Login?error=' + exception;
        }
    });


    // Initialize tooltip component
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Initialize popover component
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
        
    if (typeof showCaptcha !== 'undefined' && showCaptcha === 'True') {
        getCaptcha();
    }
});

function SubmitsEncry() {
    $(this).find("button[type='submit']").prop('disabled', true);
    $("#btnSubmit").html('Please wait...');
    //$("#btnSubmit").attr("disabled", true);
    //document.getElementById("btnSubmit").disabled = true;
    //$("#btnSubmit").val('Please wait...');
    //$("#encryptResult").val("");
    try {
        console.log("SubmitsEncry method started");
        var txtUserName = document.getElementById("Email").value.trim();
        var txtpassword = document.getElementById("Password").value.trim();

        if (txtUserName == "") {
            alert('Please enter UserName');
            return false;
        }
        else if (txtpassword == "") {
            alert('Please enter Password');
            return false;
        }
        else {
            console.log("this is the random no::" + $("#randomNumber").val());
            var key = CryptoJS.enc.Utf8.parse($("#randomNumber").val());
            var iv = CryptoJS.enc.Utf8.parse($("#randomNumber").val());

            var encryptedpassword = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(txtpassword), key,
                {
                    keySize: 128 / 8,
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
            //alert("javascript encrypted password:" + encryptedpassword);
            encryptedpassword = encryptedpassword.toString().replace('/\+/g', '%2B');
            encryptedpassword = encryptedpassword.toString().replace('/\//g', '%2F');
            encryptedpassword = encryptedpassword.toString().replace('/\=/g', '%3D');
            document.getElementById("hdnPWD").value = encryptedpassword;
            console.log("this is the pwd::" + encryptedpassword);
            document.getElementById("Password").value = 'dummy1';
            return true;
        }
    }
    catch (err) {
        //alert("Exception in login page" + err);
        console.log("Exception in login page" + err);
        return false;
    }
}
var isCaptcha = $("#imgCaptcha");
console.log('"$("#imgCaptcha") = ' + isCaptcha);
if (document.getElementById("imgCaptcha") !== null && document.getElementById("imgCaptcha") !== '') {
    console.log('About to set background');
    // $(".auto-style1").css('background-image', 'url("Images/LoginBoxCaptcha.jpg")');
}