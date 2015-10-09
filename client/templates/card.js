

Template.sections.onRendered( function() {
  var instance = this;
  this.autorun(function() {
    //instance.subscribe('sections', SBJCTX.get());
    instance.subscribe('sections', FlowRouter.getParam("name"));
  });
});


Template.cardContent.onRendered( function() {
  var instance = this;
  if (Meteor.userId()) {
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must 
      // specify the modal ID that wants to be triggered
      Sections.find().forEach(function(item, index, cursor) {
          _.each(item.subsections, function(subsec, sbindex) {
            var identifier = '#'+subsec.heading_id+'-'+sbindex;
            console.log("modal id ", identifier);
            $(identifier).leanModal();
          });
      });
    }); 
  }
  instance.autorun(function() {
    instance.subscribe('allcontent');
  });
});



Template.cardContent.events({


  'click i.fa.fa-thumbs-o-down' : function(e,t) {
    e.preventDefault();
    if (Meteor.userId()) {
        Meteor.call('downvoteWithHeadingField', 
                [Template.parentData()._id, t.data.heading])
    }
  },

});


Template.messageForm.events({

  'click .btn-flat' : function(e,t) {
    var text = t.$("section.content")
    console.log("text ", text);
    console.log("tpl ", t);
    Messages.insert( {
                       author_id      : Meteor.userId(),  
                       heading_id  : t.data.heading_id,
                       date        : new Date(),
                       text        : text.prevObject["0"].innerText
                      })
    text.prevObject["0"].innerText = "Edit me."
  }

})


Template.thumbsUp.events({

  'click': function(e,t) {    
      e.preventDefault();
      if (Meteor.userId()) {
          var section_id = t.parent(3).data.section_id,
              heading_id = Template.parentData().heading_id;
          Meteor.call('upvoteWithHeadingField', [section_id, heading_id ])
                      
      }
  }

})



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
     console.log("id for topics helper ", id)
     console.log("cursor: ", Content.find({heading_id: id}).fetch())
     return Content.find({heading_id: id})
  }

 
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



