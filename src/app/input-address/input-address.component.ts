import { Component, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.scss'],
})
export class InputAddressComponent implements AfterViewInit {
  private accessToken =
    'pk.eyJ1IjoiZHltYWZyIiwiYSI6ImNsODNjMmp4MTAwY2UzcHA4ZWhmaG5sNDAifQ.ozVmzxmotxaZbXfnvHKYDw';
  private map!: mapboxgl.Map;

  constructor() {}

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 9,
      center: [-74.5, 40],
    });
  }
}
