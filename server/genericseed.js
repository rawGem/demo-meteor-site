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
        subject     : "coursework",
        subsections : [
          {
            heading     : "cs188.1x Artificial Intelligence, BerkeleyX",
            heading_id  : "cs188x",
            upvotes     : 3,
            downvotes   : 0
          },
          {
            heading     : "cs169.1x SaaS I, BerkeleyX",
            heading_id  : "cs169_1x",
            upvotes     : 1,
            downvotes   : 0
          },
          {
            heading     : "cs169.2x SaaS II, BerkeleyX",
            heading_id  : "cs169_2x",
            upvotes     : 1,
            downvotes   : 0
          },
          {
            heading     : "Data Wrangling With MongoDB, Udacity",
            heading_id  : "ud_mongo",
            upvotes     : 2,
            downvotes   : 0
          },
          {
            heading     : "Intro to Machine Learning, Udacity",
            heading_id  : "ud_ml",
            upvotes     : 2,
            downvotes   : 0
          },
          {
            heading     : "Tackling the Challenges of Big Data, MITx",
            heading_id  : "mitx",
            upvotes     : 1,
            downvotes   : 0
          }

        ]
      });
 
      var text_regions = 
      [{
        heading_id   : "cs188x",
        topic        : "Topics",
        text         : "BFS, DFS, A-Star, Adversarial Search, Markov Decision Processes, Constraint Satisfaction Problems, Reinforcement Learning"
      },
      {
        heading_id   : "cs188x",
        topic        : "Tools",
        text         : "Python"
      },
      {
        heading_id   : "cs188x",
        topic        : "Resources",
        text         : "Artificial Intelligence: A Modern Approach, Russell and Norvig; Introduction to Algorithms, Cormen, Leiserson, Rivet, and Stein"
      },
      {
        heading_id   : "cs169_1x",
        topic        : "Topics",
        text         : "Agile, TDD, BDD, REST"
      },
      {
        heading_id   : "cs169_1x",
        topic        : "Tools",
        text         : "Ubuntu, Ruby on Rails, Cucumber, RSpec"
      },
      {
        heading_id   : "cs169_1x",
        topic        : "Resources",
        text         : "Engineering Long-Lasting Software, Fox and Patterson"
      },
      {
        heading_id   : "cs169_2x",
        topic        : "Topics",
        text         : "Legacy Code, Version Control, Design Patterns"
      },
      {
        heading_id   : "cs169_2x",
        topic        : "Tools",
        text         : "Ruby on Rails, Git"
      },
      {
        heading_id   : "cs169_2x",
        topic        : "Resources",
        text         : "Engineering Long-Lasting Software, Fox and Patterson"
      },
      {
        heading_id   : "ud_mongo",
        topic        : "Tools",
        text         : "Python, PyMongo, BeautifulSoup, OpenStreetMap"
      },
      {
        heading_id   : "ud_mongo",
        topic        : "Topics",
        text         : "Data Extraction/Web Scraping, Data Parsing/Cleaning, Data Validation, Field/Projection Queries, Aggregation Pipeline"
      },
      {
        heading_id   : "ud_ml",
        topic        : "Topics",
        text         : "Supervised Learning, Unsupervised Learning, Regressions, Feature Selection, Testing/Validation"
      },
      {
        heading_id   : "ud_ml",
        topic        : "Tools",
        text         : "Python, Scikit-Learn"
      },
      {
        heading_id   : "mitx",
        topic        : "Topics",
        text         : "Data Collection/Integration, Data Storage, Data Analytics"
      },
      {
        heading_id   : "sect1",
        topic        : "Major",
        text         : "Biomedical Engineering"
      },
      {
        heading_id   : "sect1",
        topic        : "Minor",
        text         : "Organic Chemistry"
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
