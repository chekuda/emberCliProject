import Ember from 'ember';

export default Ember.Controller.extend({

	isSectorSelected: false,
	shouldBeDisplayed: false,
	realTimeImage: '',

	actions:{
		changeBody(){
			 this.set('isSectorSelected',true);
		},
		testing(newValue){
			this.set('shouldBeDisplayed', true);
			this.set('realTimeImage',newValue);

		}
	}
});
