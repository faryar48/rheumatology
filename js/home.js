  $(document).ready(function() {
        

    var self = this;



    this.flipping_animation = function() {

        setInterval(function() {
            $('.flippable').each(function(index) {
                var self = $(this);

                setTimeout(function() {
                    if (self.hasClass('unflipped')) {
                        self.removeClass('unflipped').addClass('flipped');

                    } else {
                        self.removeClass('flipped').addClass('unflipped');
                    }
                }, index * 1500);
            });
        }, 5000);
    };

    self.flipping_animation();





  });