import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';
import { Router } from '@angular/router';
import { Prespective } from '../model/prespective.model';

@Component({
  selector: 'app-add-videoGame',
  templateUrl: './add-videoGame.component.html',
})
export class AddvideoGameComponent implements OnInit {
  newVideoGame = new VideoGame();
  prespectives!: Prespective[];
  newIdPrespective!: number;
  newPrespective!: Prespective;
  constructor(
    private videoGameService: VideoGameService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.prespectives = this.videoGameService.listePrespectives();
  }

  addVideoGame() {
    this.newPrespective = this.videoGameService.consulterPrespective(
      this.newIdPrespective
    );
    this.newVideoGame.prespective = this.newPrespective;
    this.videoGameService.ajouterVideoGame(this.newVideoGame);
    this.router.navigate(['videoGames']);
  }
}
