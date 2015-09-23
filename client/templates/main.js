Session.setDefault("sectionSession", null);
BlazeLayout.setRoot('body');

Template.sections.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    //instance.subscribe('sections', SBJCTX.get());
    instance.subscribe('sections', FlowRouter.getParam("name"));
  });
});

Template.sections.helpers({
  sections: function() {
    return Sections.find();
  }
});
