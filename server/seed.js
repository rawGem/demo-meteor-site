
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
            heading_id  : "school1",
            text_region : "i lernt da codez",
            upvotes     : 5,
            downvotes   : 1
          },
          {
            heading     : "School 2",
            heading_id  : "school2",
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
            heading     : "CS 101",
            heading_id  : "cs101",
            text_region : "i lernt da codez",
            upvotes     : 0,
            downvotes   : 0
          },
          {
            heading     : "CS 102",
            heading_id  : "cs102",
            text_region : "lernt moar cdez",
            upvotes     : 0,
            downvotes   : 0
          }
        ]
      });
  }
  if (Meteor.users.find({username : "sjb"}).count() === 0) {
    var options = { 
                    email : "me@here.now",
                    username : "sjb",
                    password : "apple8",
                    profile : { admin : true }
                  }

    Accounts.createUser(options)
    console.log("created admin user")
  }
});
