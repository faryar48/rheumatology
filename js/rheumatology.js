  $(document).ready(function() {
    $('#login-button').on('click', function () {
      if ($('#inputPassword').val() === '20rheumatology15') {
         window.location.href = "home.html"; 
      } else { 
          console.log('no cars go'); 
          $('#error-message').text("Incorrect password.Please try again.")
        
      }

    }); 



 
  });