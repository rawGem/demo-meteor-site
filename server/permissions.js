
Messages.allow({

    insert: function(userId, doc) {
      console.log("id [message permissions] ", userId);
      console.log("doc [message permissions] ", doc);
      return doc.author_id === userId
    }

});
