
Meteor.publish('sections', function( sectionName ) {
  return Sections.find( { subject : sectionName } );
});

Meteor.publish('allsections', function() {
  // check for admin here? 
  return Sections.find();
})

Meteor.publish('allcontent', function() {
  return Content.find();
})
