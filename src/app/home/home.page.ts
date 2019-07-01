import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public subjectslist: string[] = [
    'JAVA',
    'ANGULAR',
    'PYTHON'
  ];


  constructor(public alertContrl : AlertController) {}
  public uname="";
  public marks = "";
  public text = "Before Change";



 public async presentAlert() {
    const alert = await this.alertContrl.create({
      header: 'Summery',
      // subHeader: 'this changes save permenantly',
      message: "Name : "+this.uname+"<br>"+"Marks : "+this.marks,
      buttons: ['OK','Cancel'],

    });

    await alert.present();
  }



}
