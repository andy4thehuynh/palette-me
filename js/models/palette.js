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

