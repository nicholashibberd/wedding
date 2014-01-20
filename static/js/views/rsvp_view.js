define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var RsvpView = Backbone.View.extend({
    el: '#rsvp-form',
    initialize: function(app) {
      this.app = app;
      this.form = this.$el.find('form');
      this.optionalSections = this.$el.find('#optional-sections');
      this.thankyouSection = this.$el.find('#thankyou');
      this.sorrySection = this.$el.find('#sorry');
      this.errorSection = this.$el.find('#error');
      this.add_rsvp = this.$el.find('#add-rsvp');
      this.emailLink = this.$el.find('#email-link');
      this.setEmailAddress();
    },
    events: {
      'change input[name=attending]': 'handleAttendance',
      'change input[name=starter]': 'showMenuChoice',
      'change input[name=main]': 'showMenuChoice',
      'change input[name=dessert]': 'showMenuChoice',
      'submit form': 'submit',
      'click #add-rsvp button': 'addRsvp'
    },
    handleAttendance: function(event) {
      if (event.target.value == "yes") {
        this.attending = true;
        this.optionalSections.show()
      }
      else {
        this.attending = false;
        this.optionalSections.hide()
      }
    },
    showMenuChoice: function(event) {
      var course = event.target.name
      var choice = ['A', 'B', 'C'].indexOf(event.target.value)
      var dish = $('#menu #' + course + ' li').eq(choice).text()
      this.$el.find('#menu-choice-' + course).text(dish)
    },
    submit: function(event) {
      event.preventDefault()
      var _this = this;
      var data = this.form.serialize();
      $.ajax({
        type: 'POST',
        url: '/rsvp',
        data: data
      }).done(function() {
        _this.renderSuccess(); 
      }).fail(function() {
        _this.renderFailure();
      });
    },
    renderSuccess: function() {
      this.form.hide() 
      if (this.attending === true) {
        this.thankyouSection.show();
        this.add_rsvp.show();
      }
      else if (this.attending === false) {
        this.sorrySection.show();
        this.add_rsvp.show();
      }
      this.scrollToFormTop();
    },
    renderFailure: function() {
      this.sorrySection.show();
      this.scrollToFormTop();
    },
    setEmailAddress: function() {
      var a = 'nicholashibberd'
      var b = 'gmail.com'
      var link = 'mailto:' + a + '@' + b;
      this.emailLink.attr('href', link) 
    },
    addRsvp: function() {
      this.resetForm();
      this.optionalSections.hide();
      this.form.show();
      this.thankyouSection.hide()
      this.sorrySection.hide()
      this.add_rsvp.hide()
    },
    scrollToFormTop: function() {
      $('body').animate({
        scrollTop: this.$el.offset().top - 80
      });
    },
    resetForm: function() {
      this.form.find('input').prop('checked', false)
      this.form.find('input[type=text]').val('');
      this.form.find('.menu-choice').text('');
    }
  });

  return RsvpView;
});
