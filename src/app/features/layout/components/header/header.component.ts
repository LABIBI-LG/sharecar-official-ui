import { Component, OnInit } from '@angular/core';
import { HEADER_NAV, LANGS_SELECT } from '../../constant/header';
import { HeaderService } from '../../services/header.service';
import { Dropdown } from 'src/app/core/interfaces/dropdown';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  open = false;

  headerNavArr = HEADER_NAV;
  langsSelect = LANGS_SELECT;
  langs: Dropdown | undefined;


  constructor(private headerService:HeaderService) { }
  ngOnInit(): void {
    this.langs = {
      name: 'SHARE.ZH-TW',
      code: 'zh-tw'
    }
  }

  langsChange($event: 'en' | 'zh-tw'): void{
    this.headerService.langsChangeSubject$.next($event);
  }

}
