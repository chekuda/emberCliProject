import Ember from 'ember';
export default Ember.Controller.extend({
	session: Ember.inject.service('session'),//this inject the session server into the controller

	actions:{
		logout(){//insert the logout action
			this.get('session').invalidate();
		}
	}
})