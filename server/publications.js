
Meteor.publish('sections', function( sectionName ) {
  return Sections.find( { subject : sectionName } );
});
