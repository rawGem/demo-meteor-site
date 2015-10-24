Accounts.onCreateUser(function(options, user) {
   if (options.username !== "admin") { 
     Privileges.insert({ 
                        user_id : user._id, 
                        privileges : [ "vote", "message"]
                       })
     return user
   } else {
     Privileges.insert({ 
                        user_id : user._id, 
                        privileges : ["admin", "vote", "message"]
                       })
     return user
   }
});
