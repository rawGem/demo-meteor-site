FlowRouter.route('/', {
  action: function(params) {
    console.log("params: "+params)
    FlowLayout.render('main')
  }
});
