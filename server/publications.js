
Meteor.publish('sections', function( sectionName ) {
  return Sections.find();
});
