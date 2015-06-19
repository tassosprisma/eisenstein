import Ember from 'ember';

var featured = [
  {title: '1900', url: '/movies/1900/1900.jpg'},
  {title: 'Ae Fond Kiss', url: '/movies/Ae Fond Kiss/Ae Fond Kiss.jpg'},
  {title: 'American History X', url: '/movies/American History X/American History X.jpg'},
  {title: 'Apocalypse Now', url: '/movies/Apocalypse Now/Apocalypse Now.jpg'},
  {title: 'Bread and Roses', url: '/movies/Bread and Roses/Bread and Roses.jpg'},
  {title: 'Buena Vista Social Club', url: '/movies/Buena Vista Social Club/Buena Vista Social Club.jpg'},
];

export default Ember.Controller.extend({

  showFeatured: false,
  showPopular: false,
  showNew: false,

  movies: Ember.ArrayController.create(),

  actions: {
    select: function (mode) {
      this.setProperties({
        showFeatured: mode == 'featued',
        showPopular: mode == 'popular',
        showNew: mode == 'new',
      });
      /*
      Ember.$.getJSON('/featured', function () {

      });
      */
      this.get('movies').pushObjects(featured);
    }
  }
});
