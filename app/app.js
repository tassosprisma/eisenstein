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
  {
    title: 'City of God',
    url: '/movies/City of God/cover.jpg',
    description: "\"Η Πολη του Θεου\" είναι ένα συγκρότημα κατοικιών στο Ρίο Ντε Τζανέιρο, χτισμένο το 1960, το οποίο στη διάρκεια της δεκαετίας του ’80, έγινε ένα από τα πιο επικίνδυνα μέρη στη πόλη! Ο νεαρός Φουζέ μεγαλώνει σε αυτό το άγριο περιβάλλον, όπου όλα μοιάζουν να στρέφονται εναντίον του και από πολύ νωρίς, αντιλαμβάνεται ότι βρίσκεται σε εντελώς… λάθος μέρος. Πολύ ευαίσθητος για να γίνει εγκληματίας και πολύ έξυπνος για να δουλέψει σε άθλιες δουλειές του ποδαριού, ανακαλύπτει τελικά, τη δική του οδό διαφυγής… Ο Φουζέ βλέπει τα πράγματα διαφορετικά, έχει το μάτι ενός καλλιτέχνη και πολύ γρήγορα, θα πιάσει στα χέρια του μια φωτογραφική μηχανή, μέσα από την οποία θα δει τη ζωή αλλιώς, κάνοντας τα πρώτα του βήματα προς τη λύτρωσή του!",
    date: 2002,
    cast: ['Alexandre Rodrigues', 'Matheus Nachtergaele', 'Leandro Firmino'],
    tags: ['1980s', 'photographer', 'boy'],
    genres: ['Crime', 'Drama']
  },
  {
    title: 'Come and see',
    url: '/movies/Come and see/cover.jpg',
    description : 'Ο τίτλος της ταινίας βγαίνει μέσα από το Βιβλίο της Αποκάλυψης και λειτουργεί υπαινικτικά\
    με τις εικόνες αποκάλυψης που ο δημιουργός παραθέτει. Εικόνες που καίνε πάνω στο υποσυνείδητο:\
    Ενα γερμανικό προσκοπικό αεροπλάνο βουίζει ίδιος άγγελος θανάτου... Αλεξίπτωτα φτερουγίζουν στον\
    ουρανό σαν απειλητικά έντομα... Φωτεινοί πορτοκαλί ανιχνευτές πέφτουν με γδούπο στα πλευρά μιας\
    αβοήθητης αγελάδας... Ενας παιχνιδιάρικος αξιωματικός της ομάδας «Einsatzgruppen» με περίεργη στάση\
    διατάζει την εξόντωση ενός χωριού. Πρόκειται για αληθινό αριστούργημα, ενδεχομένως, για την «αφυπνιστικότερη» α\
    ντιπολεμική και αντιφασιστική ταινία όλων των εποχών. Κανένα φιλμ «Αποκάλυψης», όπως τα δημοφιλέστατα «ΑΠΟΚΑΛΥΨΗ ΤΩΡΑ» ή «FULL METAL JACKET», δεν απεικονίζει τις «απανθρωπότατες» επιπτώσεις του πολέμου - τη συνέχιση της καπιταλιστικής ειρήνης - πιο έντονα, πιο άγρια, πιο παραστατικά από τα αθώα μάτια του Φλόρια, που πρωτοσυναντάμε στα πυκνά δάση της Λευκορωσίας. Μάτια που στο τέλος της οδύσσειάς του κατάντησαν γέρου, δυο τρύπες για μάτια, που μέσα τους αντικατοπτρίζεται η αμέτρητη φρικαλεότητα όσων «είδε»...Η ιστορία του «ΕΛΑ ΝΑ ΔΕΙΣ» ξετυλίγεται στη Λευκορωσία, κοντά στα πολωνικά σύνορα το 1943. Η ταινία φτιάχτηκε για την επέτειο των 40 χρόνων από τη θριαμβευτική νίκη του Σοβιετικού Στρατού και Λαού επί του Ναζισμού. Το ουσιασ\
    τικό της «κατόρθωμα», είναι αυτό της απεικόνισης της αληθινής φύσης και ταυτότητας του ιμπεριαλιστικού πολέμου, μέσα από το βλέμμα ενός αγροτόπαιδου που βρίσκει ένα όπλο και το σκάει από το σπίτι του για να ενταχθεί στις γραμμές των Παρτιζάνων που πολεμούν ναζιστές και ντόπιους συνεργάτες τους. (Το σενάριο με αρχικό τίτλο «Kill Hitler» συνέγραψε με τον Κλίμοφ, ο Αλεξάντερ Αντάμοβιτς που νεαρός πολέμησε με τους Λευκορώσους παρτιζάνους). Το «ΕΛΑ ΝΑ ΔΕΙΣ» αποπνέει, κυριολεκτικά, παγερό θανατικό και απέραντη ερημιά, που αγγίζει κάθε μορφή ζωής και καταγράφει το κτηνώδες μίσος του φασισμού προς τον μοναδικό του εχθρό, το σοσιαλισμό. Η ταινία έχοντας αποτινάξει από πάνω της κάθε ίχνος, χολιγουντιανού τύπου, πατριωτισμό, με γελοία μεγαλόστομους διαλόγους, με «ηρωικές» πράξεις και «καθαρτικό» χάπι εντ, μας βυθίζει καταλυτικά στην απόλυτη αλήθεια της θηριωδίας του ναζισμού, μας καθιστά κοινωνούς της ανθρώπινης απόγνωσης, του τρόμου της απάθειας, αλλά ταυτόχρονα, του υπεράνθρωπου «υπέρ πάντων» αγώνα για την επιβίωση και την τελική μεγάλη νίκη του συστήματος της ζωής πάνω στο σύστημα του θανάτου... Ο,τι αγάπησε ο Φλόρια, και ο κάθε Φλόρια, το εξοντώνει ο πόλεμος, φρικιαστικές οι μνήμες που καθρεφτίζονται στο άδειο βλέμμα που κοιτάζοντάς μας κατάματα μας προειδοποιεί να κρατήσουμε στη δική μας μνήμη άσβεστο αυτό που είδαμε, άσβεστο το μίσος για το φασισμό..',
    date: 2009,
    cast: ['Aleksey Kravchenko', 'Olga Mironova', 'Liubomiras Lauciavicius', 'Vladas Bagdonas', 'Juri Lumiste'],
    tags: ['nazi occupied soviet union', 'wehrmacht', 'crime against humanity'],
    genres: ['Drama', 'War']
  },
  {
    title: 'Gagarin',
    url: '/movies/Gagarin/cover.jpg',
    description : '',
    date: 0,
    cast: [],
    tags: [],
    genres: []
  },
  {
    title: 'Good Bye Lenin',
    url: '/movies/Good Bye Lenin/cover.jpg',
    description : 'Ο Οκτώβριος του 1989 ήταν μια κακή εποχή για να πέσεις σε κώμα, αν ζούσες στην Ανατολική \
    Γερμανία κι ήταν αυτό ακριβώς που συνέβη στην περήφανη κομμουνίστρια μητέρα του Αλεξ. Ο Αλεξ α\
    ντιμετωπίζει ένα σοβαρό πρόβλημα, όταν εκείνη οκτώ μήνες αργότερα ξαφνικά συνέρχεται. Η καρδιά της είναι \
    τόσο αδύναμη, ώστε οποιοδήποτε σοκ μπορεί να τη σκοτώσει. Και τι θα μπορούσε να τη σοκάρει περισσότερο από \
    την ανατροπή του σοσιαλισμού και την παλινόρθωση του καπιταλισμού στην αγαπημένη της Ανατολική Γερμανία; \
    Προκειμένου να σώσει τη μητέρα του, ο Αλεξ, μεταμορφώνει το διαμέρισμα της οικογένειας σε μια νησίδα του \
    παρελθόντος, κάτι σαν ένα μουσείο του σοσιαλισμού, όπου η μητέρα του προστατευμένη εξαπατάται. Πιστεύοντας\
    ότι τίποτα δεν έχει αλλάξει. Αυτό ξεκινά σαν ένα μικρό ψέμα για να σώσει μια ζωή πείθοντας ότι τελικά ο Λένιν\
    υπήρξε νικητής.Η ταινία έχει κάνει πάταγο σ\' όλα τα φεστιβάλ και έχει κερδίσει την αγάπη του κοινού από την\
    πρώτη ματιά. Είναι πολιτική σάτιρα, αλλά δεν έχει να κάνει με μια αμιγώς πολιτική ταινία. Αφήνει τη γεύση μιας\
    πικρής κωμωδίας και ταυτόχρονα φέρνει σε αντιπαράθεση την παλιότερη γενιά με τους νέους - Ευρωπαίους... \
    Δεν παίρνει πολιτική θέση γύρω από την πτώση του τείχους, απλά παραθέτει γεγονότα χωρίς να ξεχνά να γίνεται \
    καυστική εκεί που πρέπει... Για την ταινία, το πότε ήταν καλύτερα δεν έχει σημασία, ο χρόνος κυλά και οι ζωές \
    αλλάζουν. Και μπροστά στον θεατή μπαίνουν διάφορα ερωτήματα: Το παρελθόν χτίζει το μέλλον; Και τι πρέπει να αλλάξει τώρα;\
Ταινία που δεν πρέπει να χάσετε με τίποτα.',
    date: 2003,
    cast: ['Daniel Brühl', 'Katrin Saß', 'Chulpan Khamatova'],
    tags: ['coma', 'east germany'],
    genres: ['Comedy', 'Drama', 'Romance']
  },
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
