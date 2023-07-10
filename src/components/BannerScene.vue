<template>
    <section id="banner" ref="banner" class="relative">
        <a href="https://affinityws.com/atelleweb" class="a-btn button-primary br-32 btn-lng absolute">Back</a>
        <button @click="$store.commit('openCostModal')" class="button-secondary br-32 gap-8">
            Real cost of buying an Atella
            <span class="centered br-24">
                <svg xmlns="http://www.w3.org/2000/svg" height="11.154" viewBox="0 0 5.635 11.154">
                    <path id="Vector" d="M1.26,12.077a.577.577,0,0,1-.408-.985L4.968,6.976a.674.674,0,0,0,0-.952L.852,1.908a.577.577,0,0,1,.816-.816L5.784,5.208a1.829,1.829,0,0,1,0,2.584L1.668,11.908A.575.575,0,0,1,1.26,12.077Z" transform="translate(-0.683 -0.923)"></path>
                </svg>
            </span>
        </button>
    </section>
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
                camera.position.y = 3;
                camera.position.z = 20;
        
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
        
                loader.load('scene.gltf', function (gltf) {
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
    height: 50dvh;
    background-color: #F5F3F1;
    cursor: grab;
    position: sticky;
    top: 0;
    z-index: 10;

}
canvas {
    height: 100%;
    width: 100%;
}
.button-primary{
    inset: 50px auto auto 80px;
    background-color: #fff;
    color: #000;
}
.button-secondary{
    padding: 14px 18px 14px 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    span{
        background-color: #fff;
        padding: 8px 24px;
    }
    
}
</style>