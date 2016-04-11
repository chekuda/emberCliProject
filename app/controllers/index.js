import Ember from 'ember';

export default Ember.Controller.extend({

	/*actions:{
		toggleBody(){
			this.toggleProperty('isExpanded');

		}
	},*/

	emailAddress:'',
	responseMessage: '',


	actualEmailAddress: Ember.computed('emailAddress',function(){
		console.log('actualEmailAddress function called: ', this.get('emailAddress'));
	}),

  	emailAddressChanged: Ember.observer('emailAddress', function() { 
    //console.log('observer is called', this.get('emailAddress')); 
  	}),


  	isValid: Ember.computed.match('emailAddress',/^.+@.+\..+$/),
  	isDisabled: Ember.computed.not('isValid'),

  	actions:{
  		saveInvitation(){
  			const email = this.get('emailAddress');
  			//I use the newInvitation for store the email into the database calling the model invitation
  			const newInvitation = this.store.createRecord('invitation', {email: email});
  			//I save the variable and catch it with .then() function to have a gap for the errors
  			newInvitation.save().then((response)=>{
  				this.set('responseMessage','Your email address '+ this.get('emailAddress') +' has been saved');
  				this.set('emailAddress','');
  			})

  			//alert('Saving email address:  ' + this.get('emailAddress'));
  			
  		}
  	}

});
