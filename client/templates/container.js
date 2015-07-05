/* container helpers */
SBJCTX = new ReactiveVar();

Template.side.onRendered( function() {
  $(".button-collapse").sideNav(
    {closeOnClick: true}
  );
});

Template.card.helpers({
  testHeading: function() {
    return "Test Heading";
  }
});

Template.side.events({
  'click a': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/'+e.target.innerText.toLowerCase());
    //SBJCTX.set(e.target.innerText);
  }
})


//Template.main.helpers({
//  sections: function() {
//    return Sections.find();
//  }
//});
