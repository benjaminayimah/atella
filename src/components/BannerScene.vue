<template>
    <section id="banner" ref="banner"></section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
    name: 'BannerScene',
    mounted() {
                let scene, camera, renderer, controls;
                const ts = this
                let containerWidth = ts.$refs.banner.offsetWidth;
                let containerHeight = ts.$refs.banner.offsetHeight;


                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(40, containerWidth / containerHeight , 1, 5000);
        
                renderer = new THREE.WebGLRenderer();
                renderer.setSize(containerWidth, containerHeight);
                renderer.setClearColor(0xF5F3F1); // Set the background color here

                // this.$refs.container.appendChild(renderer.domElement);
                this.$refs.banner.appendChild(renderer.domElement)
                
                camera.position.x = 2;
                camera.position.y = 4;
                camera.position.z = 15;
        
                controls = new OrbitControls(camera, renderer.domElement);
                const directionalLight = new THREE.DirectionalLight(0x999999, 1);
                directionalLight.position.set(0, 100, 100); // Set the position of the light source
                directionalLight.castShadow = true; // Enable shadow casting
                directionalLight.intensity = 1.5; // Increase the light intensity
                scene.add(directionalLight);
                

                let light2 = new THREE.PointLight(0xffffff, 10);
                light2.position.set(50, 10, 0);
                light2.intensity = 1.5; // Increase the light intensity
                scene.add(light2);

                let light3 = new THREE.PointLight(0xffffff, 10);
                light3.position.set(0, 100, -500);
                light3.intensity = 1.5; // Increase the light intensity
                scene.add(light3);

            

                window.addEventListener('resize', onWindowResize);
        
        
                loadModel(); // Call the function to load the GLTF model
                
            
                function onWindowResize() {
                    let containerWidth = ts.$refs.banner.offsetWidth;
                    let containerHeight = ts.$refs.banner.offsetHeight;

                    camera.aspect = containerWidth / containerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(containerWidth, containerHeight);
                }
            
                function animate() {
                    requestAnimationFrame(animate);
                    controls.update();
                    renderer.render(scene, camera);
                }
    
            function loadModel() {
                const loader = new GLTFLoader();
        
                loader.load('/scene.gltf', function (gltf) {
                    const model = gltf.scene
                    model.rotation.y = 150/180*Math.PI; // Rotate 150 degrees on the Y-axis

                    scene.add(model);

                    // Center the model within the parent div
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    model.position.sub(center);
            
                    animate(); // Start the animation loop after loading the model
                });
            }
    }
}
</script>

<style lang="scss" scoped>
#banner {
    height: 60dvh;
    // background-color: #F5F3F1;
    cursor: grab;

}
canvas {
    height: 100%;
    width: 100%;
}
</style>