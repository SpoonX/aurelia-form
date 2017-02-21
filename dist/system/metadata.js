'use strict';

System.register(['aurelia-metadata', 'homefront'], function (_export, _context) {
  "use strict";

  var metadata, Homefront, Metadata;

  

  return {
    setters: [function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_homefront) {
      Homefront = _homefront.Homefront;
    }],
    execute: function () {
      _export('Metadata', Metadata = function () {
        function Metadata() {
          
        }

        Metadata.forTarget = function forTarget(target) {
          if (typeof target !== 'function') {
            target = target.constructor;
          }

          return metadata.getOrCreateOwn('spoonx:form:metadata', Homefront, target, target.name);
        };

        return Metadata;
      }());

      _export('Metadata', Metadata);
    }
  };
});