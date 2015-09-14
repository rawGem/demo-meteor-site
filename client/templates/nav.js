Template.side.onRendered( function() {
  $(".button-collapse").sideNav({
    closeOnClick : true
  });
});

Template.side.events({
  'click li#edu-side': function(e,t) {
    e.preventDefault();
    //FlowRouter.go('/section/'+e.target.innerText.toLowerCase().trim());
    FlowRouter.go('/section/education');
  },
  'click li#crswrk-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  },
  'click li#edu-top': function(e,t) {
    e.preventDefault();
    //FlowRouter.go('/section/'+e.target.innerText.toLowerCase().trim());
    FlowRouter.go('/section/education');
  },
  'click li#crswrk-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  }
})

Template.educationTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "education" ? "true" : "false";
    console.log("education route is active? :: " + bool)
    return "active-"+bool
  }
});

Template.courseworkTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "coursework" ? "true" : "false";
    console.log("education route is active? :: " + bool)
    return "active-"+bool
  }
});
