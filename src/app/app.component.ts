import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from './features/layout/services/header.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit , OnDestroy {

  onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this.translateService.setDefaultLang('zh-tw');
    this.translateService.use('zh-tw');

    this.allSubscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  constructor(
    private translateService: TranslateService,
    private headerService: HeaderService
  ) { }


  allSubscribe(): void {
    this.headerService.langsChangeSubject$
      .pipe(
        takeUntil(this.onDestroy$)
      ).subscribe((lang)=> {
        this.translateService.use(lang);
      })
  }
}
