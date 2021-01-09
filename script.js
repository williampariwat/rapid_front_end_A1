


  function validate() {
        var email = document.Validation.email.value();
        //Took this regex from https://regexr.com/3e48o
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        
        // email = document.getElementById("input").nodeValue;
        if(!regex.test(email)){
           document.getElementById('placeholder').innerHTML = "A valid email is required";
           email.focus();
           return false;
        }
        else{
            return true;
        }
    }
