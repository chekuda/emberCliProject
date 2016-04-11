//File for define the authenticate action in login File
import Ember from 'ember';
export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions:{
		authenticate(){
			//fir we get the indentification and password values
			var credentials = this.get('identification','password'), 
				authenticator = 'simple-auth-authenticator:token';
			//this authenticate action involve the session services. We send the two variables
			 this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
				this.set("errorMessage",reason.error);
			});
		}
	}
});