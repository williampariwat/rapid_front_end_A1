
// var email = document.getElementById("email");
// document.addEventListener("keypress",)
// document.getElementById("email").addEventListener("mouseout", validate);

document.getElementById("email").addEventListener("keypress",validate);
document.getElementById("email").addEventListener("blur",blur);



//   document.addEventListener('keypress', advance);

  function validate() {
        //Took this regex from https://regexr.com/3e48o
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var text = document.getElementById("email").value;
        if(regex.test(text)){
           document.getElementById("email").style.border = "2px solid rgb(149, 194, 246)";
           document.getElementById("email").style.outlineColor ="rgb(167, 197, 231)"
           document.getElementById('error').innerHTML = "";
           document.getElementById("sub").addEventListener("click",subs);
        }
        else{
            document.getElementById('error').innerHTML = "A valid email is required";
            document.getElementById("email").style.outlineColor ="#FF0000"
            document.getElementById("email").style.border = "2px solid rgb(246, 162, 149)";

            email.focus();

        }
    }

    function subs(){
        var newHtml = '<div class =card id = "box" style =" \
        font-family: Arial, Helvetica, sans-serif;\
        width: 330px;\
        margin-left: 5px;\
        padding-right: 5px;\
        padding: 25px ;\
        background-color: rgb(208, 244, 213);\
        line-height: 10px;\
        margin-top: 0px;\
        border: 1px solid rgb(224, 224, 224);">\
        <b style = "color: rgb(28, 96, 20);">Thank You</b>\
        <p style = "color: rgb(28, 96, 20);">Your subscription was a success!</p>\
        </div>'
        document.getElementById("box").innerHTML = newHtml;
    }

    function blur(){
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var text = document.getElementById("email").value;
        if(regex.test(text)){
           document.getElementById("email").style.border = "2px solid rgb(149, 194, 246)";
           document.getElementById('error').innerHTML = "";
           document.getElementById("email").style.outlineColor ="rgb(167, 197, 231)"
           document.getElementById("sub").addEventListener("click",subs);
        }
        else{
            document.getElementById('error').innerHTML = "A valid email is required";
            document.getElementById("email").style.outlineColor ="#FF0000"
            document.getElementById("email").style.border = "2px solid rgb(246, 162, 149)";
        }
    }


