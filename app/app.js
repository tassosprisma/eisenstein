import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

window.movies = [
  {title: 'City of God', url: '/movies/City of God/cover.jpg',
  description: "\"Η Πολη του Θεου\" είναι ένα συγκρότημα κατοικιών στο Ρίο Ντε Τζανέιρο, χτισμένο το 1960, το οποίο στη διάρκεια της δεκαετίας του ’80, έγινε ένα από τα πιο επικίνδυνα μέρη στη πόλη! Ο νεαρός Φουζέ μεγαλώνει σε αυτό το άγριο περιβάλλον, όπου όλα μοιάζουν να στρέφονται εναντίον του και από πολύ νωρίς, αντιλαμβάνεται ότι βρίσκεται σε εντελώς… λάθος μέρος. Πολύ ευαίσθητος για να γίνει εγκληματίας και πολύ έξυπνος για να δουλέψει σε άθλιες δουλειές του ποδαριού, ανακαλύπτει τελικά, τη δική του οδό διαφυγής… Ο Φουζέ βλέπει τα πράγματα διαφορετικά, έχει το μάτι ενός καλλιτέχνη και πολύ γρήγορα, θα πιάσει στα χέρια του μια φωτογραφική μηχανή, μέσα από την οποία θα δει τη ζωή αλλιώς, κάνοντας τα πρώτα του βήματα προς τη λύτρωσή του!",
  date: 2002, cast: ['Alexandre Rodrigues', 'Matheus Nachtergaele', 'Leandro Firmino'], tags: ['1980s', 'photographer', 'boy'],
  genres: ['Crime', 'Drama']
  },
  {title: 'Come and see', url: '/movies/Come and see/cover.jpg'},
  {title: 'Gagarin', url: '/movies/Gagarin/cover.jpg'},
  {title: 'Good Bye Lenin', url: '/movies/Good Bye Lenin/cover.jpg'},
  {title: 'La vita e bella', url: '/movies/La vita e bella/cover.jpg'},
  {title: 'La voz Dormida', url: '/movies/La voz Dormida/cover.jpg'},
  {title: 'Germany Pale Mother', url: '/movies/Germany Pale Mother/cover.jpg'},
  {title: 'Green street Hooligan', url: '/movies/Green street Hooligan/cover.jpg'},
  {title: 'Il Conformista', url: '/movies/Il Conformista/cover.jpg'},
  {title: 'Los lunes al sol', url: '/movies/los lunes al sol/cover.jpg'},
  {title: 'Έρνστ Τέλμαν', url: '/movies/Έρνστ Τέλμαν/cover.jpg'},
  {title: 'Και οι Δήμιοι Πεθαίνουν', url: '/movies/Και οι Δήμιοι Πεθαίνουν/cover.jpg'},
  {title: '1900', url: '/movies/1900/1900.jpg'},
  {title: 'Ae Fond Kiss', url: '/movies/Ae Fond Kiss/Ae Fond Kiss.jpg'},
  {title: 'American History X', url: '/movies/American History X/American History X.jpg'},
  {title: 'Apocalypse Now', url: '/movies/Apocalypse Now/Apocalypse Now.jpg'},
  {title: 'Bread and Roses', url: '/movies/Bread and Roses/Bread and Roses.jpg'},
  {title: 'Buena Vista Social Club', url: '/movies/Buena Vista Social Club/Buena Vista Social Club.jpg'},
];
movies.forEach(function (movie) {
  movie.id = movie.title;
});

export default App;
