FlowRouter.route('/section/:name', {
  action: function(params) {
    console.log("params: "+params.name)
    FlowLayout.render('main', {
      nav : "side"  
    })
  }
});

FlowRouter.route('/', {
  action: function(params) {
    FlowLayout.render('main', {
      nav: "side"
    })
  }
})
