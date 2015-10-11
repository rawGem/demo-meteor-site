Accounts.onCreateUser(function(options, user) {
   if (!options.hasOwnProperty("profile")) { 
     console.log("this must not be an admin");
     user.profile = {admin: false}
     Privileges.insert({ 
                        user_id : user._id, 
                        privileges : [ "vote", "message"]
                       })
     return user
   } else {
     console.log("this must be the head honcho");
     user.profile = options.profile
     Privileges.insert({ 
                        user_id : user._id, 
                        privileges : ["admin", "vote", "message"]
                       })
     return user
   }
});
