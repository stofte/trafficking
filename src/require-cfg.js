require.config({
  deps: [
    "app"
  ],
  shims: {
    "threejs-build": {
      exports: "THREE"
    }
  },
  paths: {
    hammerjs: "libs/hammerjs/hammer",
    "threejs-build": "libs/threejs-build/build/three.min",
    requirejs: "libs/requirejs/require",
    almond: "libs/almond/almond"
  },
  packages: [

  ]
});
