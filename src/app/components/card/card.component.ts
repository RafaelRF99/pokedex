import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  name: string = 'charmander';
  attributes: string[] = ['Fire', 'Grass'];

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.getPokemon(this.name).subscribe({
      next: (res) => console.log(res),
      error: (res) => console.log(res),
    });
  }
}
