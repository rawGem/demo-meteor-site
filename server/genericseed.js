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
        topic        : "Intro",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est commodo, sodales dolor sed, consectetur mauris. Sed varius tempus tortor, sed fermentum ipsum consectetur sed.\nVestibulum a tincidunt urna. Donec gravida risus eget facilisis varius."
      },
      {
        heading_id   : "s2h1",
        topic        : "List",
        as_list      : true,
        text         : ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
      },
      {
        heading_id   : "s2h1",
        topic        : "Outro",
        text         : "Ut justo sem, viverra ut commodo vel, efficitur et neque. Praesent vestibulum magna elit, eget semper enim tempus nec. Aliquam luctus, ex sit amet pulvinar tincidunt, nisl est lacinia tortor, ut congue velit augue in felis. Nullam lorem mauris, gravida a dui quis, blandit aliquet lorem. Fusce quis nisi vitae nunc pellentesque suscipit. In et finibus mi, sed tempor nulla. Phasellus cursus felis fermentum felis dictum, sit amet mattis ligula porta. Fusce molestie lobortis urna. Nullam tristique dui sit amet libero ultrices, et ultricies ante maximus. Praesent auctor fringilla diam sit amet suscipit."
      },
      {
        heading_id   : "s2h2",
        topic        : "Intro",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est commodo, sodales dolor sed, consectetur mauris. Sed varius tempus tortor, sed fermentum ipsum consectetur sed.\nVestibulum a tincidunt urna. Donec gravida risus eget facilisis varius."
      },
      {
        heading_id   : "s2h2",
        topic        : "List",
        as_list      : true,
        text         : ["Thing 1", "Thing 2", "Thing 3"]
      },
      {
        heading_id   : "s2h2",
        topic        : "Outro",
        text         : "Ut justo sem, viverra ut commodo vel, efficitur et neque. Praesent vestibulum magna elit, eget semper enim tempus nec. Aliquam luctus, ex sit amet pulvinar tincidunt, nisl est lacinia tortor, ut congue velit augue in felis. Nullam lorem mauris, gravida a dui quis, blandit aliquet lorem. Fusce quis nisi vitae nunc pellentesque suscipit. In et finibus mi, sed tempor nulla. Phasellus cursus felis fermentum felis dictum, sit amet mattis ligula porta. Fusce molestie lobortis urna. Nullam tristique dui sit amet libero ultrices, et ultricies ante maximus. Praesent auctor fringilla diam sit amet suscipit."
      },
      {
        heading_id   : "s2h3",
        topic        : "Intro",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est commodo, sodales dolor sed, consectetur mauris. Sed varius tempus tortor, sed fermentum ipsum consectetur sed.\nVestibulum a tincidunt urna. Donec gravida risus eget facilisis varius."
      },
      {
        heading_id   : "s2h3",
        topic        : "List",
        as_list      : true,
        text         : ["Article 1", "Article 2"]
      },
      {
        heading_id   : "s2h3",
        topic        : "Outro",
        text         : "Ut justo sem, viverra ut commodo vel, efficitur et neque. Praesent vestibulum magna elit, eget semper enim tempus nec. Aliquam luctus, ex sit amet pulvinar tincidunt, nisl est lacinia tortor, ut congue velit augue in felis. Nullam lorem mauris, gravida a dui quis, blandit aliquet lorem. Fusce quis nisi vitae nunc pellentesque suscipit. In et finibus mi, sed tempor nulla. Phasellus cursus felis fermentum felis dictum, sit amet mattis ligula porta. Fusce molestie lobortis urna. Nullam tristique dui sit amet libero ultrices, et ultricies ante maximus. Praesent auctor fringilla diam sit amet suscipit."
      },
      {
        heading_id   : "s2h4",
        topic        : "Intro",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est commodo, sodales dolor sed, consectetur mauris. Sed varius tempus tortor, sed fermentum ipsum consectetur sed.\nVestibulum a tincidunt urna. Donec gravida risus eget facilisis varius."
      },
      {
        heading_id   : "s2h4",
        topic        : "List",
        as_list      : true,
        text         : ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4"]
      },
      {
        heading_id   : "s2h5",
        topic        : "Intro",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est commodo, sodales dolor sed, consectetur mauris. Sed varius tempus tortor, sed fermentum ipsum consectetur sed.\nVestibulum a tincidunt urna. Donec gravida risus eget facilisis varius."
      },
      {
        heading_id   : "s2h5",
        topic        : "List",
        as_list      : true,
        text         : ["Item 1", "Item 2", "Item 3"]
      },
      {
        heading_id   : "s2h6",
        topic        : "Intro",
        text         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est commodo, sodales dolor sed, consectetur mauris. Sed varius tempus tortor, sed fermentum ipsum consectetur sed.\nVestibulum a tincidunt urna. Donec gravida risus eget facilisis varius."
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
