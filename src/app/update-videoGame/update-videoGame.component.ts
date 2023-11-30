import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';
import { Prespective } from '../model/prespective.model';

@Component({
  selector: 'app-update-videoGame',
  templateUrl: './update-videoGame.component.html',
})
export class UpdatevideoGameComponent {
  currentVideoGame = new VideoGame();
  prespectives!: Prespective[];
  updatedPresId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private videoGameService: VideoGameService
  ) {}

  ngOnInit(): void {
    this.prespectives = this.videoGameService.listePrespectives();
    this.currentVideoGame = this.videoGameService.consulterVideoGame(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentVideoGame);
    this.updatedPresId = this.currentVideoGame.prespective!.idPrespective;
  }
  updateVideoGame() {
    this.currentVideoGame.prespective =
      this.videoGameService.consulterPrespective(this.updatedPresId);
    this.videoGameService.updateVideoGame(this.currentVideoGame);
    this.router.navigate(['videoGames']);
  }
}
