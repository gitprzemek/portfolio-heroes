import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
let loadingElement = document.querySelector(".loader-wrapper");

setTimeout(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => setTimeout(() => loadingElement.classList.add("loaded"), 1000))
    .then(() => setTimeout(() => loadingElement.remove(), 2000));
}, 0);
