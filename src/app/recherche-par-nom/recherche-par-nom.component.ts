import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: [],
})
export class RechercheParNomComponent implements OnInit {
  nomVideoGame!: string;
  videoGames!: VideoGame[];
  allVideoGames!: VideoGame[];
  searchTerm!: string;
  constructor(private videoGameService: VideoGameService) {}
  ngOnInit(): void {
    this.videoGames = this.videoGameService.listeVideoGame();
  }
  rechercherGames() {
    this.videoGames = this.videoGameService.rechercherParNom(this.nomVideoGame);
  }
  onKeyUp(filterText: string) {
    this.videoGames = this.allVideoGames.filter((item) =>
      item.nomVideoGame!.toLowerCase().includes(filterText)
    );
  }
}
