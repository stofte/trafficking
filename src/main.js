require(['renderer', 'camera', 'scene', 'cities', 'threejs-build'], function(renderer, camera, scene, cities) {
    'use strict';

    renderer.addRenderFunction(camera.onRender);
    renderer.addRenderFunction(scene.onRender);

    (function mainLoop() {
        requestAnimationFrame(mainLoop);
        renderer.renderFunctions(scene.scene);
        renderer.webgl.render(scene.scene, camera.camera);
    })();
});