/* container helpers */
SBJCTX = new ReactiveVar();

Template.side.onRendered( function() {
  $(".button-collapse").sideNav({
    closeOnClick : true
  });
});

Template.card.helpers({
  testHeading: function() {
    return "Test Heading";
  }
});

Template.side.events({
  'click a': function(e,t) {
    e.preventDefault();
    SBJCTX.set(e.target.innerText.toLowerCase());
  }
})


//Template.main.helpers({
//  sections: function() {
//    return Sections.find();
//  }
//});
