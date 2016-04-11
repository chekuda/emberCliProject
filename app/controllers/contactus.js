import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	textArea:'',
	responseMessage:'',

	emailAddresRight: Ember.computed.match('emailAddress',/^.+@.+\..+$/),
	textEmpty: Ember.computed.empty('textArea'),

	//For two valid properties I can use Ember.computed.and('propertyOne','propertyTwo')
	isDisabled: Ember.computed('emailAddresRight','textEmpty',function(){
		if(this.get('emailAddresRight') === true && this.get('textEmpty') === false)
		{
			return false;
		}
		else
		{
			return true;
		}
	}),

	actions:{
		sendContactMessage(){
			const email = this.get('emailAddress');
			const text = this.get('textArea');

			const sendMessage = this.store.createRecord('contactus', {email:email , message:text});
			sendMessage.save().then((response)=>{
				this.set('responseMessage','Your message has been sent!!');
				this.set('emailAddress','');
				this.set('textArea','');
			})


		}
	}
});
