SearchView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var template = _.template( $('#search-template').html(), {} );
    this.$el.html( template );
  },
  events: {
    "click input[type=button]": "doSearch"
  },
  doSearch: function(e) {
    alert( "Search for " + $('#search-input').val());
  } 
});

searchview = new SearchView({ el: $('#search-container') });

console.log("This is the searchview below: ");
console.log(searchview);



Person = Backbone.Model.extend({
  defaults: {
    name: "Stephanie",
    age: 25
  },

  initialize: function() {
    alert("Hits initialize()");
    this.on("change:name", function(model) {
      var name = model.get("name");
      alert("My name changed to " + name);
    });
  }
});

var person = new Person({ name: "Andy", age: 23 });
person.set({ name: "James Peng" });

var AppRouter = Backbone.Router.extend({
  routes: {
    "post/:id": "getPost",
    "*actions": "defaultRoute"
  }
});

var appRouter = new AppRouter;

appRouter.on('route:getPost', function(id) {
  alert("got post: " + id);
});

appRouter.on('route:defaultRoute', function(actions) {
  alert(actions);
});

Backbone.history.start();
