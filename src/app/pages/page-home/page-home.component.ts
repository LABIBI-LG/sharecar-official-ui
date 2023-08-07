import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { STATIC_ROUTES } from 'src/app/core/constant/routes.constant';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class PageHomeComponent {
  STATIC_ROUTES = STATIC_ROUTES;

}
