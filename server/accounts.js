Accounts.onCreateUser(function(options, user) {
   user.profile = {admin: false}
   return user
});
