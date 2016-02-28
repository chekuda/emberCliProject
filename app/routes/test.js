import Ember from 'ember';

import TestComponent from '../components/test';

let todosComponent = TestComponent.create();
todosComponent.get('remaining');
// 1

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
