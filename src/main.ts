
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { EnvConfigService } from './app/core/services/env-config.service';




if (environment.production) {
  enableProdMode();
}

fetch('assets/env/env.json')
  .then(response => response.json())
  .then(envConfig => {
    EnvConfigService.setEnvConfig(envConfig);
    addGoogleMapApiKeyByEnvironment(envConfig.googleMapsApiKey);
  })
  .then(() =>{
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  })
  ;


function addGoogleMapApiKeyByEnvironment(key:string) {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
  head.appendChild(script);
}
