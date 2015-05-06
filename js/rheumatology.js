  $(document).ready(function() {
    
    $('#login-button').on('click', function () {
      if ($('#inputPassword').val() === '20rheumatology15') {
         window.location.href = "home.html"; 
         $('#inputPassword').removeClass('warning'); 
         
      } else { 
          $('#inputPassword').val(""); 
          $('#inputPassword').attr('placeholder', "Incorrect password, please try again.");
          $('#inputPassword').addClass('warning');   
      }
    }); 


    $('a').on('click', function () {
      console.log('hello there'); 
    }); 


 
  });