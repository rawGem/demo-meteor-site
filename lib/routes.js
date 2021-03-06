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
      BlazeLayout.render('resume')
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
  },
  
  triggersEnter: [checkAdmin] 
  
});



/* Triggers */
FlowRouter.triggers.enter([getPrevRoute, scrollToTopOnNewRoute, setMainSectionHeight])
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

function setMainSectionHeight() {
  var height = $(window).height()+20
  $("main").css("min-height", height)  
}

function checkAdmin(context) {

   var privs = Privileges.find().fetch();


   if ( Privileges.find().count() === 0 )
      FlowRouter.go("/section/about")

   if (Meteor.userId()) {
      var q = { user_id : Meteor.userId() };
      var currentUserPrivileges = Privileges.findOne(q);
      if (currentUserPrivileges) {
         if (!_.contains(currentUserPrivileges.privileges, "admin") )
            FlowRouter.go("/section/about")
       }
   }

}
 
