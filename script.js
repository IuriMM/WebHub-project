console.log("Script carregado com sucesso!");
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

window.addEventListener("load",() => {
    if (typeof gsap === "undefined") {
        console.error("GSAP não foi carregado. Verifique a ordem dos scripts no HTML.");
        return;
    }

    //let smoother = ScrollSmoother.create();

    const plugins = [ScrollTrigger, ScrollSmoother, SplitText].filter(Boolean);
    gsap.registerPlugin(...plugins);

    const videoHero = document.querySelector(".hero video");
    const videoFooter = document.querySelector(".img_footer video");

    if (videoHero) {
        videoHero.src = "img/video-hero.mp4";
        videoHero.autoplay = true;
        videoHero.loop = true;
        videoHero.muted = true;
    }

    if (videoFooter) {
        videoFooter.src = "img/video-footer.mp4";
        videoFooter.autoplay = true;
        videoFooter.loop = true;
        videoFooter.muted = true;
    }

    console.log("Videos carregados e configurados com sucesso!");

    

    const linhadotempo = gsap.timeline({
        scrollTrigger: {
            trigger: ".TransicaoPai",
            scrub: true,
            start: "0% 0%",
            end: "+=3000px",
            pin: true,
        },});
    
    linhadotempo.to(".Retangulo div", {
        y: 0,
        stagger: 0.4,    
        duration: 3
        }
    );

    linhadotempo.to(".Transicao", {
        opacity: 1,
    })

    const split = new SplitText(".Transicao h2", { type: "chars" });

    linhadotempo.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 1,
    }, "-=0.5");

    const linhadotempo2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Ideais",
            scrub: true,
            start: "0% 0%",
            end: "+=3000px",
            pin: true,
        },
    });

    const texto_ideais = document.querySelectorAll(".Ideais h2");

    texto_ideais.forEach((texto) => {
        const splitTexto = new SplitText(texto, { type: "chars" });
        linhadotempo2.from(splitTexto.chars, {
            filter: "blur(20px)",
            stagger: {each: 0.05, from: "random"},
            opacity: 0,
        })

        linhadotempo2.to(splitTexto.chars, {
            opacity: 0,
        })
    });

    //Three.js
    const scene = new THREE.Scene();
    let diamondModel = null;

    const divDiamante = document.querySelector(".divDiamante");
    if (!divDiamante) {
        console.error("Elemento .divDiamante não encontrado.");
        return;
    }

    const camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000); 
    camera.position.z = 7;
    camera.position.y = -1;
    const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    divDiamante.appendChild(renderer.domElement);
    
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("img/diamond-compressed.glb", (gltf) => {
        diamondModel = gltf.scene;
        diamondModel.position.z = -4;
        scene.add(diamondModel);
    }, undefined, (error) => {
        console.error("Erro ao carregar o modelo GLTF:", error);
    });

    const txtLoader = new THREE.TextureLoader();
    txtLoader.load("img/hdri.webp", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        const pmrem = new THREE.PMREMGenerator(renderer);
        const env = pmrem.fromEquirectangular(texture).texture;
        scene.environment = env;
    });

    function animate() {
        requestAnimationFrame(animate);

        if (diamondModel) {
            diamondModel.rotation.y += 0.01;
            diamondModel.rotation.x = Math.sin(performance.now() * 0.0012) * 0.08;
        }

        renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
        const width = divDiamante.clientWidth;
        const height = divDiamante.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    animate();
});
