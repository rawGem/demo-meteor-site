
Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert( 
      {
        subject: "education",
        subsections : [
          {
            heading     : "School 1",
            text_region : "i lernt da codez",
            upvotes     : 5,
            downvotes   : 1
          },
          {
            heading     : "School 2",
            text_region : "lernt moar cdez",
            upvotes     : 10,
            downvotes   : 0
          }
        ]
      });

    Sections.insert(
      {
        subject     : "coursework",
        subsections : [
          {
            heading     : "cs101",
            text_region : "i lernt da codez",
            upvotes     : 0,
            downvotes   : 0
          },
          {
            heading     : "cs102",
            text_region : "lernt moar cdez",
            upvotes     : 0,
            downvotes   : 0
          }
        ]
      });
  }
});
