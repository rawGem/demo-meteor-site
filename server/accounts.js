Accounts.onCreateUser(function(options, user) {
   if (options && !options.profile.admin ) { 
     console.log("this must not be an admin");
     user.profile = {admin: false}
     return user
   } else {
     console.log("this must be the head honcho");
     user.profile = options.profile
     return user
   }
});
