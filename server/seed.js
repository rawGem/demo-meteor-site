
Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert( 
      {
        subject: "Education", 
        subsections : [
          { heading : "School 1", text_region: "i lernt da codez"},
          { heading : "School 2", text_region: "lernt moar cdez"}
        ]
      });

    Sections.insert(
      {
        subject: "Coursework", 
        subsections : [
          { heading : "cs101", text_region: "i lernt da codez"},
          { heading : "cs102", text_region: "lernt moar cdez"}
        ]
      });
  }
});
