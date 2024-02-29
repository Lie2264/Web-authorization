$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".frame").toggleClass("frame-long");
    $(".signin-active").toggleClass("signin-inactive");
    $(this).removeClass("idle").addClass("active");
	});
});




$(function() {
  $(".btn-signin").click(function() {
    var email = $("#login").val();
    var password = $("#password").val();
    console.log(email);
    console.log(password);

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return; 
    }

    setTimeout(function() {
      var isEmailInDatabase = checkEmailandPasswordInDatabase(email, password);
      
      if (isEmailInDatabase) {
        // Continue with your existing code
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".btn-goback").toggleClass("btn-goback-up");


        if(email.includes('@admin.')){
          setTimeout(function() {
            window.location.href = "Admin.html";
          }, 3000);
        } else if(email.includes('@user.')){
          setTimeout(function(){ 
            window.location.href = "User.html";
          },3000);
        }
      } else {
        alert("Email or password not found in the database. Please check your email or password.");
        checkOpen = false;
      }
    }, 500); // Simulated delay for asynchronous operation
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function checkEmailandPasswordInDatabase(email, password){
    var database = {
      "test@admin.com": "123",
      "test@user.com": "1234",
     
    };
    return database[email] === password;
  }
});
