FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('mainLayout', {main: 'loginForm'});
	}
});

FlowRouter.route('/register', {
	name: 'register',
	action() {
		BlazeLayout.render('mainLayout', {main: 'registerForm'});
	}
});

