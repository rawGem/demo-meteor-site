
Messages.allow({

    insert: function(userId, doc) {
      return doc.author_id === userId
    }

});

Content.allow({
    insert: function(userId, doc) {
      if (userId &&
          userId === Meteor.userId())
          return true
      else return false
    },

    remove: function(userId, doc) {
      if (userId &&
          userId === Meteor.userId())
          return true
      else return false
    }
});
