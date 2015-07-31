Session.setDefault("sectionSession", null);

Template.sections.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    instance.subscribe('sections', SBJCTX.get());
  });
});

Template.sections.helpers({
  sections: function() {
    return Sections.find();
  }
});
