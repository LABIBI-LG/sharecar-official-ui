import { Component, OnInit} from '@angular/core';
import { EnvConfigService } from 'src/app/core/services/env-config.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
    standalone: true,
    imports: [NgIf, GoogleMapsModule]
})

export class GoogleMapComponent implements OnInit {

  env = EnvConfigService.getEnvConfig();

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };
  ngOnInit(): void{
    console.log('env',this.env);
  }
}
