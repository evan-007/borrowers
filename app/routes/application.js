import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(){
      console.log('bubbled to application, save');

      return true;
    },

    cancel: function(){
      console.log('bubbled to application, cancel');

      return true;
    }
  }
});
