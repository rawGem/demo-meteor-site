Template.main.onCreated( function() {
  this.subscribe('sections', 'Coursework');
});

Template.main.helpers({
  sections: function() {
    return Sections.find();
  }
});
