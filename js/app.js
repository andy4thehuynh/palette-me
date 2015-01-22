//  Skin View
SkinView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  template: _.template($('#skin-template').html()),
  render: function() {
    var html = this.template;
    this.$el.html(html);
  },
  events: {
    "change input[type=radio]": "getSkinColor"
  },
  getSkinColor: function(e) {
    var selectedSkinColor = $('input[name=skin-type]:checked').val();
    this.palette.set("skinColor", selectedSkinColor);
  } 
});


//  Hair View
HairView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  template: _.template($('#hair-template').html()),
  render: function() {
    var html = this.template;
    this.$el.html(html);
  },
  events: {
    "change input[type=radio]": "getHairColor"
  },
  getHairColor: function(e) {
    var selectedHairColor = $('input[name=hair-type]:checked').val();
    this.palette.set("hairColor", selectedHairColor);
  }
});


//  Eyes View
EyesView = Backbone.View.extend({
  initialize: function(config) {
    this.palette = config.palette;
    this.render();
  },
  template: _.template($('#eyes-template').html()),
  render: function() {
    var html = this.template;
    this.$el.html(html);
  },
  events: {
    "change input[type=radio]": "getEyesColor"
  },
  getEyesColor: function(e) {
    var selectedEyesColor = $('input[name=eyes-type]:checked').val();
    this.palette.set("eyeColor", selectedEyesColor);
  }
});


//  Calculated Palette based on skin, hair, eyes
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
      $('#' + this.palette.suggestions() + "-details").addClass('show');
    }
  },
  render: function() {
    var html = this.template(this.palette.toJSON());
    this.$el.html( html );
  },
});


// When user clicks next
$('#skin-next').on('click', function() {
  $('#skin-card').addClass("hidden");
  $('#hair-card').addClass("show");
});

$('#hair-next').on('click', function() {
  $('#hair-card').addClass("hidden");
  $('#hair-card').removeClass("show");
  $('#eye-card').addClass("show");
});

$('#eyes-next').on('click', function() {
  $('#eye-card').addClass("hidden");
  $('#eye-card').removeClass("show");
  $('#palette-container').addClass("show");
});


//  Instantiate views and Palette model:
var palette = new Palette();

skinView = new SkinView({ el: $('#skin-container'), palette: palette });
hairView = new HairView({ el: $('#hair-container'), palette: palette });
eyesView = new EyesView({ el: $('#eyes-container'), palette: palette });

paletteView = new PaletteView({ el: $('#palette-container'), palette: palette });
