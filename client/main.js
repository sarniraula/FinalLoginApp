import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
 });

Template.loginForm.events({
	'click .si-plus': function() {
		FlowRouter.go('/register');
	}
});

Template.registerForm.events({
	'click .si-login': function() {
		FlowRouter.go('/');
	},

    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;
        var emailVar = event.target.registerEmail.value;
        Accounts.createUser({
        	username: usernameVar,
            email: emailVar,
            password: passwordVar
        });
    },
});

Template.loginForm.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar);
    }
  });

Accounts.validateNewUser((user) => {
  if (user.username && user.username.length >= 3) {
    return true;
  } else {
    throw new Meteor.Error(403, 'Username must have at least 3 characters');
  }
});