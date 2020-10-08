import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @HostBinding('class') class = 'app';
}
