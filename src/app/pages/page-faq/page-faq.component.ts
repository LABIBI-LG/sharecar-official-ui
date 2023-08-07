import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-faq',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './page-faq.component.html',
  styleUrls: ['./page-faq.component.scss']
})
export class PageFaqComponent {

}
