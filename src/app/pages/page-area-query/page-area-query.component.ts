import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from 'src/app/features/google-map/components/google-map.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-area-query',
  standalone: true,
  imports: [CommonModule, GoogleMapComponent, TranslateModule],
  templateUrl: './page-area-query.component.html',
  styleUrls: ['./page-area-query.component.scss']
})
export class PageAreaQueryComponent {

}
