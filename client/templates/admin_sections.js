
Template.admin.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    instance.subscribe('allsections');
    instance.subscribe('allmessages');
    instance.subscribe('privileges', Meteor.userId());
  })
});



Template.admin.helpers({
  admin: function() {
    if (Meteor.userId()) {
      var q = { user_id : Meteor.userId() };
      var currentUserPrivileges = Privileges.findOne(q);
      if (currentUserPrivileges) 
        return _.contains(currentUserPrivileges.privileges, "admin") 
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



Template.adminSection.helpers({
  messages : 
    function() {
        data = Template.currentData();
        messages = Messages.find({ heading_id : data.heading_id }).map(
        function(item, index) {
        if (item) {
            item.date = item.date.toTimeString().split(" ").slice(0,1).pop();
            item.author_id = item.author_id.slice(0,5);
            return item
           }
        })
        return messages
    }
})



Template.admin.events({
  'click a': function(e,t) {
    e.preventDefault();
    FlowRouter.go(FlowRouter._previous);
  }
})
