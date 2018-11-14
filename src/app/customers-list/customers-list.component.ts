import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from '../starwars.interface';

@Component({
  selector: 'cm-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @Input() customers: ICharacter;
  detailChar;

  constructor() { }

  ngOnInit() {
  }
  
  showDetail(Char)
  {
    this.detailChar = Char;
  }

}
