
<div id="page">
  <!-- <app-navbar [title]="title"></app-navbar> -->
  <div id="main">
      <router-outlet></router-outlet>
  </div>
</div>
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hdpmrg';
}
