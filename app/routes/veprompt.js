import Ember from 'ember';

export default Ember.Route.extend({

	model()
		{
		return this.store.findAll('sectorImages');


		//return ['Adult','Sport','travel','Comercial','Finance','Electronic'];
		}
});

