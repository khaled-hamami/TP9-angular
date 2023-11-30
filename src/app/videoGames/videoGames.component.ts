import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-videoGames',
  templateUrl: './videoGames.component.html',
})
export class VideoGamesComponent implements OnInit {
  videoGames: VideoGame[];

  constructor(
    private vidoGameService: VideoGameService,
    public authService: AuthService
  ) {
    this.videoGames = vidoGameService.listeVideoGame();
  }

  ngOnInit(): void {}
  supprimerVideoGame(game: VideoGame) {
    let conf = confirm('vous etes sure');
    if (conf) this.vidoGameService.supprimerVideoGame(game);
  }
}
