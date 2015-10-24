
Meteor.publish('sections', function( sectionName ) {
  return Sections.find( { subject : sectionName } );
});


Meteor.publish('allsections', function() {
  return Sections.find();
})


Meteor.publish('allcontent', function() {
  return Content.find();
});


Meteor.publish('allmessages', function() {
  return Messages.find();
})


Meteor.publish('messages_by_heading', function(heading_id) {
  return Messages.find({heading_id : heading_id});
})



Meteor.publish('privileges', function(user_id) {
  return Privileges.find({ user_id : user_id })
})
