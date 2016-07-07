
/**
 * @file
 * Contains the JS for our sample assets module.
 */

(function (Drupal) {
  "use strict";

  Drupal.behaviors.boilerplateCustomJS = {
    attach: function (context, settings) {
      console.log('sample_assets.custom.js is loaded');
    }
  };

})(Drupal);
