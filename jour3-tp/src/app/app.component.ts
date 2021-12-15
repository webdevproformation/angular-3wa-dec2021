import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="row">
          <h1 class="fs-3">{{ title }}</h1>
      </header>
      <section class="row">
          <accueil></accueil>
      </section>
    </div>
  `
})
export class AppComponent {
  title = 'jour3-tp';
}
