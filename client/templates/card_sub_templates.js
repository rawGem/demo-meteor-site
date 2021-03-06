
Template.aboutChip.events({
  'click .mdi-navigation-close': function(e,t) {
    var removed = Content.remove(t.data._id);
  }
});



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

