import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {meteor} from 'meteor/meteor';



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
        var password2Var = event.target.registerPassword2.value;
        var emailVar = event.target.registerEmail.value;
       
        if(passwordVar != password2Var){

        Bert.alert( 'Passwords didnt match.', 'danger', 'growl-top-right' );

        }
        else{
		    Accounts.createUser({
		    	username: usernameVar,
		        email: emailVar,
		        password: passwordVar
		    },function(err){
                 if(err){
                    Bert.alert(err, 'danger', 'growl-top-right' );
                 } 
                 else{
                    Bert.alert('Registration Successful','success','growl-top-right');
                 }             

            });
    	}
    },
});

Template.loginForm.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar);
        Accounts.onLoginFailure(function(){     
            Bert.alert( 'Login Forbidden.', 'danger', 'growl-top-right' );  			
        });
    },
  });


Accounts.onLogout(function(){
	FlowRouter.go("/");
});

