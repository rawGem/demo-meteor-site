Template.admin.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    instance.subscribe('allsections');
  })
});

Template.admin.helpers({
  admin: function() {
    if (Meteor.userId()) {
      return Meteor.user().profile.admin
    } else FlowRouter.go("/sign-in");
  }
});

Template.adminSections.helpers({
  sections: function() {
      if (!Meteor.user()) { //add admin check
        return null;
      }
      return Sections.find();
    }
});

Template.admin.events({
  'click a': function(e,t) {
    e.preventDefault();
    FlowRouter.go(FlowRouter._previous);
  }
})
