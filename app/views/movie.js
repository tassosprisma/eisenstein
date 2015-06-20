import Ember from 'ember';

export default Ember.View.extend({

  classNames: ['movie-wrapper'],

  tagString: function () {
    return this.get('controller.model.tags').toString().replace(/\,/g, ', ');
  }.property('controller.model.tags'),

  genreString: function () {
    return this.get('controller.model.genres').toString().replace(/\,/g, ', ');
  }.property('controller.model.genres'),

  castString: function () {
    return this.get('controller.model.cast').toString().replace(/\,/g, ', ');
  }.property('controller.model.cast'),
});
