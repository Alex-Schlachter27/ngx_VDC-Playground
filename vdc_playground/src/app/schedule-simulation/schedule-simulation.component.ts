import { Component, OnInit } from '@angular/core';

import * as THREE from "three";
import * as OBC from "openbim-components";
import { IfcFragmentLoader } from 'openbim-components';

@Component({
  selector: 'app-schedule-simulation',
  templateUrl: './schedule-simulation.component.html',
  styleUrls: ['./schedule-simulation.component.scss']
})
export class ScheduleSimulationComponent implements OnInit {

  public components = new OBC.Components();
  public container?: HTMLElement;
  public fragments?: OBC.Fragments;
  public scene?: THREE.Scene

  private webIFCWasmPath: string;

  constructor() {
    this.webIFCWasmPath = "/assets/ifcjs/";
  }

  ngOnInit(): void {

    this.container = document.getElementById('three-canvas') as HTMLElement;
    this.components.scene = new OBC.SimpleScene(this.components);
    this.components.renderer = new OBC.SimpleRenderer(this.components, this.container);
    this.components.camera = new OBC.SimpleCamera(this.components);
    this.components.raycaster = new OBC.SimpleRaycaster(this.components);

    this.components.init();

    // Add some elements to the scene

    this.scene = this.components.scene.get();

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshStandardMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 1.5, 0);
    this.scene.add(cube);

    this.components.meshes.push(cube);

    const directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(5, 10, 3);
    directionalLight.intensity = 0.5;
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight();
    ambientLight.intensity = 0.5;
    this.scene.add(ambientLight);

    // add fragments
    this.fragments = new OBC.Fragments(this.components);
  }

  async loadIfcToFragments(event: any) {

	  this.components.tools.add(this.fragments!);
    const loader = new IfcFragmentLoader(this.fragments!);

    loader.settings.wasm.path = this.webIFCWasmPath;
    // console.log(loader.settings.wasm)
    // this.fragments!.ifcLoader.settings.wasm = {
		// 	path: "https://unpkg.com/web-ifc@0.0.36/",
    //   absolute: true
    // };

		loader.settings.optionalCategories.length = 0;

    loader.settings.webIfc = {
    	COORDINATE_TO_ORIGIN: true,
      USE_FAST_BOOLS: true
    };

    if (event.target.files.length == 0) {
      console.log("No file selected!");
      return;
    }
    let file: File = event.target.files[0];
    const fileURL = URL.createObjectURL(file);

		const model = await loader.load(new URL(fileURL));
		this.scene!.add(model);

		this.fragments!.culler.needsUpdate = true;
	}


  // processIFCGeometry(file: any) {
  //       const loader = new IfcFragmentLoader();
  //       loader.settings.webIfc = {
  //           COORDINATE_TO_ORIGIN: false,
  //           USE_FAST_BOOLS: true
  //       };
        // loader.settings.wasm.path = this.webIFCWasmPath;
        // loader.progress.on((event) => {
        //     const fileProcessing = Math.floor((event.current * 100) / event.total);
        //     this.parsingProgress.modelLoad = fileProcessing;
        //     this.parsingProgress$.next(this.parsingProgress);
        // });
        // // Parse the model and remove the loaded file
        // const fileURL = URL.createObjectURL(file);
        // const model = await loader.load(new URL(fileURL));
        // this.parsingProgress.modelLoad = 100;
        // this.parsingProgress$.next(this.parsingProgress);
        // return model;
  // };

}
