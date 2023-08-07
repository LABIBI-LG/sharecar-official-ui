import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-description',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.scss']
})
export class PageDescriptionComponent {

}
