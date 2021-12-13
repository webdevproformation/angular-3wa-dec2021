import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>rappels angular</h1>
              <premier></premier>
              <deuxieme></deuxieme>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jour1-rappels';
}
