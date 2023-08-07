import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EnvConfigService } from './core/services/env-config.service';
import { HeaderComponent } from './features/layout/components/header/header.component';
import { FooterComponent } from './features/layout/components/footer/footer.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export function createTranslateLoader(http: HttpClient, injector: Injector) {
  const env = EnvConfigService.getEnvConfig();
  if(env){
    return new TranslateHttpLoader(http, `${env.frontendBaseUrl}/assets/i18n/`, '.json');
  }else{
    const xForwardedHost = injector.get('X_FORWARDED_HOST');
    return new TranslateHttpLoader(http, `${xForwardedHost}/assets/i18n/`, '.json');
  }
}


const layputDeclarations = [
  HeaderComponent,
  FooterComponent,
]
const primengModule = [
  DropdownModule,

];
const featureModule = [
  FormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
]

@NgModule({
  declarations: [
    AppComponent,
    ...layputDeclarations
  ],
  imports: [
    ...featureModule,
    ...primengModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient,Injector],
      }
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
