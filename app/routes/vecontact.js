import Ember from 'ember';

export default Ember.Route.extend({

	model(){
		//findAll from models
		return this.store.findAll('contactus');
	}
});
