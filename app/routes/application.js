import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';//insert the ember-simple-auth to handle all the session events
export default Ember.Route.extend(ApplicationRouteMixin,{
	
});
//All lines above
//@@ApplicationRouteMixin will create an aplication session and provide actions for authenticating and invalidating the session.