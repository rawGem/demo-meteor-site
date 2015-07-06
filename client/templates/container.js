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
    console.log("** thumbs up **");
    console.log("id: ", this._id);
    console.log("this: ", this);
    console.log("***************");
    console.log("parent data id: ", Template.parentData()._id);
    console.log("instance data: ", t.data);
    Sections.update({
                      _id : Template.parentData()._id, 
                      "subsections.heading" : t.data.heading
                    },
                      { $inc : {"subsections.$.upvotes" : 1 }}
                   );
  },
  'click': function(e,t) {
    console.log("outer this? " , this)
  }
  
});


//Template.main.helpers({
//  sections: function() {
//    return Sections.find();
//  }
//});
