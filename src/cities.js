define(['scene', 'renderer', 'threejs-build'], function(scene, renderer) {
    var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 4, 50, 50, false), new THREE.MeshNormalMaterial());
    cylinder.overdraw = true;
    cylinder.x = 100;
    // cylinder.y = 100;
    cylinder.z = 100;

    // console.log(cylinder)
    scene.scene.add(cylinder);
    renderer.addRenderFunction(function() {
        cylinder.rotation.y -= 0.001;
    });
});