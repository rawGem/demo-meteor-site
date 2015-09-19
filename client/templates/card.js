Template.cardContent.events({
  'click i.fa.fa-thumbs-o-up' : function(e,t) {
    e.preventDefault();
    Meteor.call('upvoteWithHeadingField', [Template.parentData()._id, t.data.heading])
  },
  'click i.fa.fa-thumbs-o-down' : function(e,t) {
    e.preventDefault();
    Meteor.call('downvoteWithHeadingField', [Template.parentData()._id, t.data.heading])
  }
});

Template.cardContent.onRendered( function() {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  }); 
} )
