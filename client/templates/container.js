/* container helpers */
SBJCTX = new ReactiveVar();

Template.side.onRendered( function() {
  $(".button-collapse").sideNav({
    closeOnClick : true
  });
});

Template.side.events({
  'click a': function(e,t) {
    e.preventDefault();
    SBJCTX.set(e.target.innerText.toLowerCase());
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


//Template.main.helpers({
//  sections: function() {
//    return Sections.find();
//  }
//});
