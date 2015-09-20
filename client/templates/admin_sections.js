Template.adminSections.onRendered( function() {
  var instance = this;
  instance.autorun(function() {
    instance.subscribe('sections');
  })
});

Template.adminSections.helpers({
  sections: function() {
        if (!Meteor.user()) { //add admin check
            return null
        }
        return Sections.find()
    }
});
