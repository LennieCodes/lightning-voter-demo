import { Component } from '@angular/core';

// can't use <ng-view here, have to use class syntax.
// this will create an ng-view just like using the ng-view element.  
@Component({
  selector: 'my-app',
  template: `
    <div class="ng-view"></div>
  `
})
export class AppComponent {}