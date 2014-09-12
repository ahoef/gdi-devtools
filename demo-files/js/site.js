$(function () {

    console.log('js is working!');

    // functions for check time button
    function calculateTime () {
      var today = new Date();
      var hour = today.getHours();
      var minute = today.getMinutes();
      var isEvening;

      if (hour < 12) {
        isEvening = false;
      } else {
        hour = hour - 12;
      }

      var abbrev;
      if (isEvening === true) {
        abbrev = " pm";
      }
      else {
        abbrev = " am";
      }

      var time = hour.toString() + ":" + minute.toString() + abbrev;
      return time;
    }

    function showTime () {
      var currentTime = calculateTime();
      $('.box1').html('<h1>' + currentTime + '</h1>');
      $('.box2').html('<h1>' + currentTime + '</h1>');
      $('.box3').html('<h1>' + currentTime + '</h1>');
    }

    $('button').on('click', showTime);

    // initialization of slider
    $('.slider').slick( {
      swipe: true
    });

    // initialization of lazy loader
    $(".gallery img").unveil(200, function() {
      $(this).load(function() {
        this.style.opacity = 1;
      });
    });

});