import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '../environments/environment';

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
enableProdMode();
// if (environment.production) {
    
//   }
platformBrowserDynamic().bootstrapModule(AppModule);
