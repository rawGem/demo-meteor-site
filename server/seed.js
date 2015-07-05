
Meteor.startup(function(){
  console.log("meteor starting up...")
  if (Sections.find().fetch().length === 0) {
    console.log("seeding db...")

    Sections.insert({
      subject: "Education", 
      subsections : [
        { heading : "sofjwef", region: "region 1"},
        { heading : "sofjwef", region: "region 2"}
      ]
    });

  }
})
