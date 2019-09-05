import Component from '@ember/component';

export default Component.extend({
  classNames: ['feedback'],
  classNameBindings: ['loaded'],
  loaded: false,

  didInsertElement() {
    this._super(...arguments);
    setTimeout(() => {
      this.set('loaded', true);
    }, 300 * this.feedback.rank)
  },
});
