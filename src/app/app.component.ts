import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers =[];
  constructor() {
  }
  addServer(){
    this.servers.push('Add Another Server');
  }
  removeServer( i: number ) {
    let position = i;
    this.servers.splice( position, 1 );
  }
}
