Session.setDefault("sectionSession", null);

Template.main.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    instance.subscribe('sections', SBJCTX.get());
  });
});

Template.main.helpers({
  sections: function() {
    return Sections.find();
  }
});
