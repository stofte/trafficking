define(['threejs-build'], function() {

    var renderFunctions = [];
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    return {
        webgl: renderer,
        renderFunctions: function (scene) {
            renderFunctions.forEach(function(fn) {
                fn(scene);
            });
        },
        addRenderFunction: function(fn) {
            renderFunctions.push(fn);
        },
        domElement: renderer.domElement
    };
});