import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    search: function (value) {
      this.transitionTo('search', {
        queryParams: {
          term: value.split(' ').join('+')
        }
      });
    }
  }
});
