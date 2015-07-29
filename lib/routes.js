AccountsTemplates.configure({
    sendVerificationEmail: true,
    homeRoutePath: '/',
    redirectTimeout: 4000
//    defaultLayout: "masterLayout",
//    defaultLayoutRegions: {
//        nav: "nav",
//        footer: "footer"
//    },
//    defaultContentRegion: "area"
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('resetPwd');

AccountsTemplates.configureRoute('verifyEmail');

// Route refs
/*FlowRouter.route('/', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'home'
        });
    }
});
FlowRouter.route('/private', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'private'
        });
    },
    triggers: [AccountsTemplates.ensureSignedIn]
});*/

FlowRouter.route('/', {
  action: function(params) {
    console.log("params: "+params)
    FlowLayout.render('main')
  }
});

