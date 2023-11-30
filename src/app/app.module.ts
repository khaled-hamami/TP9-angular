import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddvideoGameComponent } from './add-videoGame/add-videoGame.component';
import { UpdatevideoGameComponent } from './update-videoGame/update-videoGame.component';
import { VideoGamesComponent } from './videoGames/videoGames.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParPrespectiveComponent } from './recherche-par-prespective/recherche-par-prespective.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SerachFilterPipe } from './serach-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpdatevideoGameComponent,
    AddvideoGameComponent,
    VideoGamesComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParPrespectiveComponent,
    RechercheParNomComponent,
    SerachFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
