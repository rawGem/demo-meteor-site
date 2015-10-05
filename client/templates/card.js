Template.cardContent.events({

  'click i.fa.fa-thumbs-o-up' : function(e,t) {
    e.preventDefault();
    if (Meteor.userId()) {
        Meteor.call('upvoteWithHeadingField', 
                [Template.parentData()._id, t.data.heading])
    }
  },

  'click i.fa.fa-thumbs-o-down' : function(e,t) {
    e.preventDefault();
    if (Meteor.userId()) {
        Meteor.call('downvoteWithHeadingField', 
                [Template.parentData()._id, t.data.heading])
    }
  },

  'click i.fa-paper-plane' : function(e,t) {
    var text = t.$("section.content")
    Messages.insert( {
                       author_id      : Meteor.userId(),  
                       heading_id  : t.data.heading_id,
                       date        : new Date(),
                       text        : text["0"].innerText
                      })
    text["0"].innerText = "Edit me."
  }
});

Template.cardContent.onRendered( function() {
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
})

Template.cardContent.helpers({
  visitor: function() {
  if (!Meteor.user()) return false;
  else {
    return true;
  }
 }
})
