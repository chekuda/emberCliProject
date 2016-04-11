import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('test');
  this.route('login');
  this.route('protected');
  this.route('vecontact');
  this.route('veprompt');
  this.route('contactus');
  this.route('token');
  this.route('basket');
});

export default Router;
