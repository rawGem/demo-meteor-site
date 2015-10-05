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
    var sections =  Sections.find().map(function(item, index) {
      _.each(item.subsections, function(subsection, sindex) {
        subsection.sindex = sindex
      })
      return item
    })
    return sections
  }
});
