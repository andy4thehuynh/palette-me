 // VIEW
SkinView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  // TODO: cache the template as a property later
  render: function() {
    var html = _.template($('#skin-template').html());
    this.$el.html( html );
  },
  events: {
    "change input[type=radio]": "getSkinColor"
  },
  getSkinColor: function(e) {
    var selectedSkinColor = $('input[name=skin-type]:checked').val();
    this.palette.set("skinColor", selectedSkinColor);
  } 
});


HairView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  render: function() {
    var html = _.template( $('#hair-template').html(), {} );
    this.$el.html( html );
  },
  events: {
    "change input[type=radio]": "getHairColor"
  },
  getHairColor: function(e) {
    var selectedHairColor = $('input[name=hair-type]:checked').val();
    this.palette.set("hairColor", selectedHairColor);
  }
});


EyesView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  render: function() {
    var html = _.template( $('#eyes-template').html(), {} );
    this.$el.html( html );
  },
  events: {
    "change input[type=radio]": "getEyesColor"
  },
  getEyesColor: function(e) {
    console.log(this.palette);
    var selectedEyesColor = $('input[name=eyes-type]:checked').val();
    this.palette.set("eyeColor", selectedEyesColor);
  }
});



PaletteView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
    this.listenTo(this.palette, "change", this.render);
    this.listenTo(this.palette, "change", this.suggestedPalettes);
  },
  template: _.template($('#palette-template').html()),
  suggestedPalettes: function() {
    if (this.palette.suggestions()) {
      $('.details').removeClass('active');
      $('#' + this.palette.suggestions() + "-details").addClass('active');
    }
  },
  render: function() {
    var html = this.template(this.palette.toJSON());
    this.$el.html( html );
  },
});



// MODEL
Palette = Backbone.Model.extend({
  defaults: {
    // "clear-winter": { "medium-grey": "#d3d3d3" },
    // "cool-winter": { "icy-grey": "#d1d9d2" },
    // "deep-winter": { "black": "#000000" },
    // "clear-spring": { "navy": "#000080" },
    // "warm-spring": { "camel": "#c19a6b" },
    // "light-spring": { "camel": "#c19a6b" },
    // "light-summer": { "light-grey": "#d3d3d3" },
    // "cool-summer": { "light-grey": "#d3d3d3" },
    // "soft-summer": { "black": "#000" },
    // "soft-autumn": { "mahogany": "#C04000" },
    // "warm-autumn": { "camel": "#c19a6b" },
    // "deep-autumn": { "pewter": "#8e9294" }
  },
  initialize: function() {
  },
  suggestions: function() {
    if (this.get("eyeColor") && this.get("skinColor") && this.get("hairColor")) {
      return "deep-winter";
    } 
  }
});

var palette = new Palette({ skinColor: undefined, hairColor: undefined, eyeColor: undefined });

skinView = new SkinView({ el: $('#skin-container'), palette: palette });
hairView = new HairView({ el: $('#hair-container'), palette: palette });
eyesView = new EyesView({ el: $('#eyes-container'), palette: palette });

paletteView = new PaletteView({ el: $('#palette-container'), palette: palette });
