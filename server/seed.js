
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
        subject     : "about",
        subsections : [
          {
            heading     : "About",
            heading_id  : "about",
            text_region : "about his site",
            modifiable  : false
          },
          {
            heading     : "Packages",
            heading_id  : "pkgs",
            text_region : "about his site",
            modifiable  : true
          },
          {
            heading     : "Features",
            heading_id  : "ftrs",
            text_region : "about his site",
            modifiable  : true
          }
        ]
    })

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
            heading_id  : "cs169_1x",
            text_region : "Agile, TDD, BDD, REST",
            upvotes     : 0,
            downvotes   : 0
          },
          {
            heading     : "cs169.2x, SaaS",
            heading_id  : "cs169_2x",
            text_region : "Legacy Code, Design Patterns, Version Control",
            upvotes     : 0,
            downvotes   : 0
          }
        ]
      });
 
      var text_regions = 
      [{
        heading_id   : "cs188x",
        topic        : "Topics",
        text         : "BFS, DFS, A*, MDPs"
      },
      {
        heading_id   : "cs188x",
        topic        : "Tools",
        text         : "python, AI 3rd ed., CLRS"
      },
      {
        heading_id   : "cs169_1x",
        topic        : "Topics",
        text         : "Agile, TDD, BDD, REST"
      },
      {
        heading_id   : "cs169_1x",
        topic        : "Tools",
        text         : "rails, cucumber"
      },
      {
        heading_id   : "cs169_2x",
        topic        : "Topics",
        text         : "legacy code, version control, design patterns"
      },
      {
        heading_id   : "cs169_2x",
        topic        : "Tools",
        text         : "rails, git"
      },
      {
        heading_id   : "school1",
        topic        : "Major",
        text         : "Biomedical Engineering"
      },
      {
        heading_id   : "school1",
        topic        : "Minor",
        text         : "Organic Chemistry"
      },
      {
        heading_id   : "about",
        topic        : "stuff",
        text         : "put stuff here"
      },
      {
        heading_id   : "pkgs",
        topic        : "Packages",
        text         : "this is where you add packages"
      },
      {
        heading_id   : "ftrs",
        topic        : "Features",
        text         : "this is where you add features"
      }]

      _.each(text_regions, function(doc, index, arr) {
        Content.insert(doc)
      })
    
  }
  if (Meteor.users.find({username : "admin"}).count() === 0) {
    var options = { 
                    email : "admin@this.domain",
                    username : "admin",
                    password : "apple8"
                    //profile : { admin : true }
                  }

    Accounts.createUser(options)
    console.log("created admin user")
  }
});
