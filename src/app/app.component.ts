import { Component, OnInit } from '@angular/core';
import {Loader} from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'google-map';

ngOnInit():void{
let loader=new Loader({
  apiKey:'AIzaSyCeMiPbB9ePn4Yv-jFR7sitcVZEu4LTBx0'
})
loader.load().then(()=>{
  new google.maps.Map(document.getElementById("map") as HTMLElement,
  {
    center:{lat:51.2333334, lng:6.78333},
    zoom:6
  })
})
}}

