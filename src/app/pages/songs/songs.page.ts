import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage {

  textoBuscar = '';

  canciones: any[] = [];
  constructor( private _servicio: MusicService, public alertController: AlertController) {
    this._servicio.getCanciones()
    .subscribe( (data: any) => {
      console.log(data);
      this.canciones = data;
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Informacion',
      subHeader: 'Subtitle',
      message: 'canciones.nombreCancion',
      buttons: ['OK']
    });

    await alert.present();
  }

  buscar( event ){
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
