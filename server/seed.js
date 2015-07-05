
Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert({
      subject: "Education", 
      subsections : [
        {
        heading: "cs101",
        text: "I lernt da codez"
        },
        {
        heading: "cs102",
        text: "I lernt moar codez"
        }
      ]
    });

  }
})
