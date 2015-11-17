Template.side.onRendered( function() {

  var instance = this;

  $(".button-collapse").sideNav({
    closeOnClick : true
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 10});
  });

  instance.autorun(function() {
      if (Meteor.userId()) {
        instance.subscribe("privileges", Meteor.userId())
      }
  });
});


Template.side.events({
  'click li#edu-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/section1');
  },
  'click li#ov-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/overview');
  },
  'click li#crswrk-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/section2');
  },
  'click li#ab-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/about');
  },
  'click li#edu-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/section1');
  },
  'click li#crswrk-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/section2');
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
    var active = FlowRouter.getParam("name") === "section1" ? "active" : "";
    return active
  }
});

Template.courseworkTopNavLink.helpers({
  active: function() {
    var active = FlowRouter.getParam("name") === "section2" ? "active" : "";
    return active
  }
});

Template.overviewTopNavLink.helpers({
  active: function() {
    var active = FlowRouter.getParam("name") === "overview" ? "active" : "";
    return active
  }
});

Template.aboutTopNavLink.helpers({
  active: function() {
    var active = FlowRouter.getParam("name") === "about" ? "active" : "";
    return active
  }
});

