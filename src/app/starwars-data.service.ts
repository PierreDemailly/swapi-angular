import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { ICharacter } from './starwars.interface';

@Injectable({
  providedIn: 'root'
})

export class StarwarsDataService {

  api_url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient){}

  getCharacters(): Observable<ICharacter[]>
  {
    return this.http.get<ICharacter[]>(this.api_url).map(data => {
      return data['results'];
    })
  }

  getHomeworld(url) 
  {
    return this.http.get(url);
  }

  getFilms(url)
  {
    return this.http.get(url);
  }
}
