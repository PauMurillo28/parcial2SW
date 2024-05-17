import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  animes: Array<Anime> = [];
  selectedAnime!: Anime;
  selected: Boolean = false;
  promedioEP: number = 0;
  promedioR: number = 0;
  constructor(private animeService: AnimesService) { }
  getAnimes() {
    this.animeService.getAnimes().subscribe(
      (animes: Anime[]) => {
        this.animes = animes;
      }
    );
  }

  OnSelected(anime: Anime) {
    this.selectedAnime = anime;
    this.selected = true;
    this.promedioEpisodios
    this.promedioRating
  }

  promedioEpisodios() {
    let promedio = 0;
    for (let i = 0; i < this.animes.length; i++) {
      promedio += this.animes[i].episode;
    }
    return promedio;
  }

  promedioRating() {
    let promedio = 0;
    for (let i = 0; i < this.animes.length; i++) {
      promedio += this.animes[i].Rating;
    }
    return promedio / this.animes.length;
  }

  ngOnInit() {
    this.getAnimes();
    this.promedioEpisodios();
    this.promedioRating();
  }

}
