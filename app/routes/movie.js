import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    return movies.findBy('title', params.movie_id);
  },
});
