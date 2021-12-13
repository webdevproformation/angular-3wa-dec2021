import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>rappels angular</h1>
              <quatrieme></quatrieme>
              <premier></premier>
              <deuxieme></deuxieme>
              <troisieme></troisieme>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jour1-rappels';
}
