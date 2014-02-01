/*!
 * jQuery ScrollClock Plugin v0.0.1
 * https://github.com/nicholashibberd/jquery-scrollClock
 *
 * Copyright 2013 Nicholas Hibberd
 * Released under the MIT license
 */
(function ($, document, undefined) {
	$.fn.scrollClock = function (elements, options) {
    return this.each(function() {
      if (!elements.length) return;
      var _this = $(this);
      var minuteHand = _this.find('#minute-hand');
      var hourHand = _this.find('#hour-hand');

      var startTime = new Time(options.startTime);

      var scrollTimes = {};
      scrollTimes.index = 0;
      for (i= 0; i < elements.length; i++) {
        var el = $(elements[i]);
        var startPoint = scrollTimes.index;
        var endPoint = el.offset().top;
        var distance = calculateDistance(startPoint, endPoint);
        var endTime = new Time(el.data('time'));
        var timeDifference = calculateTimeDifference(startTime, endTime);

        for (j = startPoint; j <= endPoint; j++) {
          var distanceTravelled = j - startPoint;
          var percentageTravelled = distanceTravelled / distance;
          var minsByPercentage = timeDifference * percentageTravelled;
          var newTime = addMins(startTime, minsByPercentage);
          scrollTimes[j] = newTime;
          scrollTimes.index = j;
        }
        startTime = endTime;
      }
      var initialTime = scrollTimes[$(window).scrollTop()];
      setTime(initialTime);

      $(window).on('scroll', function() {
        var matrix = minuteHand.css("-webkit-transform")
        if (matrix === 'none') return;
        var values = matrix.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');

        var b = values[1];
        var angle = Math.round(Math.asin(b) * (180/Math.PI));

        var scroll = $(window).scrollTop() + options.offset;
        var scrollTime = scrollTimes[scroll];
        setTime(scrollTime);
      })

      function setTime(time) {
        if (!time) return false;
        var hourPos = time.getHours();
        var minPos = time.getMinutes();
        var mins = (hourPos * 60 ) + minPos
        var hourRotation = ((mins / 720) * 360);
        var minRotation = (minPos / 60) * 360;

        hourHand.css('-webkit-transform', "rotate(" + hourRotation + "deg)");
        minuteHand.css('-webkit-transform', "rotate(" + minRotation + "deg)");
      }

      function Time(timeString) {
        if (timeString.match(/,/)) {
          var date = new Date(timeString);
          options.date = timeString.split(" ").slice(0,3).join(" ");
        }
        else {
          var splitTime = timeString.split(":");
          if (options.date) {
            var date = new Date(options.date)
          }
          else {
            var date = new Date()
          }
          date.setHours(splitTime[0]);
          date.setMinutes(splitTime[1]);
        }
        return date
      }

      function calculateDistance(startPoint, endPoint) {
        return endPoint - startPoint;
      }

      function calculateTimeDifference(startTime, endTime) {
        var minsDiff = ((endTime - startTime) / 1000) / 60;
        return minsDiff;
      }

      function addMins(time, mins) {
        return new Date(time.getTime() + mins*60000);
      }
    });
	};

})(jQuery, document);
