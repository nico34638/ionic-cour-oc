import { Component } from '@angular/core';
import { AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private alertCtrl: AlertController,
              private menuCtrl: MenuController) {
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
          handler: () => {
            console.log('eteint');
          }
        }
      ]
    });
    alert.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
