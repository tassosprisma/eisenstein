import Ember from 'ember';

export default Ember.Controller.extend({

  moviesLength: 80,

  actions: {
    viewMovie: function (movie) {
      this.get('target').transitionTo('movie', movie);
    }
  }
});
