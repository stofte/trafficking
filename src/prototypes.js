define(function() {
    'use strict';

    if (!Math.clamp) {
        Math.clamp = function(value, min, max) {
            return Math.min(Math.max(value, min), max);
        };
    }
});