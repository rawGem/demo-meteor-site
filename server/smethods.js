Meteor.methods({

  checkForAdminPrivileges : function(id) {
    var user = Meteor.users.findOne(id)
    if (user.privileges) {
        console.log("[method] is admin? ", user.privileges) 
        var response =  _.contains(user.privileges, "admin")
        return response
    }
    return false
    }

});
