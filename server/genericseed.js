Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert( 
      {
        subject: "section1",
        subsections : [
          {
            heading     : "Heading 1",
            heading_id  : "sect1",
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
            modifiable  : false
          },
          {
            heading     : "Packages",
            heading_id  : "pkgs",
            modifiable  : true
          },
          {
            heading     : "Features",
            heading_id  : "ftrs",
            modifiable  : true
          }
        ]
    })

    Sections.insert(
      {
        subject     : "section2",
        subsections : [
          {
            heading     : "Heading 1",
            heading_id  : "s2h1",
            upvotes     : 3,
            downvotes   : 0
          },
          {
            heading     : "Heading 2",
            heading_id  : "s2h2",
            upvotes     : 1,
            downvotes   : 0
          },
          {
            heading     : "Heading 3",
            heading_id  : "s2h3",
            upvotes     : 1,
            downvotes   : 0
          },
          {
            heading     : "Heading 4",
            heading_id  : "s2h4",
            upvotes     : 2,
            downvotes   : 0
          },
          {
            heading     : "Heading 5",
            heading_id  : "s2h5",
            upvotes     : 2,
            downvotes   : 0
          },
          {
            heading     : "Heading 6",
            heading_id  : "s2h6",
            upvotes     : 1,
            downvotes   : 0
          }

        ]
      });
 
      var text_regions = 
      [{
        heading_id   : "s2h1",
        topic        : "Topics",
        text         : "BFS, DFS, A-Star, Adversarial Search, Markov Decision Processes, Constraint Satisfaction Problems, Reinforcement Learning"
      },
      {
        heading_id   : "s2h1",
        topic        : "Tools",
        text         : "Python"
      },
      {
        heading_id   : "s2h1",
        topic        : "Resources",
        text         : "Artificial Intelligence: A Modern Approach, Russell and Norvig; Introduction to Algorithms, Cormen, Leiserson, Rivet, and Stein"
      },
      {
        heading_id   : "s2h2",
        topic        : "Topics",
        text         : "Agile, TDD, BDD, REST"
      },
      {
        heading_id   : "s2h2",
        topic        : "Tools",
        text         : "Ubuntu, Ruby on Rails, Cucumber, RSpec"
      },
      {
        heading_id   : "s2h2",
        topic        : "Resources",
        text         : "Engineering Long-Lasting Software, Fox and Patterson"
      },
      {
        heading_id   : "s2h3",
        topic        : "Topics",
        text         : "Legacy Code, Version Control, Design Patterns"
      },
      {
        heading_id   : "s2h3",
        topic        : "Tools",
        text         : "Ruby on Rails, Git"
      },
      {
        heading_id   : "s2h3",
        topic        : "Resources",
        text         : "Engineering Long-Lasting Software, Fox and Patterson"
      },
      {
        heading_id   : "s2h4",
        topic        : "Tools",
        text         : "Python, PyMongo, BeautifulSoup, OpenStreetMap"
      },
      {
        heading_id   : "s2h4",
        topic        : "Topics",
        text         : "Data Extraction/Web Scraping, Data Parsing/Cleaning, Data Validation, Field/Projection Queries, Aggregation Pipeline"
      },
      {
        heading_id   : "s2h5",
        topic        : "Topics",
        text         : "Supervised Learning, Unsupervised Learning, Regressions, Feature Selection, Testing/Validation"
      },
      {
        heading_id   : "s2h5",
        topic        : "Tools",
        text         : "Python, Scikit-Learn"
      },
      {
        heading_id   : "s2h6",
        topic        : "Topics",
        text         : "Data Collection/Integration, Data Storage, Data Analytics"
      },
      {
        heading_id   : "sect1",
        topic        : "Subsection 1",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        heading_id   : "sect1",
        topic        : "Subsection 2",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        heading_id   : "pkgs",
        topic        : "Packages",
        text         : "blaze",
        permanent    : true
      },
      {
        heading_id   : "pkgs",
        topic        : "Packages",
        text         : "useraccounts:materialize",
        permanent    : true
      },
      {
        heading_id   : "pkgs",
        topic        : "Packages",
        text         : "kadira:flow-router",
        permanent    : true
      },
      {
        heading_id   : "pkgs",
        topic        : "Packages",
        text         : "kadira:blaze-layout",
        permanent    : true
      },
      {
        heading_id   : "pkgs",
        topic        : "Packages",
        text         : "fourseven:scss",
        permanent    : true
      },
      {
        heading_id   : "ftrs",
        topic        : "Features",
        text         : "Optimistic UI",
        permanent    : true
      },
      {
        heading_id   : "ftrs",
        topic        : "Features",
        text         : "Dynamic UI",
        permanent    : true
      },
      {
        heading_id   : "ftrs",
        topic        : "Features",
        text         : "Distributed Data Protocol",
        permanent    : true
      }
      ]

      _.each(text_regions, function(doc, index, arr) {
        Content.insert(doc)
      })
    
  }
  if (Meteor.users.find({username : "admin"}).count() === 0) {
    var options = { 
                    email : "admin@this.domain",
                    username : "admin",
                    password : "admin123"
                  }

    Accounts.createUser(options)
    console.log("created admin user")
  }
});
