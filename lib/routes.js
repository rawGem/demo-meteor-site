

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

FlowRouter.route('/admin/:secret', {
  action: function(params) {
    if (Meteor.userId()) {

        BlazeLayout.render("admin")

      /*if (  FlowRouter.current().path == "/admin/adminsecretkey" &&
          !!FlowRouter.current().oldRoute) {
          if (FlowRouter.current().oldRoute.name == "signIn"){
            BlazeLayout.reset();
          } else if (params.secret == "adminsecretkey") {
            BlazeLayout.render("admin")
          }
      } else if (params.secret == "adminsecretkey") { 
        BlazeLayout.render("admin")
      }*/


    }  else {
      FlowRouter.go("/sign-in");
    }
  }
});
 
