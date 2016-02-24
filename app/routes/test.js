import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			name:"Jose",
			surname: "Checa"
		},{
			name:"Matt",
			surname: "Deliry"
		}
		]
	}
});
