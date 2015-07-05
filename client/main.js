Session.setDefault("sectionSession", null);

Template.main.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    console.log("autorun running...")
    instance.subscribe('sections', renderTemplate.get());
  });
});

Template.main.helpers({
  sections: function() {
    return Sections.find();
  }
});
