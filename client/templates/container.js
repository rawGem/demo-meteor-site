/* container helpers */

Template.side.onRendered( function() {
  $(".button-collapse").sideNav();
});

Template.card.helpers({
  testHeading: function() {
    return "Test Heading";
  }
});

Template.main.helpers({
  sections: function() {
    return Sections.find();
  }
});
