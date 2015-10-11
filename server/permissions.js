
Messages.allow({

    insert: function(userId, doc) {
      return doc.author_id === userId
    }

});
