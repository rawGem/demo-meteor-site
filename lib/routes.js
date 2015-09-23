
console.log("configuring routes")

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
    BlazeLayout.render('master', {
      nav: "side",
      content: "sections",
      footer: "footer"
    })
  }
});

FlowRouter.route('/section/:name', {
  action: function(params) {
    if (params.name === "overview") {
      console.log(params.name);
      BlazeLayout.render('overview')
    } else if (params.name === "about") { 
      BlazeLayout.render('master', 
        {
          nav : "side",
          content : "about",
          footer : "footer"
        })
    } else {
      BlazeLayout.render('master', 
        {
          nav : "side",
          content : "sections",
          footer : "footer"
        })
    }
  }
})

FlowRouter.route('/admin', {
  action: function(params) {
    if (Meteor.userId()) {
      BlazeLayout.render('admin');
      BlazeLayout.reset();
    } else {
      FlowRouter.go("/sign-in")
    }
  }
});
 
