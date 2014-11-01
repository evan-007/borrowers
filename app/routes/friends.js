import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save:  function() {
      console.log('+--- save bubbled up to friends route');

      return false;
    },
    cancel: function(){
      console.log('+--- cancel bubbled up to friends route');

      return false;
    }
  }

});
