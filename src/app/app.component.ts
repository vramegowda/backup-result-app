import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backup-result-app';

  fromDate: string = "";
  toDate: string = "";
  searchText: string = "test";

  search() {
    console.log(this.fromDate);
    console.log(this.toDate);
    console.log(this.searchText);
  }
}
