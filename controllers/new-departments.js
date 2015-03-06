AuctionHouse.new-departmentsController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var department = this.get('department');
      department.save();

      var controller = this;
      department.get('post').then(function(post) {
        post.save();
        controller.transitionToRoute('department', post);
      });
    }
  }
});
