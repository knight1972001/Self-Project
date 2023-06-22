import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Container, Header, BodyModel, Footer } from './styles'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {loadGLTFModel} from '../../lib/model'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import { render } from 'react-dom' //npm i --save-dev @types/three


const Desk:React.FC = () => {
    const refBody = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<any>();
    const [_camera, setCamera] = useState<any>();
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
    const [initialCameraPosition] = useState(
        new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
    );
    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls] = useState<any>();

    const easeOutCirc = (x:number) =>{
        return Math.sqrt(x-Math.pow(x-1,4));
    }

    const handleWindowResize = useCallback(() =>{
        const {current: container} = refBody;
        if(container && renderer){
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            renderer.setSize(scW, scH);
        }
    }, [renderer]);

    useEffect(()=>{
        const {current: container} = refBody;

        if(container && !renderer){
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            })
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW,scH);
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = scH * 0.08 + 4;
            const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale/2, 0.01, 50000)
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            const ambienLight = new THREE.AmbientLight(0xcccccc, 1);
            scene.add(ambienLight);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setControls(controls);
            
            loadGLTFModel(scene, '/desk/scene.gltf', {
                receiveShadow: false,
                castShadow: false,
              }).then(() => {
                animate();
                setLoading(false);
              });

            let req: any = null;
            let frame = 0;

            const animate = () =>{
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame;

                if(frame <= 100){
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame/120)*Math.PI*20;

                    camera.position.y = 10;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed) + 45;
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    console.log(camera.position.x)
                    console.log(camera.position.z)
                    camera.lookAt(target);
                }else{
                    controls.update();
                }

                renderer.render(scene, camera)
            };

            return () =>{
                console.log('unmount');
                cancelAnimationFrame(req);
                renderer.dispose();
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false);
        return () => {
          window.removeEventListener('resize', handleWindowResize, false);
        };
      }, [renderer, handleWindowResize]);

    return (
        <Container>
            <Header>
                <h1>
                    My office
                </h1>
            </Header>
            <BodyModel ref={refBody}>
                {
                    loading && <p>Loading...</p>
                }
            </BodyModel>
            <Footer>
                Created by Long Nguyen =)
            </Footer>
        </Container>
    )
}

export default Desk