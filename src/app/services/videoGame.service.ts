import { Injectable } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { Router } from '@angular/router';
import { Prespective } from '../model/prespective.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoGameService {
  videoGames: VideoGame[];
  prespectives: Prespective[];

  constructor() {
    this.prespectives = [
      { idPrespective: 1, nomPrespective: 'FPS' },
      { idPrespective: 2, nomPrespective: 'TPS' },
    ];
    this.videoGames = [
      {
        idVideoGame: 1,
        nomVideoGame: 'Grand Theft Auto',
        prixVideoGame: 3000.6,
        dateCreation: new Date('01/14/2011'),
        prespective: { idPrespective: 2, nomPrespective: 'TPS' },
      },
      {
        idVideoGame: 2,
        nomVideoGame: 'Valorant',
        prixVideoGame: 450,
        dateCreation: new Date('12/17/2010'),
        prespective: { idPrespective: 1, nomPrespective: 'FPS' },
      },
      {
        idVideoGame: 3,
        nomVideoGame: 'Dying Light 2',
        prixVideoGame: 900.123,
        dateCreation: new Date('02/20/2020'),
        prespective: { idPrespective: 2, nomPrespective: 'TPS' },
      },
      {
        idVideoGame: 4,
        nomVideoGame: 'League Of Legend',
        prixVideoGame: 760.123,
        dateCreation: new Date('04/20/2020'),
        prespective: { idPrespective: 1, nomPrespective: 'FPS' },
      },
      {
        idVideoGame: 5,
        nomVideoGame: 'pes 2023',
        prixVideoGame: 410.123,
        dateCreation: new Date('02/10/2020'),
        prespective: { idPrespective: 2, nomPrespective: 'TPS' },
      },
    ];
  }
  listeVideoGame(): VideoGame[] {
    return this.videoGames;
  }

  ajouterVideoGame(videoGame: VideoGame) {
    this.videoGames.push(videoGame);
  }

  supprimerVideoGame(game: VideoGame) {
    const index = this.videoGames.indexOf(game, 0);
    if (index > -1) {
      this.videoGames.splice(index, 1);
    }
  }
  consulterVideoGame(id: number): VideoGame {
    return this.videoGames.find((p) => p.idVideoGame == id)!;
  }
  updateVideoGame(vg: VideoGame) {
    this.supprimerVideoGame(vg);
    this.ajouterVideoGame(vg);
    this.trierVideoGames();
  }
  listePrespectives(): Prespective[] {
    return this.prespectives;
  }
  consulterPrespective(id: number): Prespective {
    return this.prespectives.find((pres) => pres.idPrespective == id)!;
  }
  trierVideoGames() {
    this.videoGames = this.videoGames.sort((n1, n2) => {
      if ((n1.idVideoGame || 0) > (n2.idVideoGame || 1)) {
        return 1;
      }
      if ((n1.idVideoGame || 1) < (n2.idVideoGame || 0)) {
        return -1;
      }
      return 0;
    });
  }

  rechercherParPrespective(idPres: number): VideoGame[] {
    return this.videoGames.filter(
      (game) => game.prespective?.idPrespective == idPres
    );
  }
  rechercherParNom(nom: string): VideoGame[] {
    // console.log(nom);
    console.log(this.videoGames[0]);
    return this.videoGames.filter((game) =>
      game.nomVideoGame?.toLowerCase().includes(nom.toLowerCase())
    );
  }
}
