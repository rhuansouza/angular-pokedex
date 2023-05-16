import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private pokeApiService: PokeApiService){}


  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => console.log(res)
    );
  }
}
