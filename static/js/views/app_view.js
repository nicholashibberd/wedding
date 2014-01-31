define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
  var AppView = Backbone.View.extend({
    el: 'body',
    initialize: function(app, model) {
      this.app = app;
      this.model = model;
      this.render();
      this.parallax();
    },

    render: function() {
      this.$el.scrollspy(
        {
          target: '#my-nav',
          offset: 250
        }
      )
    },

    parallax: function() {
      var sections = {
        intro: {
          id: 'intro',
        },
        theDayBefore: {
          id: 'the-day-before',
        },
        theChurch: {
          id: 'the-church',
        },
        transport: {
          id: 'transport',
        },
        gorseHill: {
          id: 'gorse-hill',
        },
        theWeddingBreakfast: {
          id: 'the-wedding-breakfast',
        },
        accommodation: {
          id: 'accommodation',
        },
        giftList: {
          id: 'gift-list',
        },
      }

      var theDayBeforeSection = new Section(sections.theDayBefore);
      var theChurchSection = new Section(sections.theChurch);
      var transportSection = new Section(sections.transport);
      var gorseHillSection = new Section(sections.gorseHill);
      var theWeddingBreakfastSection = new Section(sections.theWeddingBreakfast);
      var accommodationSection = new Section(sections.accommodation);
      var giftListSection = new Section(sections.giftList);

      var sectionObjects = [
        theDayBeforeSection, 
        theChurchSection,
        transportSection,
        gorseHillSection,
        theWeddingBreakfastSection, 
        accommodationSection, 
        giftListSection, 
      ]
         
      var $window = $(window); 
      var windowHeight = $window.height();
      var velocity = 0.8; 
      var currentSection = sections.intro;
      
      function update() { 
        trackSection();
        var activeElements = $('.scroller-main.active'); 
        
        for (var i = 0; i < activeElements.length; i++) {
          var elem = $(activeElements[i]);
          var elemTop = elem.offset().top; 
          var pos = $window.scrollTop(); 

          var elemScroll = pos - elemTop;

          var bgPosition = Math.round(elemScroll * velocity);
          elem.css('backgroundPosition', '50% ' + bgPosition + 'px'); 
        }
      }; 

      function trackSection() {
        var scrollTop = $window.scrollTop();
        var scrollBottom = scrollTop + windowHeight;

        for (var i=0; i < sectionObjects.length; i++) {
          var section = sectionObjects[i];
          var elem = section.element;
          if (isScrolledIntoView(elem)) {
            elem.addClass('active');
          }
          else {
            section.active = false;
            elem.removeClass('active');
          }
        }
      }

      function Section(data) {
        this.id = data.id
        this.element = $('#' + data.id + '-scroller-main');
      }

      Section.prototype.position = function() {
        return this.height() + this.element.position().top;
      }

      Section.prototype.height = function() {
        var val = this.element.css('height').replace("px", "");
        return parseInt(val);
      }
      
      // $window.on('scroll', update)

      function isScrolledIntoView(elem)
      {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = elem.offset().top;
        var elemBottom = elemTop + $(elem).height();
        
        return ((elemBottom <= docViewBottom && elemBottom >= docViewTop) || (elemTop >= docViewTop && elemTop <= docViewBottom));
      }
    }

    
    
  });
  
  return AppView;
});
