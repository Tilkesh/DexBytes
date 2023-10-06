function validateEmailSendForm() {
   var name = $("#name").val();
   var contact = $("#contact").val();
   var email = $("#email").val();
   var years = $("#years").val();
   var months = $("#months").val();
   var letter = $("#letter").val();
   var attachment = $("#attachment").val();
   if (name == ""){
       $("#nameError").show();
       $("#nameError").html("Please enter your name");
       $("#nameError").fadeOut(4000);
       $("#name").focus();
       return false;
   }else  if (contact == ""){
       $("#contactError").show();
       $("#contactError").html("Please enter your contact");
       $("#contactError").fadeOut(4000);
       $("#contact").focus();
       return false;
  }else  if (email == ""){
       $("#emailError").show();
       $("#emailError").html("Please enter your email");
       $("#emailError").fadeOut(4000);
       $("#email").focus();
       return false;
   }else  if (!validateEmail(email)){
       $("#emailError").show();
       $("#emailError").html("Please enter valid email");
       $("#emailError").fadeOut(4000);
       $("#email").focus();
       return false;
   }else  if (years == ""){
       $("#yearsError").show();
       $("#yearsError").html("Please enter years");
       $("#yearsError").fadeOut(4000);
       $("#years").focus();
       return false;
   }else  if (months == ""){
       $("#monthsError").show();
       $("#monthsError").html("Please enter months");
       $("#monthsError").fadeOut(4000);
       $("#months").focus();
       return false;
   }else if (letter == ""){
       $("#letterError").show();
       $("#letterError").html("Please enter some message");
       $("#letterError").fadeOut(4000);
       $("#letter").focus();
       return false;
   }else if (attachment == ""){
       $("#attachmentError").show();
       $("#attachmentError").html("Please select a attachment");
       $("#attachmentError").fadeOut(4000);
       $("#attachment").focus();
       return false;
   }else{
       return true;
   }
    function validateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat)) {
            return true;
        } else{
            return false;
        }
    }
}