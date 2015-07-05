/* container helpers */
renderTemplate = new ReactiveVar('Education');

Template.side.onRendered( function() {
  $(".button-collapse").sideNav();
});

Template.card.helpers({
  testHeading: function() {
    return "Test Heading";
  }
});

Template.side.events({
  'click a': function(e,t) {
    console.log("t: ", t)
    console.log("text: ", e.target.innerText)
    renderTemplate.set(e.target.innerText);
  }
})


//Template.main.helpers({
//  sections: function() {
//    return Sections.find();
//  }
//});
