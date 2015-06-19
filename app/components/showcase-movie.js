import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  _title: '',
  classNames: ['showcase-movie'],

  init: function () {
    this._super();
    var title = 'ct-' + this.get('title').replace(/ /g, '');
    this.set('_title', title)
    Ember.$("<style>")
        .prop("type", "text/css")
        .html("\
        ." + title + ":before {\
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('" +
          this.get('url') + "')\
        };")
        .appendTo("head");
  }
});
