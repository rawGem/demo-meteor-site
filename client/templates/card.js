Template.cardContent.events({


  'click i.fa.fa-thumbs-o-down' : function(e,t) {
    e.preventDefault();
    if (Meteor.userId()) {
        Meteor.call('downvoteWithHeadingField', 
                [Template.parentData()._id, t.data.heading])
    }
  },

});


Template.msgIcon.events({

  'click' : function(e,t) {
    var text = t.$("section.content")
    console.log("text ", text);
    console.log("tpl ", t);
    Messages.insert( {
                       author_id      : Meteor.userId(),  
                       heading_id  : t.data.heading_id,
                       date        : new Date(),
                       text        : text["0"].innerText
                      })
    text["0"].innerText = "Edit me."
  }

})


Template.thumbsUp.events({

  'click': function(e,t) {    
    e.preventDefault();
    if (Meteor.userId()) {
        Meteor.call('upvoteWithHeadingField', 
                    [Template.parentData()._id, t.data.heading])
    }
  }

})

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
    instance.subscribe('allcontent')
  })
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

 
})
