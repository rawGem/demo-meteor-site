Template.sections.onRendered( function() {
  var instance = this;
  $(".layout-spacer").remove();


  this.autorun(function() {
     instance.subscribe('sections', FlowRouter.getParam("name")) ;
     instance.subscribe('allcontent');
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



