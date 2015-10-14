Meteor.methods({

  upvoteWithHeadingField : function(args) {
        if (Meteor.userId() === this.userId) {
          var q = {_id : args[0],"subsections.heading_id" : args[1] }
             ,u = { $inc : {"subsections.$.upvotes" : 1 }}
          Sections.update(q, u)

        } else throw new Meteor.Error("Not authorized")
    },

  downvoteWithHeadingField : function(args) {
    var affected = Sections.update( {
                      _id : args[0], 
                      "subsections.heading" : args[1] 
                     },
                       { $inc : {"subsections.$.downvotes" : 1 }} );
    }
});
