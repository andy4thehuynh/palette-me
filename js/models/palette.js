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
      var selectedSkin = this.get("skinColor"),
          selectedHair = this.get("hairColor"),
          selectedEyes = this.get("eyeColor");

          console.log(selectedSkin);
          console.log(selectedHair);
          console.log(selectedEyes);


      var availablePalettes = ['clear-winter', 'cool-winter', 'deep-winter',
                      'clear-spring', 'warm-spring', 'light-spring',
                      'light-summer', 'cool-summer', 'soft-summer',
                      'soft-autumn', 'warm-autumn', 'deep-autumn'];

      var skinMatches = {
        'porcelain':     ['clear-spring', 'deep-autumn', 'warm-spring', 'light-summer', 'light-spring'],
        'ivory':         ['light-spring', 'clear-spring', 'warm-spring', 'cool-summer', 'light-summer',
                          'soft-summer','soft-autumn'],
        'pink-beige':    ['light-summer', 'light-spring', 'cool-summer'],
        'neutral-beige': ['cool-winter', 'deep-winter', 'soft-autumn', 'clear-winter'],
        'warm-beige':    ['clear-winter', 'warm-autumn'],
        'golden-brown':  ['soft-autumn', 'deep-winter', 'warm-autumn', 'clear-winter'],
        'cool-brown':    ['deep-winter', 'cool-winter'],
        'olive':         ['deep-winter', 'cool-winter', 'soft-autumn', 'clear-winter']
      };

      var hairMatches = {
        'ash-blonde':    ['light-summer', 'light-spring'],
        'strawberry':    ['warm-autumn', 'warm-spring'],
        'light-brown':   ['light-summer', 'light spring'],
        'mousey-brown':  ['soft-autumn', 'soft-summer'],
        'medium-brown':  ['clear-winter', 'clear-spring'],
        'dark-brown':    ['cool-winter', 'clear-winter', 'deep-winter', 'clear-spring', 'deep-autumn'],
        'black':         ['soft-autumn', 'cool-winter', 'clear-winter', 'deep-winter', 'deep-autumn'],
        'warm-grey':     ['warm-autumn', 'light-spring', 'warm-spring', 'soft-autumn'],
        'silver':        ['clear-spring', 'clear-winter', 'cool-summer'],
        'auburn':        ['clear-winter', 'deep-winter'],
        'ash-grey':      ['light-summer', 'light-spring', 'cool-summer']
      };

      var eyesMatches = {
        'rich-hazel':    ['deep-autumn', 'deep-winter'],
        'blue-green':    ['clear-winter', 'cool-winter', 'clear-spring', 'light-spring'],
        'grey':          ['cool-summer', 'light-summer', 'soft-summer'],
        'topaz':         ['warm-autumn', 'warm-spring'],
        'soft-hazel':    ['soft-summer', 'cool-winter', 'soft-autumn']
      };

      //  Logic here
      var result = [];

      function flattener(arr, selection) {
        for (var i in arr) {
          if (i == selection) {
            for (var j=0; j<arr[i].length; j++) {
              result.push(arr[i][j]);
            }
          }
        }
      }

      flattener(skinMatches, selectedSkin);
      flattener(hairMatches, selectedHair);
      flattener(eyesMatches, selectedEyes);

      console.log(result);
      return 'clear-winter';
    }
  }
});
