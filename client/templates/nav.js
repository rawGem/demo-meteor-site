Template.side.onRendered( function() {
  $(".button-collapse").sideNav({
    closeOnClick : true
  });
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 10});
  });
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

Template.side.helpers({
  admin: function() {
    if (Meteor.user() && Meteor.userId()) {
      console.log("checking admin for nav")
      return Meteor.user().profile.admin 
    }
  }
})

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
    console.log("path: ", FlowRouter.current().path);
    var bool = FlowRouter.getParam("name") == "about" ? "true" : "false";
    return "active-"+bool
  }
});

