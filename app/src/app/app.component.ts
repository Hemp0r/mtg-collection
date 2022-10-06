import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  items = [];

  constructor(private apiService: ApiService) {
    this.apiService.getNews().subscribe((value: any) => {
      this.items = value.data.cards;
      console.log(this.items)
    });
  }
}
