import DS from 'ember-data';

export default DS.Model.extend({
//I call it from the index.js controller to save the email into the model
  email: DS.attr('string')
});
