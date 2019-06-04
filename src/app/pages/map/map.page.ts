import { Component, OnInit/*, AfterContentInit, ViewChild*/ } from '@angular/core';
// import {} from '@types/googlemaps';



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

// declare var google;

export class MapPage implements OnInit /*AfterContentInit*/ {
  //map: any;

//  @ViewChild('mapElement') mapElement;
  constructor() {
  }

  ngOnInit()/*: void*/ {}

/*  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }*/
}
