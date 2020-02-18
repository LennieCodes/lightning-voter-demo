// browser shims to ensure modern functionality (whatever that means)
import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone';

// The code that will bootstrap Angular 2. 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // bootstraps angular 1 code. 
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid application bootstrapped');
})