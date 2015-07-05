Session.setDefault("sectionSession", null);

Template.main.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    //instance.subscribe('sections', SBJCTX.get());
    instance.subscribe('sections', FlowRouter.getParam("name"));
  });
});

Template.main.helpers({
  sections: function() {
    return Sections.find();
  }
});
