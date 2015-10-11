
Meteor.publish('sections', function( sectionName ) {
  return Sections.find( { subject : sectionName } );
});




Meteor.publish('allsections', function() {
  // check for admin here? 
  return Sections.find();
})

Meteor.publish('allcontent', function() {
  return Content.find();
});



Meteor.publish('allmessages', function() {
  // check for admin here? 
  return Messages.find();
})



Meteor.publish('messages_by_heading', function(heading_id) {
  // check for admin here? 
  return Messages.find({heading_id : heading_id});
})



Meteor.publish('privileges', function(user_id) {
  return Privileges.find({ user_id : user_id })
})
