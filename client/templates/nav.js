Template.side.onRendered( function() {

  var instance = this;

  $(".button-collapse").sideNav({
    closeOnClick : true
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 10});
  });

  if (Meteor.userId()) {
    this.subscribe("privileges", Meteor.userId())
  }
});


Template.side.events({
  'click li#edu-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/education');
  },
  'click li#ov-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/overview');
  },
  'click li#crswrk-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  },
  'click li#ab-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/about');
  },
  'click li#edu-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/education');
  },
  'click li#crswrk-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  },
  'click li#ov-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/overview');
  },
  'click li#ab-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/about');
  }
})



Template.adminTopNavLink.events({
  'click': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/admin/'+"adminsecretkey");
  }
})



Template.side.helpers({

  admin: function() {
    if (Meteor.user() && Meteor.userId()) {

        var q = { user_id : Meteor.userId() };
        var currentUserPrivileges = Privileges.findOne(q);

        if (!!currentUserPrivileges) 
          return _.contains(currentUserPrivileges.privileges, "admin") 
    }
  }

});



Template.educationTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "education" ? "true" : "false";
    return "active-"+bool
  }
});

Template.courseworkTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "coursework" ? "true" : "false";
    return "active-"+bool
  }
});

Template.overviewTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "overview" ? "true" : "false";
    return "active-"+bool
  }
});

Template.aboutTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "about" ? "true" : "false";
    return "active-"+bool
  }
});

