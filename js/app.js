 // VIEW
SkinView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  template: _.template($('#skin-template').html()),
  render: function() {
    var html = this.template;
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
  template: _.template($('#hair-template').html()),
  render: function() {
    var html = this.template;
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
  template: _.template($('#eyes-template').html()),
  render: function() {
    var html = this.template;
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
    skinColor: undefined,
    hairColor: undefined,
    eyeColor: undefined
  },
  initialize: function() {
  },
  suggestions: function() {
    if (this.get("skinColor") && this.get("hairColor") && this.get("eyeColor")) {
      return "deep-winter";
    } 
  }
});

var palette = new Palette();

skinView = new SkinView({ el: $('#skin-container'), palette: palette });
hairView = new HairView({ el: $('#hair-container'), palette: palette });
eyesView = new EyesView({ el: $('#eyes-container'), palette: palette });

paletteView = new PaletteView({ el: $('#palette-container'), palette: palette });

