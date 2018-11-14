import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StarwarsDataService } from './starwars-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Customer Management';
  people: any[];

  constructor(private dataService: StarwarsDataService) { }

  ngOnInit() {
    this.dataService.getCharacters()
        .subscribe(data => this.people = data);
}
}
