import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showLoading: function () {
      this.set('isLoading', true);
    },

    hideLoading: function () {
      this.set('isLoading', false);
    }
  }
});
