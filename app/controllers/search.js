import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['term'],
  term: 'asd',

  terms: function () {
    return this.get('term').toLowerCase().split('+');
  }.property('term'),

  movies: function () {
    var ret = [];
    window.movies.forEach(function (movie) {
      this.get('terms').some(function (term) {
        if (movie.title.toLowerCase().indexOf(term) != -1) {
          ret.push(movie);
          return true;
        }
      }, this);
    }, this);
    return ret;
  }.property('terms')
});
