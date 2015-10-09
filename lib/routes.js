

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
    FlowRouter.redirect("/section/about")
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


FlowRouter.triggers.enter([getPrevRoute, scrollToTopOnNewRoute])
FlowRouter.triggers.exit([setPrevRoute])


function getPrevRoute(context) {
  var about = "/section/about";
  FlowRouter._previous = FlowRouter._previous ? FlowRouter._previous : about; 
}

function setPrevRoute(context) {
  var about = "/section/about";
  FlowRouter._previous = FlowRouter.current() ? FlowRouter.current().path : about; 
}

function scrollToTopOnNewRoute() {
  if (Meteor.isClient) { 
    window.scroll(0,0);
  }
}
 
