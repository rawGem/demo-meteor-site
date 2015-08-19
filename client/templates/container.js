/* container helpers */
SBJCTX = new ReactiveVar();


Template.side.onRendered( function() {
  $(".button-collapse").sideNav({
    closeOnClick : true
  });
});

Template.side.events({
  'click li#edu-li': function(e,t) {
    e.preventDefault();
    //FlowRouter.go('/section/'+e.target.innerText.toLowerCase().trim());
    FlowRouter.go('/section/education');
  },
  "click li#crswrk-li": function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  }
})

Template.card.events({
  'click i.fa.fa-thumbs-o-up' : function(e,t) {
    e.preventDefault();
    Meteor.call('upvoteWithHeadingField', [Template.parentData()._id, t.data.heading])
  },
  'click': function(e,t) {
  },
  'click i.fa.fa-thumbs-o-down' : function(e,t) {
    e.preventDefault();
    Meteor.call('downvoteWithHeadingField', [Template.parentData()._id, t.data.heading])
  },
  'click': function(e,t) {
  }
});

Template.card.onRendered( function() {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  }); 
} )


//Template.main.helpers({
//  sections: function() {
//    return Sections.find();
//  }
//});
