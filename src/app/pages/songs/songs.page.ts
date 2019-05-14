import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage {

  canciones: any[] = [];
  constructor( private _servicio: MusicService) {
    this._servicio.getCanciones()
    .subscribe( (data: any) => {
      console.log(data);
      this.canciones = data;
    })
  }

}
