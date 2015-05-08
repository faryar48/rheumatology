  $(document).ready(function() {
    

    var videoBorder = function () {

      for (var i = 0; i < 6; i++) {
        var ID = $('i')[i].id; 
        var videoSource = $('#main-video-screen').attr('src'); 


        if (videoSource.match(ID)) {
          var parentDiv = $( "i:eq(" +  i + ")" ).parent();
          parentDiv.addClass('active');   
        } else {
          var parentDiv = $( "i:eq(" +  i + ")" ).parent();
          parentDiv.removeClass('active'); 
        }

      };

    }

    videoBorder(); 

    
    $('.other-videos-play').on('click', function (result) {
      var videoID = result.currentTarget.id; 

      var source = 'videos/' + videoID + '.mp4';

      $('#main-video-screen').attr('src', source); 


      var myVideo = $('#main-video-screen').parent()[0]; 

      myVideo.load(); 
      myVideo.play(); 
      videoBorder(); 
      $('#main-video-play').fadeOut(); 


    }); 

    var playPause = function () {

      var myVideo = $('#main-video-screen').parent()[0];

      if (myVideo.paused) {
        myVideo.play(); 
        $('#main-video-play').fadeOut(); 
      } else {
        myVideo.pause();
        $('#main-video-play').fadeIn(); 

      }

    }


    $('video').on('click', playPause);  
    $('#main-video-play').on('click', playPause);  




 
  });














