
Template.sections.onRendered( function() {
  var instance = this;

  Meteor.setTimeout(
    function() {
      $(".space").css("height", "200");
    }, 50)

  this.autorun(function() {
    instance.subscribe('sections', FlowRouter.getParam("name"));
  });
});

Template.cardContent.onRendered( function() {
  var instance = this;
  if (Meteor.userId()) {
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must 
      // specify the modal ID that wants to be triggered
      Sections.find().forEach(function(item, index, cursor) {
          _.each(item.subsections, function(subsec, sbindex) {
            var identifier = '#'+subsec.heading_id+'-'+sbindex;
            $(identifier).leanModal();
          });
      });
    }); 
  }
  instance.autorun(function() {
    instance.subscribe('allcontent');
  });
});

Template.addForm.onRendered( function() {
  this.$(".tooltip").hide();
})

Template.addForm.events({
  'click .add-btn': function(e,t) {
    t.$(".tooltip").toggle();
    t.$("input").focus();
  }
});

Template.addToAboutForm.events({
  
  'click div.add-button' : function(e,t) {
    var text = t.$("input")["0"];
    if (text.value) {
      Content.insert({
        heading_id : t.data.heading_id,
        topic      : t.data.title,
        text       : text.value
      });
      text.value = "";
      t.view.parentView._templateInstance.$(".tooltip").hide()
    }
  },

  'submit .about' : function(e,t) {
    e.preventDefault();
    var text = e.currentTarget["0"].value;
    if (text) {
      Content.insert({
        heading_id : t.data.heading_id,
        topic      : t.data.title,
        text       : text
      });

      e.currentTarget["0"].value = "";
      t.$("input")["0"].blur()
      t.view.parentView._templateInstance.$(".tooltip").hide()
    }
  }


});

Template.aboutChip.events({
  'click .mdi-navigation-close': function(e,t) {
    var removed = Content.remove(t.data._id);
  }
});


Template.messageForm.events({

  'click .btn-flat' : function(e,t) {
    var text = t.$("textarea")
    if (text["0"].value) {
        Messages.insert( 
              {
               author_id      : Meteor.userId(),  
               heading_id  : t.data.heading_id,
               date        : new Date(),
               text        : text["0"].value
              })

        text["0"].value = ""
    }
  }

})


Template.thumbsUp.events({

  'click': function(e,t) {    
      e.preventDefault();
      if (Meteor.userId()) {
          var section_id = Template.parentData(2).section_id,
              heading_id = Template.parentData().heading_id;
          Meteor.call('upvoteWithHeadingField', [section_id, heading_id ])
      }
  }
})



Template.cardContent.helpers({

  visitor: function() {
  if (!Meteor.user()) return false;
  else {
    return true;
  }
  },

  withUser: function() {
    return Meteor.user() ? "with-user" : ""; 
  },

  topics: function(id) {
     return Content.find({heading_id: id})
  },

  isAbout: function() {
  /* i really hate doing it this way */
  /*if (FlowRouter.getParams("name") === "about") {
    Content.find().forEach(function(item, index){
      console.log("item in isAbout ", item.heading_id === "about")
      if (item.heading_id === "about") return true 
      })
    }*/
    return FlowRouter.getParam("name") === "about" 
  }

 
});


Template.sections.helpers({
  sections: function() {
    var sections =  Sections.find().map(function(item, index) {
      _.each(item.subsections, function(subsection, sindex) {
        subsection.sindex = sindex
      })
      return item
    })
    return sections
  },

  spacerHeight: function() {
    return "600px"
  }

});



