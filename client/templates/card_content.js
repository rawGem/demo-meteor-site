
Template.cardContent.onRendered( function() {
  var instance = this;
  if (Meteor.userId()) {
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must 
      // specify the modal ID that wants to be triggered
      Sections.find().forEach(function(item, index, cursor) {
          _.each(item.subsections, function(subsec, sbindex) {
            var identifier = '#'+subsec.heading_id+'-'+sbindex;
            $(identifier).leanModal();
          });
      });
    }); 
  }
  instance.autorun(function() {
    instance.subscribe('allcontent');
  });
});




Template.cardContent.helpers({

  visitor: function() {
  if (!Meteor.user()) return false;
  else {
    return true;
  }
  },

  withUser: function() {
    return Meteor.user() ? "with-user" : ""; 
  },

  topics: function(id) {
     return Content.find({heading_id: id})
  },

  isAbout: function() {
    return FlowRouter.getParam("name") === "about" 
  }

 
});

