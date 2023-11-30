import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { Prespective } from '../model/prespective.model';
import { VideoGameService } from '../services/videoGame.service';

@Component({
  selector: 'app-recherche-par-prespective',
  templateUrl: './recherche-par-prespective.component.html',
  styleUrls: [],
})
export class RechercheParPrespectiveComponent implements OnInit {
  VideoGames!: VideoGame[];
  IdPrespective!: number;
  prespectives!: Prespective[];

  constructor(private videGameService: VideoGameService) {}
  ngOnInit(): void {
    this.prespectives = this.videGameService.listePrespectives();
    this.VideoGames = this.videGameService.listeVideoGame();
  }

  onChange() {
   this.VideoGames =  this.videGameService.rechercherParPrespective(this.IdPrespective);
  }
}
