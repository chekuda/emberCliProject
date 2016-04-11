import DS from 'ember-data';

export default DS.Model.extend({
  sector: DS.attr('string'),
  vpreative: DS.attr('string'),
  vccreative: DS.attr('string')
});
