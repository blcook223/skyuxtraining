(function () {
  'use strict';

  angular.module('skytutorial', ['sky'])
    .run(run);


  function run(bbPalette) {
    var mono = bbPalette.getColorSequence(14, 'mono');
    var multi = bbPalette.getColorSequence(14, 'multi');

    console.log(mono, multi);

    // console.log(bbPalette.getColorByIndex(4, 'mono')); // == #c1e1f6
  }

  run.$inject = ['bbPalette'];
}());
