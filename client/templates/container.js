/* container helpers */

Template.side.onRendered( function() {
  $(".button-collapse").sideNav();
});

Template.card.helpers({
  heading: function() {
    return "This Heading"
  }
})
