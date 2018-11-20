import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from '../starwars.interface';
import { StarwarsDataService } from '../starwars-data.service';

@Component({
  selector: 'cm-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  objectKeys = Object.keys;
  @Input() customers: ICharacter[];
  detailChar;

  constructor(private serv: StarwarsDataService) { }

  ngOnInit() {
    this.serv.getCharacters().subscribe(data => this.customers = data);
  }
  
  showDetail(Char)
  {
    this.detailChar = Char;
    this.serv.getHomeworld(this.detailChar.homeworld)
    .subscribe(data => this.detailChar.homeworld = data.name
    );
    this.serv.getFilms(this.detailChar.films)

    this.redirectToDetails();
  }

  redirectToDetails()
  {
  document.querySelector('#details').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
