import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.loginForm.events({
	'click .si-plus': function() {
		FlowRouter.go('/register');
	}
});
