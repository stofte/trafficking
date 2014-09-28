define(['renderer', 'prototypes', 'OrbitControls', 'threejs-build'], function(renderer) {
    'use strict';

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 1.5;

    var controls = new THREE.OrbitControls(camera, document, renderer.domElement);

    function onRender(scene) {
        controls.update();
    }

    return {
        camera: camera,
        onRender: onRender
    };
});