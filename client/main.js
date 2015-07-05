Template.main.onCreated( function() {
  this.subscribe('sections');
});

Template.main.helpers({
  sections: function() {
    return Sections.find();
  }
});
