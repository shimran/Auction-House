AuctionHouse.Router.map(function() {
  this.resource('home', {path:'/'});
  this.resource('departments', function(){
    this.resource('new-departments');
  });
  this.resource('about');
  this.resource('contact');
});
