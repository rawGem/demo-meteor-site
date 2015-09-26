Template.admin.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    instance.subscribe('allsections');
    instance.subscribe('allmessages');
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
  /* 
  /  admin_section wants to subscribe to 
  /  messages by heading_id
  //
  /
  /  want `heading_id` from `adminSections` helper
  /  `sections`
  /*
  /*messages: function() {
      if (!Meteor.user()) { //add admin check
        return null;
      }
      return Messages.find();
  }*/
});


Template.adminSection.helpers({
  messages : 
    function() {
        data = Template.currentData();
        //messages = Messages.find({heading_id : data.heading_id}).fetch()
        messages = Messages.find({ heading_id : data.heading_id })
        return messages
    }
})


Template.admin.events({
  'click a': function(e,t) {
    e.preventDefault();
    FlowRouter.go(FlowRouter._previous);
  }
})
