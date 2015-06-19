import Ember from 'ember';

// Pending backend API
var movies = {
  featured: [
    {title: 'City of God', url: '/movies/City of God/cover.jpg'},
    {title: 'Come and see', url: '/movies/Come and see/cover.jpg'},
    {title: 'Gagarin', url: '/movies/Gagarin/cover.jpg'},
    {title: 'Good Bye Lenin', url: '/movies/Good Bye Lenin/cover.jpg'},
    {title: 'La vita e bella', url: '/movies/La vita e bella/cover.jpg'},
    {title: 'La voz Dormida', url: '/movies/La voz Dormida/cover.jpg'},
  ],
  popular: [
    {title: 'Germany Pale Mother', url: '/movies/Germany Pale Mother/cover.jpg'},
    {title: 'Green street Hooligan', url: '/movies/Green street Hooligan/cover.jpg'},
    {title: 'Il Conformista', url: '/movies/Il Conformista/cover.jpg'},
    {title: 'Los lunes al sol', url: '/movies/los lunes al sol/cover.jpg'},
    {title: 'Έρνστ Τέλμαν', url: '/movies/Έρνστ Τέλμαν/cover.jpg'},
    {title: 'Και οι Δήμιοι Πεθαίνουν', url: '/movies/Και οι Δήμιοι Πεθαίνουν/cover.jpg'},
  ],
  new: [
    {title: '1900', url: '/movies/1900/1900.jpg'},
    {title: 'Ae Fond Kiss', url: '/movies/Ae Fond Kiss/Ae Fond Kiss.jpg'},
    {title: 'American History X', url: '/movies/American History X/American History X.jpg'},
    {title: 'Apocalypse Now', url: '/movies/Apocalypse Now/Apocalypse Now.jpg'},
    {title: 'Bread and Roses', url: '/movies/Bread and Roses/Bread and Roses.jpg'},
    {title: 'Buena Vista Social Club', url: '/movies/Buena Vista Social Club/Buena Vista Social Club.jpg'},
  ]
}

export default Ember.Controller.extend({

  showFeatured: false,
  showPopular: false,
  showNew: false,

  movies: Ember.ArrayController.create(),

  actions: {
    select: function (mode) {
      this.setProperties({
        showFeatured: mode == 'featured',
        showPopular: mode == 'popular',
        showNew: mode == 'new',
      });
      this.get('movies').clear();
      this.get('movies').pushObjects(movies[mode]);
    }
  }
});
