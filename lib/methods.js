Meteor.methods({
  updateWithHeadingField : function(args) {
    var affected = Sections.update( {
                      _id : args[0], 
                      "subsections.heading" : args[1] 
                     },
                       { $inc : {"subsections.$.upvotes" : 1 }} );
    }
});
