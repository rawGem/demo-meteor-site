Template.side.onRendered( function() {
  $(".button-collapse").sideNav({
    closeOnClick : true
  });
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 10});
  });
  //d3MakeBlIcon();
});


Template.side.events({
  'click li#edu-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/education');
  },
  'click li#ov-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/overview');
  },
  'click li#crswrk-side': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  },
  'click li#edu-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/education');
  },
  'click li#crswrk-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/coursework');
  },
  'click li#ov-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/section/overview');
  },
  'click li#ab-top': function(e,t) {
    e.preventDefault();
    FlowRouter.go('/about');
  }
})

Template.educationTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "education" ? "true" : "false";
    return "active-"+bool
  }
});

Template.courseworkTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "coursework" ? "true" : "false";
    return "active-"+bool
  }
});

Template.overviewTopNavLink.helpers({
  active: function() {
    var bool = FlowRouter.getParam("name") == "overview" ? "true" : "false";
    return "active-"+bool
  }
});

Template.aboutTopNavLink.helpers({
  active: function() {
    console.log(FlowRouter.current().path);
    var bool = FlowRouter.current().path == "/about" ? "true" : "false";
    return "active-"+bool
  }
});


function d3MakeBlIcon() {
  var svg = d3.select("div.bl-icon").append("svg")
               .attr("width", 20)
               .attr("height", 20)

  var blocks = svg.append("rect")
                   .attr("width", 20)
                   .attr("height", 20)
                   .style("fill", "white")
}
