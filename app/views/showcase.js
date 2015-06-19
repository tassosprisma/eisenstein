import Ember from 'ember';

export default Ember.View.extend({

  load: function () {
    Ember.run.next(this, function () {
      this.$('#featured-btn').click();
    });
  }.on('didInsertElement'),

});
