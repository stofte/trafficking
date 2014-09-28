define(['threejs-build'], function() {
    'use strict';
    var scene = new THREE.Scene();
    var sunlight = new THREE.DirectionalLight(0xcccccc, 1);
    sunlight.position.set(5,3,5)
    scene.add(new THREE.AmbientLight(0x888888));
    scene.add(sunlight);

    var groundGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var groundMaterial = new THREE.MeshPhongMaterial();
    groundMaterial.map = THREE.ImageUtils.loadTexture('earthmap1k.jpg');
    groundMaterial.bumpMap = THREE.ImageUtils.loadTexture('earthbump1k.jpg');
    groundMaterial.bumpScale = 0.05;

    var groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    scene.add(groundMesh);

    // create the geometry sphere
    var starGeometry = new THREE.SphereGeometry(90, 32, 32);
    // create the material, using a texture of startfield
    var starMaterial = new THREE.MeshBasicMaterial();
    starMaterial.map = THREE.ImageUtils.loadTexture('galaxy_starfield.png');
    starMaterial.side = THREE.BackSide;
    // create the mesh based on geometry and material
    var starMesh  = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);

    return {
        scene: scene,
        onRender: function() {
            groundMesh.rotation.y += 0.001;
        }
    };

});