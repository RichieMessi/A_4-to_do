import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  items = ['Angular 4']

  newItem = ''

  pushItem = function() {
    if(this.newItem != ''){
      this.items.push(this.newItem)
    }
  }

  removeItem = function(index) {
    this.items.splice(index, 1)
  }

}
