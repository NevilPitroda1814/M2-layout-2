$(document).ready(function(){
    $(".btn").click(function(){
      $(".btn").hide(1300);
      $(".myForm").css("margin-top", "0%");
      $(".myForm").css("transition", "3s");

    });

    $(".submit").click(function(){
        $(".addbtn").show(2000);
        $(".myForm").hide();
      });
  });

//   store a input value...
function store(){
    var inputFname= document.getElementById("Fname");
    localStorage.setItem("Fname", inputFname.value);

    var inputLname= document.getElementById("Lname");
    localStorage.setItem("Lname", inputLname.value);

    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);

    var inputPhoneNumber= document.getElementById("number");
    localStorage.setItem("number", inputPhoneNumber.value);

    var inputBdate= document.getElementById("Birthdate");
    localStorage.setItem("Birthdate", inputBdate.value);

    var inputBdate= document.getElementById("Appointment_time");
    localStorage.setItem("Appointment_time", inputBdate.value);

    var inputcolor= document.getElementById("favcolor");
    localStorage.setItem("favcolor", inputcolor.value);

    var inputPayment= document.getElementsByClassName("PaymentMathod");
    for(i = 0 ; i <= inputPayment.length ; i++ ){
        if(inputPayment[i].checked){
            localStorage.setItem("PaymentMathod", inputPayment[i].value);
        }
    }

    var inputAge= document.getElementById("Age");
    localStorage.setItem("Age", inputAge.value);

    var inputChBox= document.getElementById("checkbox");
    localStorage.setItem("checkbox", inputChBox.value);

    var inputUpload= document.getElementById("file");
    localStorage.setItem("file", inputUpload.value);
   }

   $(document).ready(function() {
    localStorageGetItem();
}  );