
Template.sections.onRendered( function() {
  var instance = this;

  Meteor.setTimeout(
    function() {
      $(".space").css("height", "200");
    }, 50)

  this.autorun(function() {
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
  },

  spacerHeight: function() {
    return "600px"
  }

});



