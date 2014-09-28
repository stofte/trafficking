require.config({
  deps: [
    "main"
  ],
  shims: {
    "threejs-build": {
      exports: "THREE"
    },
    "OrbitControls": {
      deps: ["threejs-build"],
      exports: "THREE.OrbitControls"
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
