import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h3>
      This is contact page
    </h3>
    <a routerLink='add'>Add page</a>
    <br>
    <a routerLink='edit/123'>Edit page</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
