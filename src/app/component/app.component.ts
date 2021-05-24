import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TrabajoPracticoTW2';

  constructor(private http: HttpClient) {
    // this.http.get('https://www.google.com/').subscribe((result) => {
    //   console.log('XXX');
    // });
  }
}
