import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private alertCtrl: AlertController) {
  }

  onToggleLights(){
    let alert = this.alertCtrl.create({
      title: 'Etes vous certaines de vouloir continuer?',
      subTitle: 'Cette action eteindra toutes les lumieres de la maison !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confimer',
          handler: () => console.log('Confimé !')
        }
      ]
    });
    alert.present();
  }

}
