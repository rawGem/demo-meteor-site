Template.admin.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    instance.subscribe('allsections');
  })
});

Template.adminSections.helpers({
  sections: function() {
      if (!Meteor.user()) { //add admin check
        return null;
      }
      return Sections.find();
    }
});
