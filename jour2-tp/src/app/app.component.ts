import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="row">
        <h1>{{ title }}</h1>
      </header>
      <section class="row">
        <div class="col-4">
          <two-way></two-way>
        </div>
        <div class="col-4">
          <article></article>
        </div>
        <div class="col-4">
          <rxjs></rxjs>
        </div>
        <div class="col-4">
          <creer-observable></creer-observable>
        </div>
      </section>
    </div>
  `,
})
export class AppComponent {
  public title:string  = 'jour2-tp';
}
