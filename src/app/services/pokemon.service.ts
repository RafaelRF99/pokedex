import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = '';
  pokeData: IPokemon | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<IPokemon> {
    const valor = this.http.get<IPokemon>(`${this.baseURL}${pokemonName}`);
    return (this.pokeData = valor);
  }
}
