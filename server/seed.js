
Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert({
      subject: "Education", 
      sections : [
        {
        heading: "cs101",
        description: "I lernt da codez"
        },
        {
        heading: "cs102",
        description: "I lernt moar codez"
        }
      ]
    });

  }
})
