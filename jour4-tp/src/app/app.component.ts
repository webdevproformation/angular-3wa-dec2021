import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="row">
        <h1 class="fs-4">{{ title }}</h1>
      </header>
      <section class="row">
        <div class="col-4">
          <form1></form1>
        </div>
      </section>
    </div>`
})
export class AppComponent {
  title = 'jour4-tp';
}
