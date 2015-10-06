
Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert( 
      {
        subject: "education",
        subsections : [
          {
            heading     : "Georgia Institute of Technology",
            heading_id  : "school1",
            text_region : "Major: Biomedical Engineering\n Minor: Organic Chemistry",
            upvotes     : 5,
            downvotes   : 1
          }
        ]
      });

    Sections.insert(
      {
        subject     : "coursework",
        subsections : [
          {
            heading     : "cs188.1x, Artificial Intelligence",
            heading_id  : "cs188x",
            text_region : "BFS, DFS, A*, MDPs",
            upvotes     : 0,
            downvotes   : 0
          },
          {
            heading     : "cs169.1x, SaaS",
            heading_id  : "cs169",
            text_region : "Agile, TDD, BDD, REST",
            upvotes     : 0,
            downvotes   : 0
          },
          {
            heading     : "cs169.2x, SaaS",
            heading_id  : "cs169",
            text_region : "Legacy Code, Design Patterns, Version Control",
            upvotes     : 0,
            downvotes   : 0
          }
        ]
      });
  }
  if (Meteor.users.find({username : "sjb"}).count() === 0) {
    var options = { 
                    email : "admin@this.domain",
                    username : "admin",
                    password : "apple8",
                    profile : { admin : true }
                  }

    Accounts.createUser(options)
    console.log("created admin user")
  }
});
