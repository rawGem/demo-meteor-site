AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('verifyEmail');

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
    }  else {
      FlowRouter.go("/sign-in");
    }
  }
});



/* Triggers */
FlowRouter.triggers.enter([getPrevRoute, scrollToTopOnNewRoute])
FlowRouter.triggers.exit([setPrevRoute])



/* Trigger Functions */
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
 
