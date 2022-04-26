import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/catalog/product.model';

@Component({
  selector: 'bot-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.css']
})
export class SwitchExampleComponent implements OnInit {
  images: any[];
  constructor() {
    this.images = [
      {type: 'head', imageUrl: '/assets/images/robot-parts/head-big-eye.png'},
      {type: 'head', imageUrl: '/assets/images/robot-parts/head-friendly.png'},
      {type: 'head', imageUrl: '/assets/images/robot-parts/head-shredder.png'},
      {type: 'head', imageUrl: '/assets/images/robot-parts/head-single-eye.png'},
      {type: 'head', imageUrl: '/assets/images/robot-parts/head-surveillance.png'},
      {type: 'arm', imageUrl: '/assets/images/robot-parts/arm-articulated-claw.png'},
      {type: 'arm', imageUrl: '/assets/images/robot-parts/arm-dual-claw.png'},
      {type: 'arm', imageUrl: '/assets/images/robot-parts/arm-grabber.png'},
      {type: 'arm', imageUrl: '/assets/images/robot-parts/arm-propeller.png'},
      {type: 'arm', imageUrl: '/assets/images/robot-parts/arm-stubby-claw.png'},
      {type: 'torso', imageUrl: '/assets/images/robot-parts/torso-flexible-gauged.png'},
      {type: 'torso', imageUrl: '/assets/images/robot-parts/torso-gauged.png'},
      {type: 'torso', imageUrl: '/assets/images/robot-parts/torso-pouch.png'},
      {type: 'base', imageUrl: '/assets/images/robot-parts/base-double-wheel.png'},
      {type: 'base', imageUrl: '/assets/images/robot-parts/base-rocket.png'},
      {type: 'base', imageUrl: '/assets/images/robot-parts/base-single-wheel.png'},
      {type: 'base', imageUrl: '/assets/images/robot-parts/base-spring.png'},
      {type: 'base', imageUrl: '/assets/images/robot-parts/base-triple-wheel.png'},
    ];
  }

  getHeads() {
    return this.images.filter(i => i.type === 'head');
  }
  getArms() {
    return this.images.filter(i => i.type === 'arm');
  }
  getTorsos() {
    return this.images.filter(i => i.type === 'torso');
  }
  getBases() {
    return this.images.filter(i => i.type === 'base');
  }

  ngOnInit(): void {
  }

}
