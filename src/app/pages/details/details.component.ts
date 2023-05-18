import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon";
  private urlName: string = "https://pokeapi.co/api/v2/pokemon-species";
  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ){}

  ngOnInit():void{
    this.getPokemon;
  }
  //Para deploy no gitpage usar public. rodar local usar get
  public getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);

    forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error =>{
        this.apiError = true;
      }
    )

    return console.log(id);
  }
}
